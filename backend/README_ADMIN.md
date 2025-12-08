# Admin User Setup

This guide will help you create an admin user for the portfolio dashboard.

## Prerequisites

1. Make sure your `.env` file is configured with the MongoDB connection string
2. Ensure MongoDB is accessible and the connection is working

## Creating Admin User

### Method 1: Using npm script (Recommended)

Run the following command from the `backend` directory:

```bash
npm run create-admin
```

### Method 2: Direct execution

```bash
node scripts/createAdmin.js
```

## Default Admin Credentials

After running the script, you can login with:

- **Email**: `vimukthi@nethu.com`
- **Username**: `vimukthi`
- **Password**: `Devi2003`

## Login

1. Navigate to the login page: `/login`
2. Enter either your email (`vimukthi@nethu.com`) or username (`vimukthi`)
3. Enter your password: `Devi2003`
4. Click "Sign in"

## Notes

- The password is automatically hashed using bcrypt before saving
- If the user already exists, the script will notify you
- To change the password, you'll need to delete the existing user first and run the script again
- The user role is automatically set to `admin`

## Troubleshooting

### User already exists
If you see "Admin user already exists", the user has been created previously. You can:
- Use the existing credentials to login
- Or delete the user from MongoDB and run the script again

### Connection errors
Make sure:
- Your `.env` file has the correct `MONGO_URI`
- MongoDB Atlas cluster is running
- Your IP is whitelisted in MongoDB Atlas Network Access

