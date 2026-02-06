'use client'

import { useState, useEffect } from 'react'
import { Search, Heart, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { searchMovies, getPopularMovies, getImageUrl, getGenreNames, Movie } from '@/lib/tmdb'
import { getWatchlist, toggleWatchlist as toggleWatchlistUtil } from '@/lib/watchlist'
import { Navigation } from '@/components/navigation'
import { MovieGridSkeleton } from '@/components/movie-skeleton'
import { toast } from 'sonner'

export default function SearchPage() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [watchlist, setWatchlist] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  // Load watchlist
  useEffect(() => {
    if (user) {
      const userWatchlist = getWatchlist(user.email)
      setWatchlist(userWatchlist)
    }
  }, [user])

  // Load popular movies on mount
  useEffect(() => {
    if (user) {
      loadPopularMovies()
    }
  }, [user])

  const loadPopularMovies = async () => {
    setIsLoading(true)
    setError('')
    try {
      const response = await getPopularMovies()
      setMovies(response.results)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load movies')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = async (query: string) => {
    setSearchQuery(query)

    if (!query.trim()) {
      setHasSearched(false)
      loadPopularMovies()
      return
    }

    setIsLoading(true)
    setError('')
    setHasSearched(true)

    try {
      const response = await searchMovies(query)
      setMovies(response.results)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search movies')
      setMovies([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleToggleWatchlist = (movieId: number, movieTitle: string) => {
    if (!user) return

    const result = toggleWatchlistUtil(user.email, movieId)
    setWatchlist(result.watchlist)

    if (result.isAdded) {
      toast.success('Added to watchlist', {
        description: `${movieTitle} has been added to your watchlist.`
      })
    } else {
      toast.success('Removed from watchlist', {
        description: `${movieTitle} has been removed from your watchlist.`
      })
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 text-balance">
            Welcome, {user?.email?.split('@')[0]}
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

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && <MovieGridSkeleton />}

        {/* Movies Grid */}
        {!isLoading && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => {
              const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'
              const genres = movie.genre_ids ? getGenreNames(movie.genre_ids) : []
              const isInWatchlist = watchlist.includes(movie.id)

              return (
                <div
                  key={movie.id}
                  className="group bg-card border border-border/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                >
                  {/* Poster */}
                  <div className="relative h-64 overflow-hidden bg-secondary">
                    <img
                      src={getImageUrl(movie.poster_path, 'w300')}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1 text-balance line-clamp-2">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{year}</p>

                    {/* Genres */}
                    {genres.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {genres.slice(0, 3).map((genre) => (
                          <span
                            key={genre}
                            className="text-xs bg-secondary/60 text-foreground px-2 py-1 rounded-md"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link href={`/movie/${movie.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                        >
                          Details
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleToggleWatchlist(movie.id, movie.title)}
                        className={`px-3 transition-all ${isInWatchlist
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-secondary/50 text-foreground hover:bg-secondary'
                          }`}
                      >
                        <Heart className={`w-5 h-5 ${isInWatchlist ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && movies.length === 0 && hasSearched && (
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
