/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sort } from '@/components/Icons'
import NameContent from '@/components/Table/NameContent'
import { Checkbox } from '@/components/Ant'
import Data from '@/components/Table/Data'
import Amount from '@/components/Table/Amount'
import Status from '@/components/Table/Status'
import Actions from './Actions'
import { InvoiceFile } from '@/components/Icons/InvoiceFile'
import { InvoiceListingTable } from './InvoiceListing.styled'

interface DataType {
  key: string
  name: string
  action: string
  icon: React.ReactNode
  client: string
  amount: string
  date: string
  color: string
  statusText: string
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (record: DataType) => (
      <NameContent icon={record.icon} name={record.name} action={record.action} />
    ),
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (record: DataType) => <Data text={record.date} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Client',
    dataIndex: 'client',
    key: 'client',
    render: (record: DataType) => <Data text={record.client} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (record: DataType) => <Amount amount={record.amount} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (record: DataType) => <Status color={record.color} text={record.statusText} />,
    sorter: true,
    sortIcon: (_props: { sortOrder: any }) => <Sort />
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <Actions />
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'New Design Project',
    icon: <InvoiceFile />,
    date: 'January 05, 2022',
    action: 'INV110XXX',
    client: 'Biffco Enterprises',
    amount: '$1,240.00',
    color: 'purple',
    statusText: 'Unpaid'
  },
  {
    key: '2',
    name: 'Crypto Project',
    icon: <InvoiceFile />,
    date: 'January 02, 2022',
    action: 'INV110XXX',
    client: 'Acme Co.',
    amount: '$1,240.00',
    color: 'purple',
    statusText: 'Unpaid'
  },
  {
    key: '3',
    name: 'Sarimun Design',
    icon: <InvoiceFile />,
    date: 'January 05, 2022',
    action: 'INV110XXX',
    client: 'Big Kahuna Burger',
    amount: '$1,240.00',
    color: 'volcano',
    statusText: 'Pending'
  },
  {
    key: '4',
    name: 'Sarimun Design',
    icon: <InvoiceFile />,
    date: 'January 05, 2022',
    action: 'INV110XXX',
    client: 'Big Kahuna Burger',
    amount: '$1,240.00',
    color: 'volcano',
    statusText: 'Pending'
  },
  {
    key: '5',
    name: 'Sarimun Design',
    icon: <InvoiceFile />,
    date: 'January 05, 2022',
    action: 'INV110XXX',
    client: 'Big Kahuna Burger',
    amount: '$1,240.00',
    color: 'volcano',
    statusText: 'Pending'
  },
  {
    key: '6',
    name: 'Sarimun Design',
    icon: <InvoiceFile />,
    date: 'January 05, 2022',
    action: 'INV110XXX',
    client: 'Big Kahuna Burger',
    amount: '$1,240.00',
    color: 'volcano',
    statusText: 'Pending'
  },
  {
    key: '7',
    name: 'Sarimun Design',
    icon: <InvoiceFile />,
    date: 'January 05, 2022',
    action: 'INV110XXX',
    client: 'Big Kahuna Burger',
    amount: '$1,240.00',
    color: 'volcano',
    statusText: 'Pending'
  },
  {
    key: '8',
    name: 'Sarimun Design',
    icon: <InvoiceFile />,
    date: 'January 05, 2022',
    action: 'INV110XXX',
    client: 'Big Kahuna Burger',
    amount: '$1,240.00',
    color: 'volcano',
    statusText: 'Pending'
  }
]

export default function InvoiceListing() {
  const rowSelection = {
    renderCell: () => {
      return <Checkbox />
    }
  }
  return <InvoiceListingTable columns={columns} dataSource={data} rowSelection={rowSelection} />
}