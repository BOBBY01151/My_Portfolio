require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/User');
const connectDB = require('../src/config/db');

const checkUser = async () => {
  try {
    // Connect to database
    await connectDB();

    const email = 'vimukthi@nethu.com';
    const username = 'vimukthi';

    // Check if user exists
    const user = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (!user) {
      console.log('❌ User not found in database!');
      console.log('\n   Please run: npm run create-admin');
      process.exit(1);
    }

    console.log('✅ User found in database!');
    console.log(`   ID: ${user._id}`);
    console.log(`   Email: ${user.email}`);
    console.log(`   Username: ${user.username}`);
    console.log(`   Role: ${user.role}`);
    console.log(`   Created: ${user.createdAt}`);
    console.log(`   Password hash exists: ${user.password ? 'Yes' : 'No'}`);
    console.log(`   Password length: ${user.password ? user.password.length : 0} characters`);

    // Test password comparison
    const testPassword = 'Devi2003';
    const isMatch = await user.comparePassword(testPassword);
    console.log(`\n   Password test for "${testPassword}": ${isMatch ? '✅ Match' : '❌ No match'}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error checking user:');
    console.error(`   ${error.message}`);
    process.exit(1);
  }
};

// Run the script
checkUser();

