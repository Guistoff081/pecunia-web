export type Transaction = {
    id?: string
    description: string
    amount: number
    credit_card_holder_name: string
    credit_card_holder_id_document: string
    credit_card_number: string
    credit_card_due_date: string
    credit_card_verification_value: string
    created_at?: string
    updated_at?: string
    url?: string
}

export interface TransactionModalProps {
    show: boolean
    transaction?: Transaction
    onClose?: () => void
    onSave?: (transaction: Transaction) => void
    mode: 'create' | 'edit' | 'view'
}
