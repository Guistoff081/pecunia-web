import React, { useState } from 'react'
import { Modal, Button, TextInput, Label, Datepicker } from 'flowbite-react'

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
    onClose?: () => void
    onSave?: (transaction: Transaction) => void
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
        console.log(event)
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
                                name="description"
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
                                name="amount"
                                value={localTransaction.amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Numero do CPF"
                                    value="Numero do CPF"
                                />
                            </div>
                            <TextInput
                                id="Numero do CPF"
                                name="credit_card_holder_cpf"
                                placeholder="000000000000"
                                value={localTransaction.credit_card_holder_cpf}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Nome do titular"
                                    value="Nome do titular"
                                />
                            </div>
                            <TextInput
                                id="Nome do titular"
                                name="credit_card_holder_name"
                                placeholder="Nome do titular"
                                value={localTransaction.credit_card_holder_name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Numero do cartão"
                                    value="Numero do cartão"
                                />
                            </div>
                            <TextInput
                                id="Numero do cartão"
                                name="credit_card_number"
                                placeholder="Numero do cartão"
                                value={localTransaction.credit_card_number}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Data de validade"
                                    value="Data de validade"
                                />
                            </div>
                            <TextInput
                                id="Data de validade"
                                type="month"
                                name="credit_card_due_date"
                                //language="pt-BR"
                                //labelTodayButton="Hoje"
                                //labelClearButton="Limpar"
                                value={localTransaction.credit_card_due_date}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Numero do CVV"
                                    value="Numero do CVV"
                                />
                            </div>
                            <TextInput
                                id="Numero do CVV"
                                name="credit_card_verification_value"
                                placeholder="123"
                                value={
                                    localTransaction.credit_card_verification_value
                                }
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
