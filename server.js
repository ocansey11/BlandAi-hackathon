const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files
app.use(express.static(__dirname));

// Force `index.html` to load when visiting `/`
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const newEntry = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
        timestamp: new Date().toISOString()
    };

    const filePath = path.join(__dirname, 'contacts.json');

    // Read existing data
    fs.readFile(filePath, 'utf8', (err, data) => {
        let contacts = [];
        if (!err && data) {
            contacts = JSON.parse(data);
        }
        // Append new entry
        contacts.push(newEntry);

        // Write back to JSON file
        fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving data' });
            }
            res.json({ message: 'Contact saved successfully' });
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
