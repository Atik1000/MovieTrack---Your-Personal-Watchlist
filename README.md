# 🎬 MovieTrack - Your Personal Movie Watchlist

<div align="center">

A modern, feature-rich movie watchlist application built with **Next.js 16**, featuring real-time movie search, comprehensive movie details, and personalized watchlist management powered by **TMDB API**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://reactjs.org/)

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ✨ Features

### 🔐 **Authentication System**
- **Mock Email/Password Authentication**: Secure login and signup functionality
- **Persistent Sessions**: Sessions maintained across browser refreshes using localStorage
- **Protected Routes**: Authentication required for accessing search, watchlist, and movie details
- **Global State Management**: React Context API for seamless auth state across the app
- **Email Validation**: Built-in validation with helpful error messages
- **Logout Functionality**: Easy account switching with secure logout

### 🔍 **Movie Search**
- **Real-Time Search**: Instant movie search powered by TMDB API as you type
- **Popular Movies**: Discover trending movies on initial page load
- **Smart Loading States**: Skeleton UI for better perceived performance
- **Comprehensive Movie Cards**: 
  - High-quality poster images
  - Movie titles and release years
  - Genre tags with color coding
  - Rating indicators
  - Quick add-to-watchlist button
  - Smooth hover animations and transitions
- **Responsive Grid Layout**: Adapts from 1 to 3 columns based on screen size
- **Empty State Handling**: Helpful messages when no results are found
- **Error Recovery**: Graceful error handling with retry options

### 🎥 **Movie Details Page**
- **Comprehensive Information Display**:
  - Cinematic backdrop hero images
  - High-resolution poster images
  - Movie title, tagline, and overview
  - Release date and runtime
  - Current status (Released, In Production, etc.)
  - IMDb-style rating with star visualization
  - Genre badges with hover effects
- **Interactive Watchlist Button**: One-click add/remove with visual feedback
- **Smart Navigation**: Back button and continue searching options
- **Loading Indicators**: Smooth skeleton loaders during data fetch
- **Error Handling**: 404 pages for invalid movie IDs
- **Fully Responsive**: Optimized layouts for all screen sizes

### 📋 **Personal Watchlist**
- **Per-User Storage**: Each user has their own personal watchlist
- **Persistent Data**: Movies saved securely in localStorage
- **Real-Time Sync**: Instant updates when adding or removing movies
- **Full Movie Data**: Fetches complete details for all watchlist items
- **Beautiful Grid Layout**: Consistent design with search page
- **Quick Actions**: Remove movies with a single click
- **Movie Count**: Display total saved movies
- **Empty State Guidance**: Helpful prompts when watchlist is empty
- **Protected Access**: Login required to view watchlist

### 🎨 **User Experience & Design**
- **Modern UI Design**: Clean, professional interface with shadcn/ui components
- **Dark Mode Support**: Built-in theme switching capability
- **Smooth Animations**: 
  - Card hover effects with scale and shadow
  - Heart icon fill animation
  - Button microinteractions
  - Page transitions
- **Mobile-First Responsive**: Optimized for phones, tablets, and desktops
- **Loading Skeletons**: Improved perceived performance during data fetching
- **Consistent Styling**: Unified design language across all pages
- **Accessibility**: Semantic HTML and ARIA labels where appropriate
- **Error Boundaries**: Graceful error handling throughout the app

