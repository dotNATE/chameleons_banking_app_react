import React from "react"
import ReactDOM from 'react-dom'
import './actionButton.css'
import ModalButtons from "../../Modal/ModalButtons";
import Title from "../../Title";
import SimpleForm from "../../SimpleForm";

class ActionButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: props.action,
            url: props.action !== 'delete' ? 'http://localhost:3001/' + props.action : 'http://localhost:3001/accounts',
            method: props.method
        }
    }

    openModal = () => {
        document.querySelector('.modalBg').classList.remove('hidden')
        ReactDOM.render(
            <React.StrictMode>
                <Title content={ 'Make a ' + this.state.action.slice(0, -1) } />
                <section className="modalContent">
                    { this.state.action !== 'transfers' ?
                        <SimpleForm method={ this.state.method } action={ this.state.url } placeholder={ "Enter the " + this.state.action.slice(0, -1) + " amount" }/>
                        :
                        ''}
                </section>
                <ModalButtons />
            </React.StrictMode>,
            document.querySelector('.modal')
        )
    }

    render() {
        return (
            <button className="btn actionBtn" onClick={ this.openModal }>{ this.state.action }</button>
        )
    }
}

export default ActionButton