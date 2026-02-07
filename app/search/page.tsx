'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { searchMovies, getPopularMovies, Movie } from '@/lib/tmdb'
import { Navigation } from '@/components/navigation'
import { MovieGridSkeleton } from '@/components/movie-skeleton'
import { useRequireAuth } from '@/hooks/use-require-auth'
import { useWatchlistActions } from '@/hooks/use-watchlist-actions'
import { useMovieLoader } from '@/hooks/use-movie-loader'
import { ErrorAlert } from '@/components/error-alert'
import { MoviesGrid } from '@/components/movies-grid'

export default function SearchPage() {
  const { user } = useRequireAuth()
  const { watchlist, toggleMovie } = useWatchlistActions({ userEmail: user?.email })
  const { data: movies, isLoading, error, loadData, setData } = useMovieLoader<Movie[]>()
  const [searchQuery, setSearchQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  // Load popular movies on mount
  useEffect(() => {
    if (user) {
      loadData(() => getPopularMovies().then((res) => res.results))
    }
  }, [user, loadData])

  const handleSearch = async (query: string) => {
    setSearchQuery(query)

    if (!query.trim()) {
      setHasSearched(false)
      loadData(() => getPopularMovies().then((res) => res.results))
      return
    }

    setHasSearched(true)
    loadData(() => searchMovies(query).then((res) => res.results))
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 text-balance">
            Welcome, {user.email.split('@')[0]}
          </h2>
          <p className="text-muted-foreground">
            {hasSearched ? 'Search Results' : 'Discover popular movies'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 py-6 bg-card border-border/30 text-foreground placeholder:text-muted-foreground/60 text-lg rounded-lg"
            />
          </div>
        </div>

        <ErrorAlert message={error} />

        {isLoading && <MovieGridSkeleton />}

        {!isLoading && movies && movies.length > 0 && (
          <MoviesGrid
            movies={movies}
            watchlist={watchlist}
            onWatchlistToggle={toggleMovie}
          />
        )}

        {/* Empty State */}
        {!isLoading && movies?.length === 0 && hasSearched && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No movies found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
