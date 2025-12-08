require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/User');
const connectDB = require('../src/config/db');

const createAdmin = async () => {
  try {
    // Connect to database
    await connectDB();

    const email = 'vimukthi@nethu.com';
    const password = 'Devi2003';
    const username = 'vimukthi'; // Using email prefix as username

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      console.log('⚠️  Admin user already exists!');
      console.log(`   Email: ${existingUser.email}`);
      console.log(`   Username: ${existingUser.username}`);
      console.log('\n   If you want to update the password, please delete the user first and run this script again.');
      process.exit(0);
    }

    // Create new admin user
    const adminUser = new User({
      username,
      email,
      password, // Will be hashed automatically by the pre-save hook
      role: 'admin'
    });

    await adminUser.save();

    console.log('✅ Admin user created successfully!');
    console.log(`   Email: ${email}`);
    console.log(`   Username: ${username}`);
    console.log(`   Password: ${password}`);
    console.log(`   Role: admin`);
    console.log('\n   You can now login to the admin dashboard with these credentials.');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:');
    console.error(`   ${error.message}`);
    
    if (error.code === 11000) {
      console.error('\n   User with this email or username already exists.');
    }
    
    process.exit(1);
  }
};

// Run the script
createAdmin();

