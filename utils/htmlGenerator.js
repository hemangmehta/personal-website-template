const generateProjectHTML = (project) => `
    <li class="list-item">
        <a href="${project.github}" target="_blank" class="item-link">
            <div class="item-content">
                <span class="item-title">${project.title}</span>
                <div class="item-tags">
                    ${generateTags(project.tags)}
                </div>
            </div>
            <i class="fas fa-external-link-alt"></i>
        </a>
    </li>
`;

const generatePostHTML = (post) => `
    <li class="list-item">
        <a href="/blog/${post.id}" class="item-link">
            <div class="item-content">
                <span class="item-title">${post.title}</span>
                <div class="item-meta">
                    <time><i class="far fa-calendar"></i> ${formatDate(post.date)}</time>
                    <div class="item-tags">
                        ${generateTags(post.tags)}
                    </div>
                </div>
            </div>
            <i class="fas fa-chevron-right"></i>
        </a>
    </li>
`;

const generateTags = (tags) => tags.map(tag => `<span>${tag}</span>`).join('');

const formatDate = (date) => new Date(date).toLocaleDateString();

module.exports = {
    generateProjectHTML,
    generatePostHTML,
    generateTags,
    formatDate
}; 