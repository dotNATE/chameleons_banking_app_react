import React from 'react'
import Title from "../Utilities/Title"
import SimpleForm from "../Utilities/SimpleForm"
import AccountsTable from "./AccountsTable"
import './accountsPage.css'

const AccountsPage = () => (
    <div>
        <Title content='accounts' />
        <SimpleForm placeholder="Search by id!" method="get" />
        <SimpleForm placeholder="Add a new account" method="post" />
        <AccountsTable />
    </div>
)

export default AccountsPage