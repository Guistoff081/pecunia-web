import React from 'react'
import { Outlet } from 'react-router-dom'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Flowbite } from 'flowbite-react'
import AppNavbar from '../components/navigation/AppNavbar'
import '../assets/css/App.css'

const App: React.FC = () => {
    const customTheme: CustomFlowbiteTheme = {
        button: {
            color: {
                primary:
                    'text-white bg-emerald-500 border border-emerald-600 hover:border-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:border-emerald-600 focus:ring-emerald-300 enabled:bg-emerald-500 enabled:hover:bg-emerald-600 enabled:focus:border-emerald-600 dark:bg-emerald-600 dark:focus:ring-emerald-800 dark:enabled:hover:bg-emerald-700',
            },
        },
    }
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <AppNavbar />
            <main className="flex w-full shrink-0 flex-col items-center justify-center p-4">
                <Outlet />
            </main>
        </Flowbite>
    )
}

export default App
