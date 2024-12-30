const fs = require('fs').promises;
const path = require('path');

const loadTemplate = async (name) => {
    try {
        const templatePath = path.join(__dirname, '..', 'views', 'templates', `${name}.html`);
        return await fs.readFile(templatePath, 'utf8');
    } catch (error) {
        console.error('Error loading template:', error);
        throw error;
    }
};

const replaceTemplateVariables = (template, replacements) => {
    return Object.entries(replacements).reduce((html, [key, value]) => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        return html.replace(regex, value);
    }, template);
};

module.exports = {
    loadTemplate,
    replaceTemplateVariables
}; 