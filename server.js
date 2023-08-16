const express = require('express');
const path = require('path');

// Import router from the below file path
const api = require('./routes/index');

const PORT = 3001;

const app = express();

// Middleware: Parse JSON and/or URL encoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Middleware: Any incoming request to paths like "/api/someEndpoint" will go through the middleware defined by the 'api' router.
app.use('/api', api);

// Serve images, css files, js files from the public directory. Allows us to reference files with their relative path
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Start the server and log a message upon successful startup
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`) 
);