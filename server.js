const express = require('express');
const path = require('path');
const cors = require('cors');
// const db = require('./config/db'); // Assuming you have a DB config file

const app = express();

// 1. Middlewares
app.use(cors());
app.use(express.json()); // Essential for receiving JSON data from React

// 2. API Routes (Inventory Logic)
// Example: app.use('/api/products', require('./routes/productRoutes'));
app.get('/api/status', (req, res) => {
    res.json({ message: "Inventory API is running..." });
});

// 3. Serve Static Assets (The React Build)
// This points to the 'build' (CRA) or 'dist' (Vite) folder inside /client
app.use(express.static(path.join(__dirname, 'client/dist')));

// 4. The "Catch-all" Route
// If the user hits a route that isn't an API, send the React index.html
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});