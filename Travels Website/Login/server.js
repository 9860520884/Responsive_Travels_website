const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const sequelize = require('./db'); // Database connection

const app = express();
const PORT = 5000; // Define the port manually

app.use(cors());
app.use(bodyParser.json());

// Signup Route
app.post('/signup', async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        await User.create({ firstname, lastname, email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Start the server
app.listen(PORT, async () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    try {
        await sequelize.sync(); // Ensure database tables are created
        console.log('✅ Database synchronized');
    } catch (error) {
        console.error('❌ Database sync error:', error.message);
    }
});
