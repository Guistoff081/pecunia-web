import React, { useState } from 'react'
import { Table, Dropdown } from 'flowbite-react'
import EditViewModal from './Modal'
import type { Transaction } from '../../types/transaction'
import {
    HiOutlinePencilSquare,
    HiOutlineEye,
    HiOutlineTrash,
} from 'react-icons/hi2'

interface DataTableFieldItem {
    key: string
    label: string
}

interface DataTableProps {
    data: unknown
    fields: DataTableFieldItem[]
}

const DataTable: React.FC<DataTableProps> = ({ data, fields }) => {
    const [transaction, setTransaction] = useState<Transaction>()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>(
        'view'
    )
    const editAction = (transaction: Transaction) => {
        console.log(transaction, 'datatable')
        setTransaction(transaction)
        setModalMode('edit')
        setOpenModal(true)
    }
    const viewAction = (transaction: Transaction) => {
        setTransaction(transaction)
        setModalMode('view')
        setOpenModal(true)
    }

    const destroyAction = (transaction: Transaction) => {}

    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    {fields.map((fieldItem) => (
                        <Table.HeadCell key={fieldItem.key}>
                            {fieldItem.label}
                        </Table.HeadCell>
                    ))}
                    <Table.HeadCell>
                        <span className="sr-only">Ação</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {data.map((item, index) => (
                        <Table.Row key={index}>
                            {fields.map((fieldItem) => (
                                <Table.Cell key={`${index}-${fieldItem.key}`}>
                                    {item[fieldItem.key]}
                                </Table.Cell>
                            ))}
                            <Table.Cell>
                                <Dropdown
                                    color="primary"
                                    label="Ações"
                                    size="xs"
                                >
                                    <Dropdown.Item
                                        icon={HiOutlineEye}
                                        onClick={() => viewAction(item)}
                                    >
                                        Visualizar
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        icon={HiOutlinePencilSquare}
                                        onClick={() => editAction(item)}
                                    >
                                        Editar
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        icon={HiOutlineTrash}
                                        onClick={() => destroyAction(item)}
                                    >
                                        Excluir
                                    </Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <EditViewModal
                    mode={modalMode}
                    show={openModal}
                    transaction={transaction}
                    onClose={() => setOpenModal(false)}
                />
            </Table>
        </div>
    )
}

export default DataTable
