import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Card, Button } from 'flowbite-react'
import { HiOutlinePlus } from 'react-icons/hi2'
import DataTable from '../components/DataTable'
import Modal from '../components/transactions/Modal'
import { useFetch } from '../hooks/useFetch'
import { useAuth } from '../hooks/useAuth'

const TransactionsPage: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: location } })
        }
    }, [isAuthenticated, navigate, location])

    const {
        data: transactions,
        loading,
        error,
        refresh,
    } = useFetch('/transactions')

    const fields = [
        { key: 'id', label: 'ID' },
        { key: 'description', label: 'Descrição' },
        { key: 'amount', label: 'Valor' },
    ]

    const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

    const buttonModal = () => {
        setShowCreateModal(true)
    }

    return (
        <>
            {!loading ? (
                <Card className="flex h-[calc(100vh-100px)] flex-col">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="mb-4 text-2xl font-bold text-emerald-500">
                            Histórico de Transações
                        </h1>
                        <Button onClick={buttonModal} color="primary">
                            <HiOutlinePlus className="mr-2 size-6" />
                            Nova Transação
                        </Button>
                    </div>

                    <DataTable data={transactions} fields={fields} />
                    <Modal
                        mode="create"
                        show={showCreateModal}
                        onClose={() => setShowCreateModal(false)}
                    />
                </Card>
            ) : (
                <div>Carregando...</div>
            )}
        </>
    )
}

export default TransactionsPage
