// // const express = require('express');
// // const fs = require('fs');
// // const path = require('path');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const PORT = 8000;

// // const dataDir = path.join(__dirname, 'data');
// // const filePath = path.join(dataDir, 'options.json');

// // // Ensure data directory exists
// // if (!fs.existsSync(dataDir)) {
// //     fs.mkdirSync(dataDir, { recursive: true });
// // }

// // // Ensure options.json exists and is properly formatted
// // if (!fs.existsSync(filePath)) {
// //     fs.writeFileSync(filePath, '[]', 'utf8'); // Initialize empty JSON array
// // }

// // // Middleware to parse JSON
// // app.use(bodyParser.json());

// // // Serve static files
// // app.use(express.static(__dirname));

// // // Serve index.html
// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'index.html'));
// // });

// // // Serve contacts.html
// // app.get('/contacts', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'contacts.html'));
// // });

// // app.post('/submit', (req, res) => {
// //     console.log("Received data:", req.body); // Debugging

// //     const newEntry = {
// //         name: req.body.name,
// //         phone: req.body.phone,
// //         email: req.body.email,
// //         location: req.body.location,
// //         budget: req.body.budget,
// //         property_type: req.body.property_type,
// //         rooms: req.body.rooms,
// //         washrooms: req.body.washrooms,
// //         possession_status: req.body.possession_status,
// //         furnishing: req.body.furnishing,
// //         amenities: req.body.amenities || [],
// //         floor: req.body.floor,
// //         transport_facility: req.body.transport || [], 
// //         timestamp: new Date().toISOString()
// //     };

// //     console.log("New entry:", newEntry); // Debugging

// //     fs.readFile(filePath, 'utf8', (err, data) => {
// //         let contacts = [];
// //         if (!err && data) {
// //             try {
// //                 contacts = JSON.parse(data);
// //             } catch (e) {
// //                 console.error("Error parsing JSON. Resetting file.");
// //                 contacts = [];
// //             }
// //         }

// //         contacts.push(newEntry);

// //         // fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
// //         //     if (err) {
// //         //         console.error("Error writing to JSON file:", err);
// //         //         return res.status(500).json({ message: 'Error saving data' });
// //         //     }
// //         //     res.json({ message: 'Property requirements saved successfully' });
// //         // });

// //         // Execute shell script to run Python script
// //         const shellScript = path.join(__dirname, 'run_roastCustomer.sh');
// //         const pythonScript = path.join(__dirname, 'python roastCustomer.py');

// //         const child = spawn(shellScript, [pythonScript]);

// //         child.stdout.on('data', (data) => {
// //             console.log(`stdout: ${data}`);
// //         });

// //         child.stderr.on('data', (data) => {
// //             console.error(`stderr: ${data}`);
// //         });

// //         child.on('close', (code) => {
// //             console.log(`Child process exited with code ${code}`);
// //         });
// //     });
// // });

// // // Start server
// // app.listen(PORT, () => {
// //     console.log(`Server running at http://localhost:${PORT}`);
// // });



// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
// const { spawn } = require('child_process'); // Import spawn from child_process module

// const app = express();
// const PORT = 8000;

// const dataDir = path.join(__dirname, 'data');
// const filePath = path.join(dataDir, 'options.json');

// // Ensure data directory exists
// if (!fs.existsSync(dataDir)) {
//     fs.mkdirSync(dataDir, { recursive: true });
// }

// // Ensure options.json exists and is properly formatted
// if (!fs.existsSync(filePath)) {
//     fs.writeFileSync(filePath, '[]', 'utf8'); // Initialize empty JSON array
// }

// // Middleware to parse JSON
// app.use(bodyParser.json());

// // Serve static files
// app.use(express.static(__dirname));

// // Serve index.html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Serve contacts.html
// app.get('/contacts', (req, res) => {
//     res.sendFile(path.join(__dirname, 'contacts.html'));
// });

// app.post('/submit', (req, res) => {
//     console.log("Received data:", req.body); // Debugging

//     const newEntry = {
//         name: req.body.name,
//         phone: req.body.phone,
//         email: req.body.email,
//         location: req.body.location,
//         budget: req.body.budget,
//         property_type: req.body.property_type,
//         rooms: req.body.rooms,
//         washrooms: req.body.washrooms,
//         possession_status: req.body.possession_status,
//         furnishing: req.body.furnishing,
//         amenities: req.body.amenities || [],
//         floor: req.body.floor,
//         transport_facility: req.body.transport || [],
//         timestamp: new Date().toISOString()
//     };

//     console.log("New entry:", newEntry); // Debugging

