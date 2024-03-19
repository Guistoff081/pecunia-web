import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNavbar from '../components/navigation/AppNavbar'
import '../assets/css/App.css'

const App: React.FC = () => {
    return (
        <>
            <AppNavbar />
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
        </>
    )
}

export default App
