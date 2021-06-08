import React from "react"
import AccountRecord from "./AccountRecord";

const AccountsTable = () => (
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>balance</th>
                <th>actions</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody className="accountsTableBody">
            <AccountRecord id="165168946951*86jklhjv" name="Nathaniel" balance="10420" />
        </tbody>
    </table>
)

export default AccountsTable