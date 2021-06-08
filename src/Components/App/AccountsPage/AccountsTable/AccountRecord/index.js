import React from "react"
import ActionButton from "../../../Utilities/Buttons/ActionButton";
import './accountRecord.css'

const AccountRecord = (props) => (
    <tr className="accountRow">
        <td data-id={ props.id }>{ props.name }</td>
        <td>£{ props.balance }</td>
        <td className="btnDisplay">
            <ActionButton action="deposits" />
            <ActionButton action="withdrawals" />
            <ActionButton action="transfers" />
            <ActionButton action="delete" />
        </td>
    </tr>
)

export default AccountRecord