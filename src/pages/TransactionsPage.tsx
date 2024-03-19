import React, { useState } from 'react'
import { Card, Button } from 'flowbite-react'
import { HiOutlinePlus } from 'react-icons/hi2'
import DataTable from '../components/DataTable'
import Modal from '../components/transactions/Modal'

const TransactionsPage: React.FC = () => {
    const transactions = [
        { id: 1, description: 'Compra online', amount: 100.0 },
        { id: 2, description: 'Pagamento de aluguel', amount: -800.0 },
        // Adicione mais transações aqui...
    ]

    const fields = [
        { key: 'id', label: 'ID' },
        { key: 'description', label: 'Descrição' },
        { key: 'amount', label: 'Valor' },
    ]

    const newTransaction = {
        description: '',
        amount: 0,
        credit_card_holder_name: '',
        credit_card_holder_cpf: '',
        credit_card_number: '',
        credit_card_due_date: '',
        credit_card_verification_value: '',
    }

    const [showCreateModal, setShowCreateModal] = useState<boolean>(false)

    const buttonModal = () => {
        setShowCreateModal(true)
    }

    return (
        <>
            <Card>
                <div className="flex flex-row items-center justify-between">
                    <h1 className="mb-4 text-2xl font-bold text-emerald-500">
                        Histórico de Transações
                    </h1>
                    <Button
                        onClick={buttonModal}
                        className="border-emerald-600 bg-emerald-500 hover:border-emerald-500 hover:bg-emerald-600 focus:border-emerald-600 focus:ring-emerald-300 enabled:bg-emerald-500 enabled:hover:bg-emerald-600 enabled:focus:border-emerald-600 dark:bg-emerald-600 dark:focus:ring-emerald-800 dark:enabled:hover:bg-emerald-700"
                    >
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
        </>
    )
}

export default TransactionsPage
