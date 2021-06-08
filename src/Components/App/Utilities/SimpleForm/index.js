import React from "react"
import SearchButton from "../Buttons/SearchButton";
import './simpleForm.css'

const SimpleForm = (props) => (
    <form className="simpleForm" method={ props.method } action={ props.action }>
        <input type="text" placeholder={ props.placeholder } />
        <SearchButton />
    </form>
)

export default SimpleForm