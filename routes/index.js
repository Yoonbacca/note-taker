const express = require('express');

// Import our modular router for /notes
const notesRouter = require('./notes');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;
