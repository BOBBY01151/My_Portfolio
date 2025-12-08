require('dotenv').config();

console.log('🔍 Checking Environment Variables...\n');

const requiredVars = {
  'MONGO_URI': process.env.MONGO_URI,
  'JWT_SECRET': process.env.JWT_SECRET,
  'PORT': process.env.PORT || '3001 (default)',
  'NODE_ENV': process.env.NODE_ENV || 'development (default)',
  'CLIENT_ORIGIN': process.env.CLIENT_ORIGIN || 'http://localhost:5173 (default)'
};

let allGood = true;

for (const [key, value] of Object.entries(requiredVars)) {
  if (key === 'JWT_SECRET' || key === 'MONGO_URI') {
    if (!value || value.includes('your-super-secret') || value.includes('localhost:27017')) {
      console.log(`❌ ${key}: Missing or using default value`);
      allGood = false;
    } else {
      const displayValue = key === 'JWT_SECRET' 
        ? `${value.substring(0, 10)}... (hidden)`
        : value.replace(/:[^:@]+@/, ':****@'); // Hide password in MongoDB URI
      console.log(`✅ ${key}: ${displayValue}`);
    }
  } else {
    console.log(`✅ ${key}: ${value}`);
  }
}

if (!allGood) {
  console.log('\n⚠️  Missing required environment variables!');
  console.log('\nPlease create a .env file in the backend directory with:');
  console.log('MONGO_URI=your_mongodb_connection_string');
  console.log('JWT_SECRET=your_random_secret_key_here');
  console.log('\nYou can copy env.example to .env and update the values.');
  process.exit(1);
} else {
  console.log('\n✅ All environment variables are configured!');
  process.exit(0);
}

