import React from "react"
import AccountRecord from "./AccountRecord";

const AccountsTable = () => (
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>balance</th>
            <th>actions</th>
            <th>delete</th>
        </tr>
        <AccountRecord id="132546843264" name="Nathaniel" balance="10420" />
    </table>
)

export default AccountsTable