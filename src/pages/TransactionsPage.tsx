import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Card, Button } from 'flowbite-react'
import { HiOutlinePlus } from 'react-icons/hi2'
import DataTable from '../components/transactions/DataTable'
import NewTransactionModal from '../components/transactions/Modal'
import type { Transaction } from '../types/transaction'
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

    const [showNewTransactionModal, setShowNewTransactionModal] =
        useState<boolean>(false)

    const buttonModal = () => {
        setShowNewTransactionModal(true)
    }

    const handleSaveTransaction = () => {}

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
                    <NewTransactionModal
                        mode="create"
                        show={showNewTransactionModal}
                        onClose={() => setShowNewTransactionModal(false)}
                        onSave={handleSaveTransaction}
                    />
                </Card>
            ) : (
                <div>Carregando...</div>
            )}
        </>
    )
}

export default TransactionsPage
