import App from './pages/App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import TransactionsPage from './pages/TransactionsPage.tsx'

export default [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'transactions',
                element: <TransactionsPage />,
            },
        ],
    },
]
