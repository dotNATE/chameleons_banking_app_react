import React from "react"
import ActionButton from "../../../Utilities/Buttons/ActionButton";
import './accountRecord.css'

const AccountRecord = (props) => (
    <tr className="accountRow">
        <td data-id={ props.id }>{ props.name }</td>
        <td>£{ props.balance }</td>
        <td className="btnDisplay">
            <ActionButton action="deposits" method="put"/>
            <ActionButton action="withdrawals" method="put"/>
            <ActionButton action="transfers" method="put"/>
            <ActionButton action="delete" method="delete"/>
        </td>
    </tr>
)

export default AccountRecord