### 🧰 **Technical Excellence**
- **Type-Safe**: Full TypeScript implementation with strict typing
- **Service Layer**: Clean abstraction of API calls in `lib/tmdb.ts`
- **Utility Functions**: Reusable helper functions for watchlist management
- **Environment Variables**: Secure API key management
- **Error Handling**: Comprehensive error handling at all layers
- **Code Organization**: Clear separation of concerns
- **Performance Optimized**: React 19 concurrent features support
- **SEO Ready**: Next.js App Router with metadata support

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5.0](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **API** | [TMDB](https://www.themoviedb.org/) (The Movie Database) |
| **State Management** | React Context API |
| **Data Persistence** | localStorage |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Package Manager** | pnpm |
| **Runtime** | Node.js 18+ |

---

## 📁 Project Structure

```
v0-movie-watchlist-ui/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # 🏠 Login/Signup page
│   ├── layout.tsx                # Root layout with providers
│   ├── providers.tsx             # Context providers wrapper
│   ├── globals.css               # Global styles and Tailwind
│   ├── search/
│   │   └── page.tsx              # 🔍 Movie search page
│   ├── watchlist/
│   │   └── page.tsx              # 📋 User watchlist page
│   └── movie/
│       └── [id]/
│           └── page.tsx          # 🎥 Movie details page (dynamic route)
│
├── components/
│   ├── navigation.tsx            # 🧭 Shared navigation bar
│   ├── movie-skeleton.tsx        # ⏳ Loading skeleton components
│   ├── theme-provider.tsx        # 🎨 Dark mode theme provider
│   └── ui/                       # 🧩 shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       ├── skeleton.tsx
│       └── ... (40+ components)
│
├── lib/
│   ├── auth-context.tsx          # 🔐 Authentication context & hooks
│   ├── tmdb.ts                   # 🎬 TMDB API service layer
│   ├── watchlist.ts              # 📝 Watchlist management utilities
│   └── utils.ts                  # 🛠️ General utility functions
│
├── hooks/
│   ├── use-toast.ts              # Toast notification hook
│   └── use-mobile.tsx            # Mobile detection hook
│
├── public/                       # Static assets
├── styles/                       # Additional styles
│
├── .env.local                    # Environment variables (not committed)
├── .env.local.example            # Environment variables template
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── components.json               # shadcn/ui configuration
├── package.json                  # Dependencies and scripts
├── README.md                     # This file
├── SETUP.md                      # Detailed setup guide
├── IMPLEMENTATION.md             # Implementation details
└── QUICKSTART.md                 # Quick start guide
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **pnpm** (recommended) or npm
  ```bash
  npm install -g pnpm
  ```
- **TMDB API Key** (free - see below)

### Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist.git
cd MovieTrack---Your-Personal-Watchlist
```

#### Step 2: Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

#### Step 3: Get Your TMDB API Key

1. Visit [TMDB Website](https://www.themoviedb.org/)
2. Create a free account
3. Navigate to **Settings** → **API**
4. Request an API key (select "Developer" option)
5. Copy your **API Key** (v3 auth)

#### Step 4: Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your API key:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

#### Step 5: Run the Development Server

```bash
pnpm dev
# or
npm run dev
```

The application will start at **[http://localhost:3000](http://localhost:3000)**

---

## 📖 Usage Guide

### 1️⃣ **Authentication**

**Sign Up:**
1. Navigate to [http://localhost:3000](http://localhost:3000)
2. Click **"Sign up"** tab
3. Enter any email address (format: `user@example.com`)
4. Create a password (minimum 6 characters)
5. Click **"Sign up"** button

**Sign In:**
1. Click **"Sign in"** tab
2. Enter your registered email and password
3. Click **"Sign in"** button
4. You'll be redirected to the search page

### 2️⃣ **Searching for Movies**

1. After logging in, you'll see **popular movies**
2. Use the **search bar** at the top to find specific movies
3. Results update in **real-time** as you type
4. Each movie card displays:
   - Poster image
   - Title and release year
   - Genre tags
   - Rating
5. Click **"Details"** to view full movie information
6. Click the **heart icon** (❤️) to add to your watchlist

### 3️⃣ **Viewing Movie Details**

1. Click **"Details"** on any movie card
2. View comprehensive information:
   - Backdrop and poster images
   - Full plot summary
   - Release date, runtime, status
   - Rating and genres
3. Use the **watchlist button** to add/remove the movie
4. Click **"← Back"** to return to previous page
5. Click **"Continue Searching"** to go back to search

### 4️⃣ **Managing Your Watchlist**

1. Click **"Watchlist"** in the navigation bar
2. View all your saved movies in a grid layout
3. See the total count of saved movies
4. Click **"View Details"** to see full information
5. Click the **filled heart icon** (❤️) to remove a movie
6. Your watchlist is **automatically saved** and persists across sessions

### 5️⃣ **Logging Out**

1. Click the **"Logout"** button in the navigation bar
2. You'll be redirected to the login page
3. Your watchlist data is saved and will be available when you log back in

---

## 🎯 Key Features Explained

### API Integration (`lib/tmdb.ts`)

The TMDB service layer provides:
- `searchMovies(query)` - Search movies by title
- `getMovieDetails(id)` - Fetch detailed movie information
- `getPopularMovies()` - Get trending/popular movies
- `getMoviesByIds(ids)` - Batch fetch for watchlist
- `getImageUrl(path, size)` - Generate optimized image URLs
- `getGenreNames(ids)` - Convert genre IDs to human-readable names

**Features:**
- Comprehensive error handling
- TypeScript interfaces for type safety
- Support for 19+ movie genres
- Multiple image size options
- Efficient API request management

### Authentication (`lib/auth-context.tsx`)

Mock authentication system with:
- User registration and login
- Password validation (minimum 6 characters)
- Email format validation
- Session persistence across page refreshes
- Automatic route protection
- User state accessible via `useAuth()` hook

**Storage Structure:**
```typescript
{
  users: [
    { email: "user@example.com", password: "hashed_password" }
  ],
  currentUser: "user@example.com"
}
```

### Watchlist Management (`lib/watchlist.ts`)

Per-user watchlist utilities:
- `getWatchlist(userEmail)` - Retrieve user's watchlist
- `addToWatchlist(userEmail, movieId)` - Add movie to watchlist
- `removeFromWatchlist(userEmail, movieId)` - Remove movie
- `toggleWatchlist(userEmail, movieId)` - Toggle movie status
- `isInWatchlist(userEmail, movieId)` - Check if movie is saved
- `clearWatchlist(userEmail)` - Clear all movies

**Storage Structure:**
```typescript
{
  "user@example.com": [123, 456, 789], // Movie IDs
  "other@example.com": [321, 654]
}
```

### Route Protection

Protected routes automatically redirect unauthenticated users:
- `/search` - Movie search page
- `/watchlist` - User's personal watchlist
- `/movie/[id]` - Movie details page

Unprotected route:
- `/` - Login/Signup page

---

## 🔧 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `pnpm dev` | Start development server at localhost:3000 |
| **Build** | `pnpm build` | Create production build |
| **Start** | `pnpm start` | Run production build |
| **Lint** | `pnpm lint` | Run ESLint for code quality |
| **Type Check** | `pnpm tsc` | Run TypeScript compiler check |

---

## 🌐 Environment Variables

Create a `.env.local` file with the following variable:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_TMDB_API_KEY` | Your TMDB API key (v3 auth) | ✅ Yes |

**Example:**
```env
NEXT_PUBLIC_TMDB_API_KEY=1234567890abcdef1234567890abcdef
```

---

## 🎨 Customization

### Changing Theme Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {...},    // Main brand color
      secondary: {...},  // Secondary accent
      // Add your custom colors
    }
  }
}
```

### Adding New UI Components

Install additional shadcn/ui components:

```bash
pnpx shadcn@latest add [component-name]
```

### Modifying Movie Card Layout

Edit `/app/search/page.tsx` and `/app/watchlist/page.tsx` to customize the movie card grid:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Adjust breakpoints and gap as needed */}
</div>
```

---

## 🐛 Troubleshooting

### Issue: Movies not loading

**Solution:** Verify your TMDB API key in `.env.local` is correct and the file is in the root directory.

### Issue: Build errors

**Solution:** 
```bash
rm -rf .next node_modules
pnpm install
pnpm build
```

### Issue: TypeScript errors

**Solution:** Ensure you're using TypeScript 5.0+ and run:
```bash
pnpm tsc --noEmit
```

### Issue: Watchlist not persisting

**Solution:** Check browser's localStorage is enabled and not full. Clear old data if needed.

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variable `NEXT_PUBLIC_TMDB_API_KEY`
5. Click **Deploy**

### Deploy on Netlify

1. Build the project: `pnpm build`
2. Deploy the `.next` folder
3. Set environment variables in Netlify dashboard

---

## 🔄 Future Enhancements

- [ ] **OMDb API Integration** - Alternative movie data source
- [ ] **Advanced Filtering** - Filter by genre, year, rating
- [ ] **Sorting Options** - Sort by title, date, rating
- [ ] **Pagination** - Handle large search results efficiently
- [ ] **Movie Trailers** - Embed YouTube trailers
- [ ] **Cast & Crew** - Display actors and directors
- [ ] **User Reviews** - Read and write movie reviews
- [ ] **Social Sharing** - Share watchlist with friends
- [ ] **Backend Integration** - Real authentication with database
- [ ] **Movie Recommendations** - AI-powered suggestions
- [ ] **Multiple Watchlists** - Create custom categories
- [ ] **Export/Import** - Backup watchlist data
- [ ] **Progressive Web App** - Offline support
- [ ] **Internationalization** - Multi-language support

---

## 📚 Documentation

- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[IMPLEMENTATION.md](IMPLEMENTATION.md)** - Implementation details and architecture
- **[QUICKSTART.md](QUICKSTART.md)** - Quick start guide
- **[TMDB API Docs](https://developers.themoviedb.org/3)** - TMDB API reference

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is built as a demonstration application and is available for educational purposes.

---

## 🙏 Acknowledgments

- **[TMDB](https://www.themoviedb.org/)** - For providing the comprehensive movie database API
- **[shadcn/ui](https://ui.shadcn.com/)** - For the beautiful, accessible UI components
- **[Radix UI](https://www.radix-ui.com/)** - For the headless UI primitives
- **[Next.js](https://nextjs.org/)** - For the powerful React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Lucide](https://lucide.dev/)** - For the clean, consistent icons
- **[v0.dev](https://v0.dev/)** - For initial UI generation and inspiration

---

## 📧 Contact

**Project Maintainer**: [@Atik1000](https://github.com/Atik1000)

**Repository**: [MovieTrack - Your Personal Watchlist](https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Built with ❤️ using Next.js and TMDB API

</div>
