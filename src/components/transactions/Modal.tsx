import React, { useState } from 'react'
import { Modal, Button, TextInput, Label } from 'flowbite-react'

interface Transaction {
    id?: number
    description: string
    amount: number
    credit_card_holder_name: string
    credit_card_holder_cpf: string
    credit_card_number: string
    credit_card_due_date: string
    credit_card_verification_value: string
    created_at?: string
    updated_at?: string
}

interface TransactionModalProps {
    show: boolean
    transaction?: Transaction
    onClose: () => void
    onSave: (transaction: Transaction) => void
    mode: 'create' | 'edit' | 'view'
}

const TransactionModal: React.FC<TransactionModalProps> = ({
    show,
    transaction,
    onClose,
    onSave,
    mode,
}) => {
    const InitiaData = {
        description: '',
        amount: 0,
        credit_card_holder_name: '',
        credit_card_holder_cpf: '',
        credit_card_number: '',
        credit_card_due_date: '',
        credit_card_verification_value: '',
    }

    const [localTransaction, setLocalTransaction] = useState<Transaction>(
        transaction || InitiaData
    )

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLocalTransaction((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = () => {
        onSave(localTransaction)
        onClose()
    }

    return (
        <>
            <Modal show={show} size="md" onClose={onClose} popup>
                <Modal.Header>Nova Transação</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="description"
                                    value="Descrição"
                                />
                            </div>
                            <TextInput
                                id="description"
                                placeholder="Compra da Shopee"
                                value={localTransaction.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="amount" value="Valor" />
                            </div>
                            <TextInput
                                id="amount"
                                placeholder="R$ 0,00"
                                value={localTransaction.amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <Button onClick={handleSave}>
                                {mode === 'create' ? 'Criar' : 'Salvar'}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TransactionModal
