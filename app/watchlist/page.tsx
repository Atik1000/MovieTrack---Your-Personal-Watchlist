'use client'

import { useState, useEffect } from 'react'
import { Heart, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { getWatchlist, removeFromWatchlist as removeFromWatchlistUtil } from '@/lib/watchlist'
import { getMoviesByIds, getImageUrl, Movie } from '@/lib/tmdb'
import { Navigation } from '@/components/navigation'
import { MovieGridSkeleton } from '@/components/movie-skeleton'

export default function WatchlistPage() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [watchlistMovies, setWatchlistMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  // Load watchlist movies
  useEffect(() => {
    if (!user) return

    const loadWatchlist = async () => {
      setIsLoading(true)
      setError('')
      
      try {
        const watchlistIds = getWatchlist(user.email)
        
        if (watchlistIds.length === 0) {
          setWatchlistMovies([])
          setIsLoading(false)
          return
        }

        const movies = await getMoviesByIds(watchlistIds)
        setWatchlistMovies(movies)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load watchlist')
      } finally {
        setIsLoading(false)
      }
    }

    loadWatchlist()
  }, [user])

  const handleRemoveFromWatchlist = (movieId: number) => {
    if (!user) return
    
    removeFromWatchlistUtil(user.email, movieId)
    setWatchlistMovies(movies => movies.filter(m => m.id !== movieId))
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">My Watchlist</h2>
          <p className="text-muted-foreground">
            {watchlistMovies.length} {watchlistMovies.length === 1 ? 'movie' : 'movies'} saved
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && <MovieGridSkeleton />}

        {/* Watchlist Grid */}
        {!isLoading && watchlistMovies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchlistMovies.map((movie) => {
              const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'
              const genres = movie.genres || []

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

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      ★ {movie.vote_average.toFixed(1)}
                    </div>
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
                        {genres.slice(0, 3).map((genre: any) => (
                          <span
                            key={genre.id}
                            className="text-xs bg-secondary/60 text-foreground px-2 py-1 rounded-md"
                          >
                            {genre.name}
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
                          View Details
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleRemoveFromWatchlist(movie.id)}
                        className="px-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground transition-all"
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && watchlistMovies.length === 0 && (
          <div className="py-20 text-center">
            <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Your watchlist is empty</h3>
            <p className="text-muted-foreground mb-8">
              Start adding movies to keep track of what you want to watch
            </p>
            <Link href="/search">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-lg">
                Discover Movies
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
