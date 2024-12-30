const express = require('express');
const { getHomePageHandler, getBlogPostHandler } = require('./routes/handlers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Routes
app.get('/', getHomePageHandler);
app.get('/blog/:post', getBlogPostHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 