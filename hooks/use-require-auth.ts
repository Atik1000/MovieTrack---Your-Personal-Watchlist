/**
 * Custom hook for authentication redirect
 * Single Responsibility: Handles authentication checking and redirect
 */

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export function useRequireAuth() {
    const router = useRouter()
    const { user, loading } = useAuth()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/')
        }
    }, [user, loading, router])

    return { user, loading }
}
