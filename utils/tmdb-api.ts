/**
 * TMDB API service
 * Handles all API calls to The Movie Database
 */

import { Movie, SearchResponse } from '@/types/movie'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

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
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)

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
 * Get popular movies
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
 * Get multiple movies by IDs
 */
export async function getMoviesByIds(movieIds: number[]): Promise<Movie[]> {
    const movies = await Promise.all(movieIds.map((id) => getMovieDetails(id)))
    return movies
}
