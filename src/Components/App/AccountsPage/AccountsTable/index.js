import React from "react"
import AccountRecord from "./AccountRecord"
import TableHead from "./TableHead"
import './accountsTable.css'

const AccountsTable = () => (
    <table>
        <TableHead />
        <tbody className="accountsTableBody">
            <AccountRecord id="165168946951*86jklhjv" name="Nathaniel" balance="10420" />
            <AccountRecord id="165168946951*86jklhjv" name="Izzy" balance="25469" />
            <AccountRecord id="165168946951*86jklhjv" name="Imy" balance="413" />
            <AccountRecord id="165168946951*86jklhjv" name="Maria" balance="-403" />
        </tbody>
    </table>
)

export default AccountsTable