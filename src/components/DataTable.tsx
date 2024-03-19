import React from 'react'
import { Table, Dropdown } from 'flowbite-react'
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
    data: object[]
    fields: DataTableFieldItem[]
}

const DataTable: React.FC<DataTableProps> = ({ data, fields }) => {
    const editAction = () => { }

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
                                    color='success'
                                    label="Ações"
                                    size="xs"
                                >
                                    <Dropdown.Item
                                        icon={HiOutlinePencilSquare}
                                        onClick={editAction}
                                    >Editar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default DataTable
