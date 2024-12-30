const { marked } = require('marked');
const fs = require('fs').promises;
const path = require('path');
const hljs = require('highlight.js');

marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
    mangle: false,
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(code, { language: lang }).value;
            } catch (err) {}
        }
        return code;
    }
});

async function renderMarkdown(filename) {
    try {
        const content = await fs.readFile(
            path.join(__dirname, '..', 'content', 'posts', `${filename}.md`),
            'utf8'
        );
        
        return marked(content);
    } catch (error) {
        console.error('Error reading markdown file:', error);
        throw error;
    }
}

module.exports = { renderMarkdown }; 