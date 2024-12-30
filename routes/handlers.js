const { loadTemplate, replaceTemplateVariables } = require('../utils/template');
const { generateProjectHTML, generatePostHTML, formatDate, generateTags } = require('../utils/htmlGenerator');
const { renderMarkdown } = require('../utils/markdown');
const config = require('../content/config');

const getHomePageHandler = async (req, res) => {
    try {
        const template = await loadTemplate('main-template');
        
        const replacements = {
            'name': config.name,
            'role': config.role,
            'about': config.about.description.map(p => `<p>${p}</p>`).join(''),
            'interests': config.about.interests.map(i => `<li>${i}</li>`).join(''),
            'github': config.social.github,
            'linkedin': config.social.linkedin,
            'email': config.social.email,
            'projects': config.projects.map(generateProjectHTML).join(''),
            'posts': config.posts.map(generatePostHTML).join(''),
            'copyright': config.site.copyright
        };

        const html = replaceTemplateVariables(template, replacements);
        res.send(html);
    } catch (error) {
        console.error('Error loading home page:', error);
        res.status(500).send('Internal Server Error');
    }
};

const getBlogPostHandler = async (req, res) => {
    try {
        const template = await loadTemplate('post-template');
        const post = config.posts.find(p => p.id === req.params.post);
        
        if (!post) return res.status(404).send('Post not found');

        const content = await renderMarkdown(post.id);
        const contentWithoutTitle = content.split('\n').slice(1).join('\n');

        const replacements = {
            'post-title': post.title,
            'content': contentWithoutTitle,
            'name': config.name,
            'date': formatDate(post.date),
            'tags': generateTags(post.tags),
            'copyright': config.site.copyright
        };

        const html = replaceTemplateVariables(template, replacements);
        res.send(html);
    } catch (error) {
        console.error('Error rendering post:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getHomePageHandler,
    getBlogPostHandler
}; 