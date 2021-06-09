import React from "react"
import SubmitButton from "../../Buttons/SubmitButton";
import CloseButton from "../../Buttons/CloseButton";
import './modalButtons.css'

const ModalButtons = () => (
    <div className="modalFooter">
        <SubmitButton />
        <CloseButton />
    </div>
)

export default ModalButtons