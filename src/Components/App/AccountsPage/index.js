import React from 'react'
import Title from "../Utilities/Title";
import AccountFilterForm from "./AccountFilterForm";
import AddAccountForm from "./AddAccountForm";
import AccountsTable from "./AccountsTable";
import './accountsPage.css'

const AccountsPage = () => (
    <div>
        <Title content='accounts' />
        <AccountFilterForm placeholder="Search by id!" />
        <AddAccountForm />
        <AccountsTable />
    </div>
)

export default AccountsPage