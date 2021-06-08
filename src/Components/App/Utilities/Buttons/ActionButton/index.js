import React from "react"
import './actionButton.css'

class ActionButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: props.action,
            url: 'http://localhost:3001/' + props.action,
            method: props.method
        }
        console.log(this.state.url)
    }

    openModal() {

    }

    async handleClickEvent() {
        let data = await fetch(this.state.url, {
            method: this.state.method
        })
    }

    render() {
        return (
            <button className="btn actionBtn" onClick={ this.handleClickEvent }>{ this.state.action }</button>
        )
    }
}

export default ActionButton