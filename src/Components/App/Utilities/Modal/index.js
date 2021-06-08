import React from "react"
import ModalCloseCross from "./ModalCloseCross";
import ModalButtons from "./ModalButtons";
import './modal.css'

const Modal = () => (
    <div className="modalBg">
        <div className="modal">
            <ModalCloseCross />
            <section className="modalContent"/>
            <ModalButtons />
        </div>
    </div>
)

export default Modal