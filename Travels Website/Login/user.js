const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Import the database connection

// Define User model
const User = sequelize.define('User', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

// Sync model with database
sequelize.sync()
  .then(() => console.log('✅ User Table Synced'))
  .catch(err => console.error('❌ Sync Error:', err));

module.exports = User;
