/**
 * Watchlist utility functions
 * LocalStorage management for user watchlists
 */

const STORAGE_KEY_PREFIX = 'movieTrack.watchlist.'

function parse(value: string | null): number[] {
    if (!value) return []
    try {
        const parsed = JSON.parse(value)
        if (!Array.isArray(parsed)) return []
        return parsed.filter((id) => typeof id === 'number')
    } catch (error) {
        console.error('Error reading watchlist:', error)
        return []
    }
}

function stringify(value: number[]): string {
    const uniqueIds = Array.from(new Set(value))
    return JSON.stringify(uniqueIds)
}

/**
 * Get user's watchlist
 */
export function getWatchlist(userEmail: string): number[] {
    if (typeof window === 'undefined') return []

    const key = `${STORAGE_KEY_PREFIX}${userEmail.toLowerCase()}`
    const stored = localStorage.getItem(key)
    return parse(stored)
}

/**
 * Set watchlist for a specific user
 */
export function setWatchlist(userEmail: string, movieIds: number[]): void {
    if (typeof window === 'undefined') return

    const key = `${STORAGE_KEY_PREFIX}${userEmail.toLowerCase()}`
    localStorage.setItem(key, stringify(movieIds))
}

/**
 * Add movie to watchlist
 */
export function addToWatchlist(userEmail: string, movieId: number): number[] {
    const watchlist = getWatchlist(userEmail)

    if (!watchlist.includes(movieId)) {
        watchlist.push(movieId)
        setWatchlist(userEmail, watchlist)
    }

    return getWatchlist(userEmail)
}

/**
 * Remove movie from watchlist
 */
export function removeFromWatchlist(userEmail: string, movieId: number): number[] {
    const watchlist = getWatchlist(userEmail).filter((id) => id !== movieId)
    setWatchlist(userEmail, watchlist)
    return getWatchlist(userEmail)
}

/**
 * Toggle movie in watchlist
 */
export function toggleWatchlist(
    userEmail: string,
    movieId: number
): { watchlist: number[]; isAdded: boolean } {
    const watchlist = getWatchlist(userEmail)
    const isAdded = !watchlist.includes(movieId)

    const updatedWatchlist = isAdded
        ? addToWatchlist(userEmail, movieId)
        : removeFromWatchlist(userEmail, movieId)

    return { watchlist: updatedWatchlist, isAdded }
}

/**
 * Check if movie is in watchlist
 */
export function isInWatchlist(userEmail: string, movieId: number): boolean {
    return getWatchlist(userEmail).includes(movieId)
}

/**
 * Clear user's watchlist
 */
export function clearWatchlist(userEmail: string): void {
    if (typeof window === 'undefined') return

    const key = `${STORAGE_KEY_PREFIX}${userEmail.toLowerCase()}`
    localStorage.removeItem(key)
}

