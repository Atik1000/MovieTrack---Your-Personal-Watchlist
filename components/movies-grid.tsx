/**
 * Movies Grid Component
 * Single Responsibility: Display grid of movies
 * DRY: Eliminates grid duplication
 */

import { Movie } from '@/lib/tmdb'
import { MovieCard } from './movie-card'

interface MoviesGridProps {
    movies: Movie[]
    watchlist: number[]
    onWatchlistToggle: (movieId: number, movieTitle: string) => void
    showRemoveButton?: boolean
}

export function MoviesGrid({
    movies,
    watchlist,
    onWatchlistToggle,
    showRemoveButton = false,
}: MoviesGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    isInWatchlist={watchlist.includes(movie.id)}
                    onWatchlistToggle={onWatchlistToggle}
                    showRemoveButton={showRemoveButton}
                />
            ))}
        </div>
    )
}
