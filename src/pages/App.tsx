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
        navbar: {
            link: {
                active: {
                    on: 'bg-emerald-500 text-white dark:text-white md:bg-transparent md:text-emerald-500',
                    off: 'border-b border-emerald-100  text-gray-400 hover:bg-emerald-50 dark:border-emerald-300 dark:text-emerald-300 dark:hover:bg-emerald-300 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-emerald-400 md:dark:hover:bg-transparent md:dark:hover:text-white',
                },
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
