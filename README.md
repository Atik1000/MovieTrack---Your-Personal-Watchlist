# 🎬 MovieTrack - Your Personal Movie Watchlist

<div align="center">

A modern, feature-rich movie watchlist application built with **Next.js 16**, featuring real-time movie search, comprehensive movie details, and personalized watchlist management powered by **TMDB API**.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://reactjs.org/)
[![Jest](https://img.shields.io/badge/Jest-35_tests-green?logo=jest)](https://jestjs.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ⚡ Quick Start

Choose your preferred way to run the application:

### 🚀 Standard Setup (5 minutes)
```bash
git clone https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist.git
cd MovieTrack---Your-Personal-Watchlist
pnpm install
cp .env.local.example .env.local
# Add your TMDB API key to .env.local
pnpm dev
```
**→ Open [http://localhost:3000](http://localhost:3000)**

### 🐳 Docker Setup (3 minutes)
```bash
git clone https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist.git
cd MovieTrack---Your-Personal-Watchlist
echo "NEXT_PUBLIC_TMDB_API_KEY=your_key" > .env
docker-compose up app
```
**→ Open [http://localhost:3000](http://localhost:3000)**

### 📦 Using npm or yarn
```bash
# With npm
npm install && npm run dev

# With yarn
yarn install && yarn dev
```

---

## 📋 Table of Contents

- [Testing & Deployment](#-testing--deployment)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development Guide](#️-development-guide)
  - [Running Locally](#running-locally)
- [Docker Setup & Usage](#-docker-setup--usage)
  - [Docker Compose](#option-1-docker-compose-easiest)
  - [Manual Docker](#option-2-manual-docker-commands)
- [NPM Scripts Reference](#-npm-scripts-reference)
- [Complete Development Workflow](#-complete-development-workflow)
- [Quick Command Reference](#-quick-command-reference)
- [Verifying Your Setup](#-verifying-your-setup)
- [Usage Guide](#-usage-guide)
- [All Available Commands](#-all-available-commands)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)
- [Deployment](#-deployment)

---

## 🧪 Testing & Deployment

### **Jest Testing**
- ✅ **35+ passing tests** covering critical functionality
- **Test Suites**: API services, watchlist utilities, components
- **Commands**:
  - `pnpm test` - Run all tests
  - `pnpm test:watch` - Watch mode
  - `pnpm test:coverage` - Coverage report
- **Coverage**: Core utilities and components tested
- **Documentation**: See [TESTING.md](TESTING.md) for complete guide

### **Docker Support**
- ✅ **Production-ready** multi-stage Dockerfile
- ✅ **Development mode** with hot-reloading
- ✅ **Docker Compose** for easy orchestration
- ✅ **Optimized image** (~150MB Alpine-based)
- **Commands**:
  - `docker-compose up app` - Production
  - `docker-compose --profile dev up` - Development
- **Documentation**: See [DOCKER.md](DOCKER.md) for complete guide

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

## �️ Development Guide

### Running Locally

#### **Option 1: Standard Development (Recommended)**

```bash
# Start the development server
pnpm dev

# Server will start at http://localhost:3000
# Hot-reload enabled - changes reflect immediately
```

**What happens:**
- Next.js dev server starts with Turbopack
- Files are watched for changes
- Browser auto-refreshes on save
- TypeScript type-checking in background

#### **Option 2: Production Build Locally**

```bash
# Build the production optimized bundle
pnpm build

# Start the production server
pnpm start

# Server runs at http://localhost:3000
```

**Use this to:**
- Test production performance
- Verify build succeeds
- Check for build-time errors
- Test optimized bundle

---

## 🐳 Docker Setup & Usage

### Prerequisites for Docker

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed
- Docker Compose (included with Docker Desktop)

### **Option 1: Docker Compose (Easiest)**

#### Production Mode

```bash
# Create .env file with your API key
echo "NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here" > .env

# Build and start the container
docker-compose up app

# Access at http://localhost:3000
```

**Features:**
- Optimized production build (~150MB)
- Multi-stage Alpine-based image
- Non-root user for security
- Health checks enabled

#### Development Mode (with Hot-Reload)

```bash
# Start development container
docker-compose --profile dev up dev

# Access at http://localhost:3001
# Code changes sync with container
```

**Features:**
- Hot-reload on file changes
- Development dependencies included
- Volume mounting for live sync
- Ideal for containerized development

### **Option 2: Manual Docker Commands**

#### Build Production Image

```bash
# Build the Docker image
docker build -t movietrack:latest \
  --build-arg NEXT_PUBLIC_TMDB_API_KEY=your_api_key \
  .

# This creates an optimized ~150MB Alpine-based image
```

#### Run Production Container

```bash
# Run the container
docker run -d \
  --name movietrack-app \
  -p 3000:3000 \
  -e NEXT_PUBLIC_TMDB_API_KEY=your_api_key \
  movietrack:latest

# Access at http://localhost:3000
```

#### Useful Docker Commands

```bash
# View running containers
docker ps

# View logs
docker logs movietrack-app

# Follow logs in real-time
docker logs -f movietrack-app

# Stop container
docker stop movietrack-app

# Remove container
docker rm movietrack-app

# Remove image
docker rmi movietrack:latest

# Enter container shell
docker exec -it movietrack-app sh
```

### Docker Compose Commands

```bash
# Start services in background
docker-compose up -d app

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build app

# Remove volumes
docker-compose down -v
```

---

## 📦 NPM Scripts Reference

### Development Scripts

| Command | Description | When to Use |
|---------|-------------|-------------|
| `pnpm dev` | Start development server with hot-reload | Daily development |
| `pnpm build` | Create optimized production build | Before deployment, testing prod build |
| `pnpm start` | Run production build locally | Test production build locally |
| `pnpm lint` | Check code quality with ESLint | Before commits, CI/CD |

### Testing Scripts

| Command | Description | When to Use |
|---------|-------------|-------------|
| `pnpm test` | Run all tests once | Quick test run, CI/CD |
| `pnpm test:watch` | Run tests in watch mode | During development, TDD |
| `pnpm test:coverage` | Generate coverage report | Check test coverage |
| `pnpm test:ci` | Run tests in CI mode | CI/CD pipelines |

### Using npm or yarn

If you prefer npm or yarn instead of pnpm:

```bash
# npm
npm run dev
npm run build
npm test

# yarn
yarn dev
yarn build
yarn test
```

---

## 🔄 Complete Development Workflow

### 1. **Initial Setup** (One-time)

```bash
# Clone repository
git clone https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist.git
cd MovieTrack---Your-Personal-Watchlist

# Install dependencies
pnpm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local and add your TMDB API key

# Verify setup
pnpm dev
```

### 2. **Daily Development Workflow**

```bash
# Start development server
pnpm dev

# Make your changes...

# Run tests
pnpm test:watch

# Check linting
pnpm lint

# Build to verify
pnpm build
```

### 3. **Before Committing**

```bash
# Run all checks
pnpm lint          # Check code quality
pnpm test          # Run tests
pnpm build         # Verify build succeeds

# If all pass:
git add .
git commit -m "Your message"
git push
```

### 4. **Testing Production Build Locally**

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Visit http://localhost:3000
# Test all features
```

### 5. **Docker Development Workflow**

```bash
# First time setup
docker-compose up --build app

# For development with hot-reload
docker-compose --profile dev up dev

# View logs
docker-compose logs -f

# Stop everything
docker-compose down
```

---

## 🎯 Quick Command Reference

### Most Common Commands

```bash
# Development
pnpm dev                                    # Start dev server

# Testing
pnpm test                                   # Run tests
pnpm test:watch                            # Watch mode

# Production
pnpm build                                 # Build for production
pnpm start                                 # Start production server

# Docker
docker-compose up app                      # Run in Docker
docker-compose --profile dev up dev        # Docker dev mode
docker-compose down                        # Stop Docker

# Utilities
pnpm lint                                  # Check code quality
./commands.sh                              # View all commands
```

---

## 🔍 Verifying Your Setup

After setup, verify everything works:

### 1. Check Environment Variables
```bash
# Verify .env.local exists
cat .env.local

# Should show: NEXT_PUBLIC_TMDB_API_KEY=your_key
```

### 2. Test Development Server
```bash
pnpm dev

# Open http://localhost:3000
# You should see the login page
```

### 3. Test API Connection
```bash
# Sign up with any email
# After login, you should see popular movies
# If movies load, API is working!
```

### 4. Run Tests
```bash
pnpm test

# Should show: Test Suites: 4 passed
#              Tests: 35 passed
```

### 5. Test Production Build
```bash
pnpm build

# Should complete without errors
# Should show build output with routes
```

---

## �📖 Usage Guide

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

## 🔧 All Available Commands

### Development Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js development server at localhost:3000 with hot-reload |
| `pnpm build` | Create optimized production build with standalone output |
| `pnpm start` | Start production server (requires build first) |
| `pnpm lint` | Run ESLint to check code quality and style |

### Testing Commands

| Command | Description |
|---------|-------------|
| `pnpm test` | Run all Jest tests once |
| `pnpm test:watch` | Run tests in watch mode (auto-rerun on changes) |
| `pnpm test:coverage` | Generate and display test coverage report |
| `pnpm test:ci` | Run tests in CI mode with coverage (for pipelines) |

### Docker Commands

| Command | Description |
|---------|-------------|
| `docker-compose up app` | Start production container |
| `docker-compose --profile dev up dev` | Start development container with hot-reload |
| `docker-compose down` | Stop and remove containers |
| `docker-compose logs -f` | Follow container logs |
| `docker build -t movietrack .` | Build Docker image manually |

### Utility Commands

| Command | Description |
|---------|-------------|
| `./commands.sh` | Display all available commands in terminal |
| `pnpm install` | Install all project dependencies |
| `pnpm add <package>` | Add a new dependency |
| `pnpm tsc --noEmit` | Run TypeScript type checking |

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

### Issue: "TMDB API key is not configured" error

**Symptoms:** 
- Movies not loading
- Error message in console
- Blank search results

**Solution:**
```bash
# 1. Check if .env.local exists
ls -la .env.local

# 2. Verify API key is set
cat .env.local
# Should show: NEXT_PUBLIC_TMDB_API_KEY=your_actual_key

# 3. Restart development server
# Press Ctrl+C to stop
pnpm dev

# 4. Clear browser cache and reload
```

### Issue: Movies not loading

**Solution:** 
- Verify your TMDB API key in `.env.local` is correct and the file is in the root directory
- Ensure the key is prefixed with `NEXT_PUBLIC_`
- Check that you have an active internet connection
- Try getting a new API key from TMDB if the current one is invalid

### Issue: "Module not found" errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Clear Next.js cache
rm -rf .next
pnpm dev
```

### Issue: Build errors

**Solution:** 
```bash
# Complete cleanup and rebuild
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Issue: TypeScript errors

**Solution:** Ensure you're using TypeScript 5.0+ and run:
```bash
pnpm tsc --noEmit
```

### Issue: Watchlist not persisting

**Solution:** 
- Check browser's localStorage is enabled and not full
- Open DevTools → Application → Local Storage
- Clear old data if needed
- Try a different browser

### Issue: Port 3000 already in use

**Solution:**
```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
pnpm dev -- -p 3001
```

### Issue: Docker build fails

**Solution:**
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache app

# Check Docker has enough space
docker system df
```

### Issue: Tests failing

**Solution:**
```bash
# Clear Jest cache
pnpm test -- --clearCache

# Run tests with verbose output
pnpm test -- --verbose

# Check specific test file
pnpm test __tests__/lib/tmdb.test.ts
```

### Still having issues?

1. Check [GitHub Issues](https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist/issues)
2. Review the detailed guides:
   - [SETUP.md](SETUP.md) - Setup instructions
   - [TESTING.md](TESTING.md) - Testing guide
   - [DOCKER.md](DOCKER.md) - Docker guide
3. Create a new issue with:
   - Your environment (OS, Node version, pnpm version)
   - Steps to reproduce
   - Error messages
   - Screenshots if applicable

---

## 🚀 Deployment

### Deploy on Vercel (Recommended - Zero Config)

**Easiest deployment option for Next.js apps:**

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com) and sign in
3. Click **"New Project"**
4. Import your GitHub repository
5. Add environment variable:
   - Key: `NEXT_PUBLIC_TMDB_API_KEY`
   - Value: Your TMDB API key
6. Click **"Deploy"**

**✅ Features:**
- Automatic deployments on push
- Preview deployments for PRs
- Global CDN
- Serverless functions
- Zero configuration needed

### Deploy on Netlify

1. Build the project: `pnpm build`
2. Visit [Netlify](https://netlify.com) and sign in
3. Drag and drop the `.next` folder
4. Or connect your GitHub repository
5. Set environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_TMDB_API_KEY`
6. Deploy

### Deploy with Docker

#### Using Docker Hub

```bash
# 1. Build and tag your image
docker build -t yourusername/movietrack:latest \
  --build-arg NEXT_PUBLIC_TMDB_API_KEY=your_key \
  .

# 2. Push to Docker Hub
docker login
docker push yourusername/movietrack:latest

# 3. Pull and run on any server
docker pull yourusername/movietrack:latest
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_TMDB_API_KEY=your_key \
  yourusername/movietrack:latest
```

#### Deploy to Cloud Platforms

**AWS ECS/Fargate:**
```bash
# Push to ECR
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin YOUR_ECR_URL

docker tag movietrack:latest YOUR_ECR_URL/movietrack:latest
docker push YOUR_ECR_URL/movietrack:latest

# Deploy using ECS task definition
```

**Google Cloud Run:**
```bash
# Build and deploy
gcloud builds submit --tag gcr.io/PROJECT_ID/movietrack
gcloud run deploy movietrack \
  --image gcr.io/PROJECT_ID/movietrack \
  --platform managed \
  --set-env-vars NEXT_PUBLIC_TMDB_API_KEY=your_key
```

**Azure Container Instances:**
```bash
# Build and push to ACR
az acr build --registry myregistry --image movietrack:latest .

# Deploy
az container create \
  --resource-group myResourceGroup \
  --name movietrack \
  --image myregistry.azurecr.io/movietrack:latest \
  --environment-variables NEXT_PUBLIC_TMDB_API_KEY=your_key \
  --dns-name-label movietrack \
  --ports 3000
```

### Deploy on VPS (DigitalOcean, Linode, etc.)

```bash
# 1. SSH into your server
ssh user@your-server-ip

# 2. Clone repository
git clone https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist.git
cd MovieTrack---Your-Personal-Watchlist

# 3. Setup environment
cp .env.local.example .env.local
# Edit .env.local with your API key

# 4. Using Docker
docker-compose up -d app

# OR using PM2 for Node.js
pnpm install
pnpm build
pm2 start npm --name "movietrack" -- start

# 5. Setup Nginx reverse proxy (optional)
# Configure Nginx to proxy port 80 to 3000
```

### Deployment Checklist

Before deploying to production:

- [ ] Environment variables configured
- [ ] Production build tested locally (`pnpm build && pnpm start`)
- [ ] All tests passing (`pnpm test`)
- [ ] No console errors or warnings
- [ ] API key is valid and active
- [ ] HTTPS/SSL configured (if using custom domain)
- [ ] Analytics setup (optional)
- [ ] Error monitoring setup (Sentry, etc.) - optional
- [ ] Performance monitoring - optional

### Post-Deployment

1. **Test the live app:**
   - Try authentication flow
   - Search for movies
   - Add to watchlist
   - Test on mobile devices

2. **Monitor:**
   - Check server logs
   - Monitor API usage
   - Watch for errors

3. **Configure Custom Domain** (optional):
   - Add DNS records
   - Setup SSL certificate
   - Update environment variables if needed

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

- **[TESTING.md](TESTING.md)** - Complete testing guide with Jest
- **[DOCKER.md](DOCKER.md)** - Docker deployment guide
- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[IMPLEMENTATION.md](IMPLEMENTATION.md)** - Implementation details and architecture
- **[QUICKSTART.md](QUICKSTART.md)** - Quick start guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment options guide
- **[TMDB API Docs](https://developers.themoviedb.org/3)** - TMDB API reference

---

## 📝 Cheat Sheet

### Essential Commands

```bash
# Setup
pnpm install                              # Install dependencies
cp .env.local.example .env.local         # Setup environment
pnpm dev                                 # Start development

# Development
pnpm dev                                 # Start dev server (localhost:3000)
pnpm test:watch                          # Run tests in watch mode
pnpm lint                                # Check code quality

# Testing
pnpm test                                # Run all tests
pnpm test:coverage                       # Coverage report

# Production
pnpm build                               # Build for production
pnpm start                               # Start production server

# Docker
docker-compose up app                    # Production container
docker-compose --profile dev up dev      # Dev container with hot-reload
docker-compose down                      # Stop containers

# Troubleshooting
rm -rf .next node_modules               # Clean build
pnpm install                            # Reinstall
pnpm test -- --clearCache               # Clear test cache
```

### File Locations

```
📁 Key Files:
├── .env.local                  # API keys (create from .env.local.example)
├── app/page.tsx                # Login/Signup page
├── app/search/page.tsx         # Movie search
├── app/watchlist/page.tsx      # Watchlist
├── app/movie/[id]/page.tsx     # Movie details
├── lib/tmdb.ts                 # API service
├── lib/auth-context.tsx        # Authentication
├── lib/watchlist.ts            # Watchlist logic
└── components/navigation.tsx   # Nav bar
```

### Environment Variables

```env
# Required
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here

# Get your key at:
# https://www.themoviedb.org/settings/api
```

### Quick Links

- **Local Dev**: http://localhost:3000
- **TMDB API Keys**: https://www.themoviedb.org/settings/api
- **GitHub Repo**: https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist
- **Report Issues**: https://github.com/Atik1000/MovieTrack---Your-Personal-Watchlist/issues

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
