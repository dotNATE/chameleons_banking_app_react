import React from 'react'
import Title from "../Utilities/Title";
import AccountFilterForm from "./AccountFilterForm";
import AddAccountForm from "./AddAccountForm";
import AccountsTable from "./AccountsTable";

const AccountsPage = () => (
    <div>
        <Title content='accounts' />
        <AccountFilterForm />
        <AddAccountForm />
        <AccountsTable />
    </div>
)

export default AccountsPage