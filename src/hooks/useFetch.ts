import { useState, useEffect, useCallback } from 'react'
import { ofetch } from 'ofetch'
import type { FetchOptions } from 'ofetch'
import { useAuth } from './useAuth'

const token = localStorage.getItem('AccessToken')

export const $fetch = ofetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: token
        ? {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
          }
        : {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
    async onRequest({ options }) {
        if (token) {
            options.headers = new Headers(options.headers)
            options.headers.set('Authorization', `Bearer ${token}`)
        }
    },
})

export const useFetch = (url: string, options: FetchOptions = {}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<unknown>(null)

    const { token } = useAuth()

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const data = await $fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
            })
            setData(data)
            setError(null)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [url, options, token])

    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, error, refresh: fetchData }
}
