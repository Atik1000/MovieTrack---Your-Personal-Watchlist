# Setup Guide for MovieTrack

This guide will help you set up and run the MovieTrack application.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **pnpm** (recommended) or npm
- A **TMDB account** for API access

## Step-by-Step Setup

### 1. Get TMDB API Key

1. Visit [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Click **Sign Up** to create a free account
3. Once logged in, go to your account settings
4. Navigate to **API** section in the left sidebar
5. Click **Create** or **Request an API Key**
6. Choose **Developer** option
7. Fill out the required information
8. Copy your **API Key (v3 auth)**

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` in your text editor

3. Add your TMDB API key:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_actual_api_key_here
   ```

   Replace `your_actual_api_key_here` with the API key you copied from TMDB.

### 4. Run the Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 5. Build for Production (Optional)

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## First Time Usage

1. **Navigate to the app**: Open [http://localhost:3000](http://localhost:3000) in your browser

2. **Create an account**:
   - You'll see the login/signup page
   - Click **Sign up**
   - Enter any email address (e.g., `user@example.com`)
   - Enter a password (minimum 6 characters)
   - Click **Create Account**

3. **Start using the app**:
   - You'll be redirected to the search page
   - Popular movies will be displayed automatically
   - Use the search bar to find specific movies
   - Click the heart icon to add movies to your watchlist
   - Navigate to **Watchlist** to see your saved movies

## Troubleshooting

### "TMDB API key is not configured" Error

**Problem**: You see this error when searching for movies.

**Solution**: 
1. Check that `.env.local` exists in the root directory
2. Verify the API key is correctly set: `NEXT_PUBLIC_TMDB_API_KEY=your_key`
3. Make sure there are no extra spaces or quotes
4. Restart the development server after changing `.env.local`

### Movies Not Loading

**Problem**: Movies don't appear or show loading indefinitely.

**Solution**:
1. Check your internet connection
2. Verify your TMDB API key is valid and active
3. Check the browser console (F12) for error messages
4. Ensure you haven't exceeded the TMDB API rate limits

### Login Not Working

**Problem**: Can't log in or create account.

**Solution**:
1. For signup: Make sure password is at least 6 characters
2. For login: Use the same email/password you signed up with
3. Check browser console for errors
4. Clear browser localStorage and try again:
   - Open DevTools (F12)
   - Go to Application → Local Storage
   - Clear movieTrack entries

### Port 3000 Already in Use

**Problem**: Error says port 3000 is already in use.

**Solution**:
```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill

# Or use a different port
pnpm dev -- -p 3001
```

## Development Tips

### Clearing User Data

To reset all user data and watchlists:
1. Open browser DevTools (F12)
2. Go to **Application** → **Local Storage**
3. Find your localhost entry
4. Delete all items starting with `movieTrack.`

### Testing Different Users

1. Log out from the current session
2. Sign up with a different email
3. Each user has their own watchlist

### API Rate Limits

TMDB free tier allows:
- 40 requests every 10 seconds
- If you exceed this, wait a few seconds and try again

## Project Structure Overview

```
├── app/
│   ├── page.tsx              # Login/Signup
│   ├── search/page.tsx       # Movie search
│   ├── watchlist/page.tsx    # User watchlist
│   └── movie/[id]/page.tsx   # Movie details
├── components/
│   ├── navigation.tsx        # Nav bar
│   ├── movie-skeleton.tsx    # Loading states
│   └── ui/                   # UI components
├── lib/
│   ├── auth-context.tsx      # Authentication
│   ├── tmdb.ts              # API integration
│   └── watchlist.ts         # Watchlist logic
└── .env.local               # Your API key (don't commit!)
```

## Additional Resources

- [TMDB API Documentation](https://developer.themoviedb.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## Need Help?

If you encounter any issues not covered here:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Make sure all dependencies are installed
4. Try clearing browser cache and localStorage
5. Restart the development server

## Next Steps

Once everything is working:
- Explore the codebase
- Try adding new features
- Customize the UI to your liking
- Consider adding a real backend authentication system
