import React from "react"
import SearchButton from "../../Utilities/Buttons/SearchButton"
import "./accountFilterForm.css"

const AccountFilterForm = (props) => (
    <form className="accountsFilter" method="get" action={ props.action }>
        <input type="text" placeholder={ props.placeholder } />
        <SearchButton />
    </form>
)

export default AccountFilterForm