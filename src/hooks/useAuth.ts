import { useContext } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

export const useAuth = () => useContext(useAuthContext)
