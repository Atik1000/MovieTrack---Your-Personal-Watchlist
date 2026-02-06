# 🎬 MovieTrack - Quick Start Guide

## ⚡ Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
pnpm install
```

### 2️⃣ Add Your TMDB API Key

Get a free API key from [TMDB](https://www.themoviedb.org/settings/api), then add it to `.env.local`:

```
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

### 3️⃣ Run the App
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and sign up to start using the app!

---

## 📚 Full Documentation

- **[README.md](README.md)** - Complete project overview and features
- **[SETUP.md](SETUP.md)** - Detailed setup instructions with troubleshooting
- **[IMPLEMENTATION.md](IMPLEMENTATION.md)** - Complete implementation details

---

## ✅ What's Been Implemented

✨ **All assessment requirements are complete:**

- ✅ Authentication (login/signup with localStorage)
- ✅ Movie search with TMDB API
- ✅ Movie details page
- ✅ Personal watchlist per user
- ✅ Add/remove from watchlist
- ✅ Protected routes
- ✅ Responsive design
- ✅ Loading states & animations
- ✅ Error handling
- ✅ Clean architecture

---

## 🎯 First Time Using the App?

1. **Sign Up**: Create account with any email/password (min 6 chars)
2. **Search**: Find movies using the search bar
3. **Add to Watchlist**: Click the heart icon on any movie
4. **View Details**: Click "Details" to see full movie info
5. **Manage Watchlist**: Go to "Watchlist" to see saved movies

---

## 🔧 Troubleshooting

**API Key Error?**
- Make sure `.env.local` exists in the root folder
- Restart the dev server after adding the key

**Movies Not Loading?**
- Check your TMDB API key is valid
- Verify your internet connection

**Login Issues?**
- Password must be at least 6 characters
- Try clearing browser localStorage

For more help, see [SETUP.md](SETUP.md)

---

## 🚀 Project Structure

```
├── app/                 # Pages
│   ├── page.tsx        # Login/Signup
│   ├── search/         # Movie search
│   ├── watchlist/      # User's watchlist
│   └── movie/[id]/     # Movie details
├── components/          # Reusable components
├── lib/                # Business logic
│   ├── tmdb.ts        # API integration
│   ├── watchlist.ts   # Watchlist utils
│   └── auth-context.tsx # Authentication
└── .env.local         # Your API key (create this!)
```

---

## 🌟 Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- TMDB API
- localStorage

---

## 📖 Need More Info?

- **Project Overview**: See [README.md](README.md)
- **Setup Help**: See [SETUP.md](SETUP.md)
- **Implementation Details**: See [IMPLEMENTATION.md](IMPLEMENTATION.md)
- **TMDB API Docs**: [developer.themoviedb.org](https://developer.themoviedb.org/docs)

---

Made with ❤️ for the Movie Watchlist Assessment
