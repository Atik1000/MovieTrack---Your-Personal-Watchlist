/**
 * Watchlist utility functions
 * Manages per-user movie watchlists in localStorage
 */

const WATCHLIST_PREFIX = 'movieTrack.watchlist.'

/**
 * Get watchlist for a specific user
 */
export function getWatchlist(userEmail: string): number[] {
    if (typeof window === 'undefined') return []

    try {
        const key = `${WATCHLIST_PREFIX}${userEmail.toLowerCase()}`
        const stored = window.localStorage.getItem(key)
        if (!stored) return []

        const parsed = JSON.parse(stored)
        if (!Array.isArray(parsed)) return []

        return parsed.filter(id => typeof id === 'number')
    } catch (error) {
        console.error('Error reading watchlist:', error)
        return []
    }
}

/**
 * Set watchlist for a specific user
 */
export function setWatchlist(userEmail: string, movieIds: number[]): void {
    if (typeof window === 'undefined') return

    try {
        const key = `${WATCHLIST_PREFIX}${userEmail.toLowerCase()}`
        const uniqueIds = Array.from(new Set(movieIds))
        window.localStorage.setItem(key, JSON.stringify(uniqueIds))
    } catch (error) {
        console.error('Error saving watchlist:', error)
    }
}

/**
 * Add a movie to user's watchlist
 */
export function addToWatchlist(userEmail: string, movieId: number): number[] {
    const current = getWatchlist(userEmail)

    if (current.includes(movieId)) {
        return current
    }

    const updated = [...current, movieId]
    setWatchlist(userEmail, updated)
    return updated
}

/**
 * Remove a movie from user's watchlist
 */
export function removeFromWatchlist(userEmail: string, movieId: number): number[] {
    const current = getWatchlist(userEmail)
    const updated = current.filter(id => id !== movieId)
    setWatchlist(userEmail, updated)
    return updated
}

/**
 * Check if a movie is in user's watchlist
 */
export function isInWatchlist(userEmail: string, movieId: number): boolean {
    const watchlist = getWatchlist(userEmail)
    return watchlist.includes(movieId)
}

/**
 * Toggle a movie in user's watchlist
 */
export function toggleWatchlist(userEmail: string, movieId: number): {
    watchlist: number[]
    isAdded: boolean
} {
    const current = getWatchlist(userEmail)
    const isCurrentlyInList = current.includes(movieId)

    let updated: number[]
    if (isCurrentlyInList) {
        updated = removeFromWatchlist(userEmail, movieId)
    } else {
        updated = addToWatchlist(userEmail, movieId)
    }

    return {
        watchlist: updated,
        isAdded: !isCurrentlyInList
    }
}

/**
 * Clear user's watchlist
 */
export function clearWatchlist(userEmail: string): void {
    if (typeof window === 'undefined') return

    try {
        const key = `${WATCHLIST_PREFIX}${userEmail.toLowerCase()}`
        window.localStorage.removeItem(key)
    } catch (error) {
        console.error('Error clearing watchlist:', error)
    }
}
