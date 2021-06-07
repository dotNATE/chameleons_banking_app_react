import React from "react"
import Button from "../../../Utilities/Button";

const AccountRecord = (props) => (
    <tr>
        <td>{ props.id }</td>
        <td>{ props.name }</td>
        <td>{ props.balance }</td>
        <td>
            <Button content="deposit" />
            <Button content="withdraw" />
            <Button content="transfers" />
        </td>
        <td>
            <Button content="delete" />
        </td>
    </tr>
)

export default AccountRecord