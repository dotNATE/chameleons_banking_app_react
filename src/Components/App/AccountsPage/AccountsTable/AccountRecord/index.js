import React from "react"
import ActionButton from "../../../Utilities/Buttons/ActionButton";

const AccountRecord = (props) => (
    <tr>
        <td data-id={ props.id }>{ props.name }</td>
        <td>{ props.balance }</td>
        <td>
            <ActionButton action="deposits" />
            <ActionButton action="withdrawals" />
            <ActionButton action="transfers" />
        </td>
        <td>
            <ActionButton action="delete" />
        </td>
    </tr>
)

export default AccountRecord