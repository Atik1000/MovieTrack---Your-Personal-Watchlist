/**
 * TMDB API Service
 * Documentation: https://developer.themoviedb.org/docs
 */

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export interface Movie {
    id: number
    title: string
    overview: string
    poster_path: string | null
    backdrop_path: string | null
    release_date: string
    vote_average: number
    genre_ids?: number[]
    genres?: { id: number; name: string }[]
    runtime?: number
    tagline?: string
    homepage?: string
    status?: string
    budget?: number
    revenue?: number
}

export interface SearchResponse {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

// Genre mapping for TMDB
const GENRE_MAP: Record<number, string> = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Sci-Fi',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
}

/**
 * Get full image URL from TMDB path
 */
export function getImageUrl(path: string | null, size: 'w300' | 'w500' | 'original' = 'w500'): string {
    if (!path) return '/placeholder.svg'
    return `${IMAGE_BASE_URL}/${size}${path}`
}

/**
 * Get genre names from genre IDs
 */
export function getGenreNames(genreIds: number[]): string[] {
    return genreIds.map(id => GENRE_MAP[id] || 'Unknown').filter(Boolean)
}

/**
 * Search movies by title
 */
export async function searchMovies(query: string, page: number = 1): Promise<SearchResponse> {
    if (!API_KEY) {
        throw new Error('TMDB API key is not configured. Please set NEXT_PUBLIC_TMDB_API_KEY in .env.local')
    }

    if (!query.trim()) {
        return {
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0,
        }
    }

    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=en-US`
        )

        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status} ${response.statusText}`)
        }

        const data: SearchResponse = await response.json()
        return data
    } catch (error) {
        console.error('Error searching movies:', error)
        throw error
    }
}

/**
 * Get movie details by ID
 */
export async function getMovieDetails(movieId: string | number): Promise<Movie> {
    if (!API_KEY) {
        throw new Error('TMDB API key is not configured. Please set NEXT_PUBLIC_TMDB_API_KEY in .env.local')
    }

    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        )

        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status} ${response.statusText}`)
        }

        const data: Movie = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching movie details:', error)
        throw error
    }
}

/**
 * Get popular movies (for initial display)
 */
export async function getPopularMovies(page: number = 1): Promise<SearchResponse> {
    if (!API_KEY) {
        throw new Error('TMDB API key is not configured. Please set NEXT_PUBLIC_TMDB_API_KEY in .env.local')
    }

    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`
        )

        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status} ${response.statusText}`)
        }

        const data: SearchResponse = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching popular movies:', error)
        throw error
    }
}

/**
 * Get multiple movie details by IDs (for watchlist)
 */
export async function getMoviesByIds(movieIds: number[]): Promise<Movie[]> {
    if (!API_KEY) {
        throw new Error('TMDB API key is not configured')
    }

    if (movieIds.length === 0) {
        return []
    }

    try {
        const promises = movieIds.map(id => getMovieDetails(id))
        const results = await Promise.allSettled(promises)

        return results
            .filter((result): result is PromiseFulfilledResult<Movie> => result.status === 'fulfilled')
            .map(result => result.value)
    } catch (error) {
        console.error('Error fetching movies by IDs:', error)
        return []
    }
}
