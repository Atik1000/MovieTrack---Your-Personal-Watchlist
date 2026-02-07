'use client'

import { useState, useEffect, useCallback } from 'react'
import { getWatchlist, toggleWatchlist as toggleWatchlistUtil } from '@/utils/watchlist'
import { toast } from 'sonner'

interface UseWatchlistActionsProps {
    userEmail: string | null | undefined
}

export function useWatchlistActions({ userEmail }: UseWatchlistActionsProps) {
    const [watchlist, setWatchlist] = useState<number[]>([])

    // Load watchlist on mount or when user changes
    useEffect(() => {
        if (userEmail) {
            const userWatchlist = getWatchlist(userEmail)
            setWatchlist(userWatchlist)
        }
    }, [userEmail])

    // Toggle movie in watchlist
    const toggleMovie = useCallback(
        (movieId: number, movieTitle: string) => {
            if (!userEmail) return

            const result = toggleWatchlistUtil(userEmail, movieId)
            setWatchlist(result.watchlist)

            const action = result.isAdded ? 'Added to' : 'Removed from'
            const verb = result.isAdded ? 'added' : 'removed'

            toast.success(`${action} watchlist`, {
                description: `${movieTitle} has been ${verb}.`,
            })
        },
        [userEmail]
    )

    // Check if movie is in watchlist
    const isInWatchlist = useCallback(
        (movieId: number) => watchlist.includes(movieId),
        [watchlist]
    )

    return {
        watchlist,
        isInWatchlist,
        toggleMovie,
    }
}
