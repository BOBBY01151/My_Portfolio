# Troubleshooting Login Issues

## Step 1: Verify User Exists in Database

Run this command to check if the admin user exists:

```bash
npm run check-user
```

This will show:
- If the user exists
- User details (email, username, role)
- Password hash verification
- Test password comparison

## Step 2: Create Admin User (if not exists)

If the user doesn't exist, create it:

```bash
npm run create-admin
```

Expected output:
```
✅ Admin user created successfully!
   Email: vimukthi@nethu.com
   Username: vimukthi
   Password: Devi2003
   Role: admin
```

## Step 3: Verify Database Connection

Make sure your `.env` file has the correct MongoDB connection string:

```env
MONGO_URI=mongodb+srv://vibuproduction_db_user:4EbS8ojDnWnSgxki@cluster0.onhtmk6.mongodb.net/portfolio?appName=Cluster0
```

## Step 4: Test Login Credentials

### Valid Login Options:

You can login with **either**:
- **Email**: `vimukthi@nethu.com`
- **Username**: `vimukthi`
- **Password**: `Devi2003`

### Common Issues:

1. **"Invalid credentials" error**
   - Make sure you ran `npm run create-admin`
   - Verify user exists with `npm run check-user`
   - Check backend console for detailed error messages
   - Ensure password is exactly: `Devi2003` (case-sensitive)

2. **"User not found"**
   - User hasn't been created in database
   - Run `npm run create-admin` first

3. **"Password mismatch"**
   - Password is case-sensitive
   - Make sure you're using: `Devi2003`
   - Check for extra spaces in the password field

4. **Connection errors**
   - Verify MongoDB connection string in `.env`
   - Check if MongoDB Atlas cluster is running
   - Verify IP whitelist in MongoDB Atlas

## Step 5: Check Backend Logs

When you attempt to login, check your backend console. You should see:

```
User found: vimukthi@nethu.com, checking password...
Login successful for user: vimukthi@nethu.com
```

If you see errors, they will help identify the issue.

## Step 6: Verify API Endpoint

Make sure your frontend is calling the correct API endpoint:
- Frontend calls: `/api/auth/login`
- Backend route: `/api/auth/login` ✅

Check your `frontend/.env` file:
```env
VITE_API_URL=/api
```

## Step 7: Reset User (if needed)

If you need to recreate the user:

1. Delete the user from MongoDB (via MongoDB Atlas or script)
2. Run `npm run create-admin` again

## Still Having Issues?

1. Check backend server is running: `npm run dev`
2. Check frontend console for errors
3. Check backend console for detailed logs
4. Verify network tab in browser DevTools for API calls
5. Ensure CORS is configured correctly in backend

