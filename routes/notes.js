// Declare notes as a router that will call on index.js 
const notes = require('express').Router();

// Import helper functions from fsUtils file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// This API route is a GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// This API route is a POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });
  
  module.exports = notes;
  