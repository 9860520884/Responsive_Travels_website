const { Sequelize } = require('sequelize');

// Define database credentials directly
const DB_NAME = 'user_signup';  // Your database name
const DB_USER = 'root';         // Your MySQL username
const DB_PASS = 'root';             // Your MySQL password (keep empty if no password)
const DB_HOST = 'localhost';    // Your MySQL host

// Create a new Sequelize instance for MySQL connection
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false // Disable SQL query logging
});

// Function to connect to the database
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ MySQL Database Connected Successfully');
    } catch (error) {
        console.error('❌ Database Connection Failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// Execute the connection function
connectDB();

module.exports = sequelize;
