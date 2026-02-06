# MovieTrack - Movie Watchlist App

A modern, responsive movie watchlist application built with Next.js, featuring real-time movie search and personalized watchlists.

## 🎬 Features

- **Authentication System**
  - Mock email/password login and signup
  - Persistent sessions using localStorage
  - Protected routes for authenticated users
  - Global authentication state with React Context

- **Movie Search**
  - Search movies by title using TMDB API
  - Display popular movies on initial load
  - Real-time search with loading states
  - Movie cards with posters, titles, years, and genres

- **Movie Details**
  - Comprehensive movie information
  - Poster, backdrop images
  - Release date, runtime, ratings
  - Genre tags
  - Plot summaries
  - Add/remove from watchlist

- **Personal Watchlist**
  - Per-user watchlist management
  - Persistent storage in localStorage
  - Add/remove movies with instant feedback
  - Empty state guidance
  - Protected route (requires authentication)

- **Responsive Design**
  - Mobile-first approach
  - Smooth hover effects and transitions
  - Loading skeletons for better UX
  - Modern UI with Tailwind CSS and shadcn/ui

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **API**: TMDB (The Movie Database)
- **State Management**: React Context API
- **Data Persistence**: localStorage
- **TypeScript**: Full type safety

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                 # Login/Signup page
│   ├── search/page.tsx          # Movie search page
│   ├── watchlist/page.tsx       # User's watchlist
│   ├── movie/[id]/page.tsx      # Movie details page
│   ├── layout.tsx               # Root layout
│   ├── providers.tsx            # Context providers
│   └── globals.css              # Global styles
├── components/
│   ├── navigation.tsx           # Shared navigation bar
│   ├── movie-skeleton.tsx       # Loading skeletons
│   ├── theme-provider.tsx       # Theme context
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── auth-context.tsx         # Authentication context
│   ├── tmdb.ts                  # TMDB API service
│   ├── watchlist.ts             # Watchlist utilities
│   └── utils.ts                 # Utility functions
└── .env.local                   # Environment variables
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd v0-movie-watchlist-ui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```

   Get your TMDB API key:
   - Visit [TMDB](https://www.themoviedb.org/)
   - Create a free account
   - Go to Settings → API
   - Copy your API key

   Add your API key to `.env.local`:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Usage

### Authentication

1. On first visit, you'll see the login/signup page
2. Click "Sign up" to create a new account
3. Enter any email and password (minimum 6 characters)
4. Or click "Sign in" if you already have an account

### Searching Movies

1. After login, you'll see popular movies
2. Use the search bar to find specific movies
3. Results update in real-time as you type
4. Click "Details" to see full movie information
5. Click the heart icon to add/remove from watchlist

### Managing Watchlist

1. Navigate to "Watchlist" from the navbar
2. View all your saved movies
3. Click "View Details" to see more information
4. Click the filled heart icon to remove a movie
5. Watchlist is saved per user account

## 🎨 Key Features Implementation

### API Integration (`lib/tmdb.ts`)

- Abstracted API layer for easy maintenance
- Support for searching movies, fetching details, popular movies
- Helper functions for image URLs and genre mapping
- Error handling and TypeScript types

### Authentication (`lib/auth-context.tsx`)

- React Context for global auth state
- Login/signup functionality with validation
- Persistent sessions across page refreshes
- User-specific data management

### Watchlist Management (`lib/watchlist.ts`)

- Per-user watchlist storage
- Add/remove/toggle operations
- Persistent storage in localStorage
- Helper functions for common operations

### Route Protection

- Automatic redirect to login for unauthenticated users
- Protected routes: `/search`, `/watchlist`, `/movie/[id]`
- Redirect to search page after successful login

## 🔄 Future Enhancements

- [ ] Add OMDb API support as alternative
- [ ] Implement movie filtering and sorting
- [ ] Add pagination for search results
- [ ] Include movie trailers and cast information
- [ ] Add social features (share watchlists)
- [ ] Implement proper backend authentication
- [ ] Add movie recommendations
- [ ] Support for multiple watchlists/categories

## 📄 License

This project is built as a demonstration application.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the movie data API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) for the amazing framework
- [v0.dev](https://v0.dev/) for initial UI generation
