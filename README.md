# Personal Website with Blog

A minimalist personal website with blog and project showcase functionality. Built with Node.js and Express.

## Features
- 🎯 Clean and responsive design
- 📝 Markdown-based blog posts
- 🚀 Project showcase
- 🎨 Easy to customize
- 📱 Mobile-friendly

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/hemangmehta/personal-website-template.git
cd personal-website-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Customization

### Personal Information
Edit `content/config.js` to update your personal information:

```javascript
module.exports = {
    // Personal Information
    name: "Your Name",
    role: "Your Role | Another Role",
    about: {
        description: [
            "First paragraph about yourself",
            "Second paragraph about yourself"
        ],
        interests: [
            "Interest 1",
            "Interest 2",
            "Interest 3"
        ]
    },

    // Social Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        email: "your.email@example.com"
    }
};
```

### Adding Projects
Add new projects in `content/config.js`:

```javascript
projects: [
    {
        id: "project-id",
        title: "Project Title",
        description: "Project description",
        github: "https://github.com/yourusername/project",
        tags: ["JavaScript", "Node.js"]
    }
]
```

### Adding Blog Posts

1. Create a new markdown file in `content/posts/` with the post ID as filename:
```markdown
# Post Title

Your content here in markdown format.

## Subheading

More content...

\```javascript
// Code examples
const hello = "world";
\```
```

2. Add the post metadata in `content/config.js`:
```javascript
posts: [
    {
        id: "post-id",          // Should match the markdown filename
        title: "Post Title",
        description: "Brief description",
        date: "2024-03-20",
        tags: ["Tag1", "Tag2"]
    }
]
```

### Styling
Customize the look and feel by editing:
- `public/style.css` - Main stylesheet
- Colors and variables in `:root` section
- Individual component styles

## Project Structure
```
project-root/
├── content/                    # All content
│   ├── config.js              # Site configuration
│   └── posts/                 # Blog posts (markdown)
├── public/                    # Static files
│   └── style.css             # Styles
├── routes/                    # Route handlers
│   └── handlers.js           # Request handlers
├── utils/                     # Utility functions
│   ├── htmlGenerator.js      # HTML generation
│   ├── markdown.js           # Markdown processing
│   └── template.js           # Template handling
├── views/                    
│   └── templates/            # HTML templates
├── server.js                 # Main application file
└── package.json              # Dependencies
```

## Markdown Features
Your blog posts support:
- Headers (# to ######)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Links and images
- Blockquotes
- Tables
- And more!

## Deployment
The site can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Heroku
```bash
heroku create
git push heroku main
```

## Contributing
Feel free to submit issues and pull requests!

## License
MIT License - feel free to use this project as a template for your personal website. 