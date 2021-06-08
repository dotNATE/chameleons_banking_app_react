import React from "react"
import ModalCloseCross from "./ModalCloseCross";
import ModalButtons from "./ModalButtons";

const Modal = () => (
    <div className="modal">
        <ModalCloseCross />
        <section className="modalContent"/>
        <ModalButtons />
    </div>
)

export default Modal