import React, { useState, useEffect, useCallback } from 'react'
import { useAuthContext, AuthProviderProps } from '../hooks/useAuthContext'
import { $fetch } from '../hooks/useFetch'

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState<string | null>(null)
    console.log(isAuthenticated)

    useEffect(() => {
        // Check for the token in localStorage and set isAuthenticated accordingly
        const storedToken = localStorage.getItem('AccessToken')
        setToken(storedToken)
        setIsAuthenticated(!!storedToken)
    }, [])

    const login = async (payload: unknown) => {
        try {
            const { token, user } = await $fetch('login', {
                body: { user: payload },
                method: 'POST',
            })
            localStorage.setItem('AccessToken', token)
            localStorage.setItem('User', JSON.stringify(user))
            setIsAuthenticated(true)
            setToken(token)
        } catch (error) {
            console.log(error)
            setIsAuthenticated(false)
            setToken(null)
        }
    }

    const logout = useCallback(async () => {
        localStorage.removeItem('AccessToken')
        localStorage.removeItem('User')
        setIsAuthenticated(false)
        setToken(null)
    }, [])

    return (
        <useAuthContext.Provider
            value={{ isAuthenticated, token, login, logout }}
        >
            {children}
        </useAuthContext.Provider>
    )
}
