const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    const conn = await mongoose.connect(mongoUri, {
      // MongoDB Atlas connection options
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });

    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`   Host: ${conn.connection.host}`);
    console.log(`   Database: ${conn.connection.name}`);
    console.log(`   Ready State: ${conn.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
  } catch (error) {
    console.error('❌ Database connection error:');
    console.error(`   ${error.message}`);
    
    if (error.name === 'MongoServerSelectionError') {
      console.error('   Unable to reach MongoDB server. Please check:');
      console.error('   - Your internet connection');
      console.error('   - MongoDB Atlas cluster is running');
      console.error('   - IP whitelist includes your current IP');
      console.error('   - Connection string is correct');
    }
    
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

mongoose.connection.on('reconnected', () => {
  console.log('✅ MongoDB reconnected');
});

module.exports = connectDB;
