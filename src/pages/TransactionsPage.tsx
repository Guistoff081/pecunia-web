import React from 'react'
import { Card, Button } from 'flowbite-react'
import { HiOutlinePlus } from 'react-icons/hi2'
import DataTable from '../components/DataTable'

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

    return (
        <>
            <Card>
                <div className="flex flex-row justify-between items-center">
                    <h1 className="mb-4 text-2xl font-bold text-emerald-500">
                        Histórico de Transações
                    </h1>
                    <Button className="border-emerald-600 bg-emerald-500 hover:border-emerald-500 hover:bg-emerald-600 focus:border-emerald-600 focus:ring-emerald-300 enabled:bg-emerald-500 enabled:hover:bg-emerald-600 enabled:focus:border-emerald-600 dark:bg-emerald-600 dark:focus:ring-emerald-800 dark:enabled:hover:bg-emerald-700">
                        <HiOutlinePlus className="mr-2 h-6 w-6" />
                        Nova Transação
                    </Button>
                </div>

                <DataTable data={transactions} fields={fields} />
            </Card>
        </>
    )
}

export default TransactionsPage
