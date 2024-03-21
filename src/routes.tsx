import App from './pages/App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import TransactionsPage from './pages/TransactionsPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'

export default [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'transactions',
                element: <TransactionsPage />,
            },
        ],
    },
]
