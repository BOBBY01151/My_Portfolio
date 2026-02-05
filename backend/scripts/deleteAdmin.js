require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/User');
const connectDB = require('../src/config/db');

const deleteAdmin = async () => {
  try {
    // Connect to database
    await connectDB();

    const email = 'vimukthi@nethu.com';
    const username = 'vimukthi';

    // Find and delete the user
    const result = await User.deleteOne({
      $or: [{ email }, { username }]
    });

    if (result.deletedCount > 0) {
      console.log('✅ Admin user deleted successfully!');
      console.log(`   Email: ${email}`);
      console.log(`   Username: ${username}`);
      console.log('\n   You can now run "npm run create-admin" to recreate the admin user.');
    } else {
      console.log('⚠️  Admin user not found.');
      console.log(`   Email: ${email}`);
      console.log(`   Username: ${username}`);
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error deleting admin user:');
    console.error(`   ${error.message}`);
    process.exit(1);
  }
};

// Run the script
deleteAdmin();
