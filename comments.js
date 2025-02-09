// Create web server
// Start web server
// Create an endpoint for GET /comments
// Create an endpoint for POST /comments
// Create an endpoint for PUT /comments/:id
// Create an endpoint for DELETE /comments/:id

const express = require("express");
const app = express();
const comments = require("./comments");

app.use(express.json(
    {
        extended: true
    }
));