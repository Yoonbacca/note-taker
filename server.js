const path = require('path');
const express = require('express');

// Import router from the below file path
const api = require('./routes/index');

const PORT = 3001;

cosnt app = express();

// Middleware: Parse JSON and/or URL encoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/api', api);

app.get('/', (req, res) ->
    res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.get('/notes', (req, res) ->
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`) // Start the server and log a message upon successful startup
);