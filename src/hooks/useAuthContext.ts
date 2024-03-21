import { ReactNode, createContext } from 'react'
export interface AuthContextProps {
    isAuthenticated: boolean
    token: string | null
    login: (payload: unknown) => void
    logout: () => void
}

export interface AuthProviderProps {
    children: ReactNode
}

export const useAuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    token: null,
    login: () => {},
    logout: () => {},
})
