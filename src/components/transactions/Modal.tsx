import React, { useState, useEffect, useMemo } from 'react'
import { Modal, Button, TextInput, Label } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { TransactionModalProps } from '../../types/transaction'
import type { Transaction } from '../../types/transaction'

const TransactionModal: React.FC<TransactionModalProps> = ({
    show,
    transaction,
    onClose,
    onSave,
    mode,
}) => {
    console.log(transaction, 'modal')
    const InitialData = useMemo(
        () => ({
            description: '',
            amount: 0,
            credit_card_holder_name: '',
            credit_card_holder_id_document: '',
            credit_card_number: '',
            credit_card_due_date: '',
            credit_card_verification_value: '',
        }),
        []
    )

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Transaction>()

    const onSubmit = (data: Transaction) => {
        // Handle form submission
        console.log(data)
    }

    const [localTransaction, setLocalTransaction] = useState<Transaction>(
        transaction || InitialData
    )

    useEffect(() => {
        setLocalTransaction(transaction || InitialData)
    }, [transaction, InitialData])

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
            <Modal show={show} size="lg" onClose={onClose} popup>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header>
                        {mode === 'create'
                            ? 'Nova Transação'
                            : 'Editar Transação'}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
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
                            <div className="flex flex-col">
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
                                    {...register('description', {
                                        required: 'A Descrição é obrigatória',
                                    })}
                                    onChange={handleInputChange}
                                    color={
                                        errors.description
                                            ? 'failure'
                                            : 'success'
                                    }
                                    helperText={
                                        <>
                                            {errors.description && (
                                                <span className="font-medium">
                                                    Oops!{' '}
                                                    {errors.description.message}
                                                </span>
                                            )}
                                        </>
                                    }
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="credit_card_holder_name"
                                        value="Nome do Titular"
                                    />
                                </div>
                                <TextInput
                                    id="credit_card_holder_name"
                                    placeholder="Ana Carolina Torchia da Silva"
                                    value={
                                        localTransaction.credit_card_holder_name
                                    }
                                    {...register('credit_card_holder_name', {
                                        required:
                                            'O Nome do Titular é obrigatório',
                                    })}
                                    onChange={handleInputChange}
                                    color={
                                        errors.description
                                            ? 'failure'
                                            : 'success'
                                    }
                                    helperText={
                                        <>
                                            {errors.description && (
                                                <span className="font-medium">
                                                    Oops!{' '}
                                                    {errors.description.message}
                                                </span>
                                            )}
                                        </>
                                    }
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="Numero do CPF"
                                        value="Numero do CPF/CNPJ"
                                    />
                                </div>
                                <TextInput
                                    id="Numero do CPF"
                                    name="credit_card_holder_id_document"
                                    placeholder="000000000000"
                                    value={
                                        localTransaction.credit_card_holder_id_document
                                    }
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-span-2">
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
                                    value={
                                        localTransaction.credit_card_due_date
                                    }
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
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" color="primary">
                            {mode === 'create'
                                ? 'Criar Transação'
                                : 'Salvar Transação'}
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default TransactionModal