//     fs.readFile(filePath, 'utf8', (err, data) => {
//         let contacts = [];
//         if (!err && data) {
//             try {
//                 contacts = JSON.parse(data);
//             } catch (e) {
//                 console.error("Error parsing JSON. Resetting file.");
//                 contacts = [];
//             }
//         }

//         contacts.push(newEntry);

//         // Uncomment to write to JSON file if needed
//         fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
//             if (err) {
//                 console.error("Error writing to JSON file:", err);
//                 return res.status(500).json({ message: 'Error saving data' });
//             }
//             res.json({ message: 'Property requirements saved successfully' });
//         });

//         // Execute shell script to run Python script
//         // const shellScript = path.join(__dirname, 'run_roastCustomer.sh'); // Path to shell script

//         // const child = spawn(shellScript, []); // Run the shell script without any extra arguments

//         // child.stdout.on('data', (data) => {
//         //     console.log(`stdout: ${data}`);
//         // });

//         // child.stderr.on('data', (data) => {
//         //     console.error(`stderr: ${data}`);
//         // });

//         // child.on('close', (code) => {
//         //     console.log(`Child process exited with code ${code}`);
//         // });

//         res.json({ message: 'Data received and Python script triggered successfully' });
//     });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });



const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios'); // Import axios for HTTP requests
const dotenv = require('dotenv'); // Import dotenv to load environment variables

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 8000;

const dataDir = path.join(__dirname, 'data');
const filePath = path.join(dataDir, 'options.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Ensure options.json exists and is properly formatted
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8'); // Initialize empty JSON array
}

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files
app.use(express.static(__dirname));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'react.html'));
});

// Serve contacts.html
app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'contacts.html'));
});

app.post('/book-event', async (req, res) => {
    console.log("Booking event received:", req.body);

    const { title, description, phone, price, budget, location,  } = req.body;

    try {
        // Get environment variables for API call
        const apiKey = process.env.API_KEY;
        const bookEventUrl = process.env.BOOK_EVENT_URL;  
        const bookEventUrl_p = process.env.BOOK_EVENT_URL_PATHWAY;  

        // Make the API call Event
        // const response = await axios.post(bookEventUrl, { title, description, phone, price }, {
        //     headers: {
        //         'Authorization': apiKey,
        //         'Content-Type': 'application/json'
        //     }
        // });
        // Book Event Using Pathway
        const response = await axios.post(bookEventUrl, { title, description, phone, price,location, category, bedrooms, currency }, {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            }
        });
        

        if (response.status === 200) {
            res.json({ message: 'Property booking event triggered successfully' });
        } else {
            res.status(response.status).json({ message: 'Error triggering booking event', error: response.data });
        }
    } catch (err) {
        console.error("Error triggering booking event:", err);
        res.status(500).json({ message: 'Error triggering booking event', error: err.message });
    }
});


// Handle POST request
app.post('/submit', async (req, res) => {
    console.log("Received data:", req.body);

    const newEntry = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        location: req.body.location,
        budget: req.body.budget,
        property_type: req.body.property_type,
        rooms: req.body.rooms,
        washrooms: req.body.washrooms,
        possession_status: req.body.possession_status,
        furnishing: req.body.furnishing,
        amenities: req.body.amenities || [],
        floor: req.body.floor,
        transport_facility: req.body.transport || [],
        timestamp: new Date().toISOString()
    };

    console.log("New entry:", newEntry); // Debugging

    // Read the current contents of options.json
    fs.readFile(filePath, 'utf8', async (err, data) => {
        let contacts = [];
        if (!err && data) {
            try {
                contacts = JSON.parse(data);
            } catch (e) {
                console.error("Error parsing JSON. Resetting file.");
                contacts = [];
            }
        }

        contacts.push(newEntry);

        // Write the new contact entry to options.json
        fs.writeFile(filePath, JSON.stringify(contacts, null, 2), async (err) => {
            if (err) {
                console.error("Error writing to JSON file:", err);
                return res.status(500).json({ message: 'Error saving data' });
            }

            try {
                // Get environment variables for API call
                const apiKey = process.env.API_KEY;
                const roastEventUrl = process.env.ROAST_EVENT;
                
                // Make the API call
                const response = await axios.post(roastEventUrl, contacts[contacts.length - 1], {
                    headers: {
                        'Authorization': apiKey,
                        'Content-Type': 'application/json'
                    }
                });

                // Handle the response from the API
                if (response.status === 200) {
                    res.json({ message: 'Property requirements saved and event triggered successfully' });
                } else {
                    res.status(response.status).json({ message: 'Error triggering event', error: response.data });
                }
            } catch (err) {
                console.error("Error triggering event:", err);
                res.status(500).json({ message: 'Error triggering event', error: err.message });
            }
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
