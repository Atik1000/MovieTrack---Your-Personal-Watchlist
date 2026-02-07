
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

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

export function getImageUrl(
    path: string | null,
    size: 'w300' | 'w500' | 'original' = 'w500'
): string {
    if (!path) return '/placeholder.svg'
    return `${IMAGE_BASE_URL}/${size}${path}`
}

/**
 * Get genre names from genre IDs
 */
export function getGenreNames(genreIds: number[]): string[] {
    return genreIds.map((id) => GENRE_MAP[id] || 'Unknown').filter(Boolean)
}
