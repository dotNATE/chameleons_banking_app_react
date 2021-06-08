import React from "react"
import './actionButton.css'

class ActionButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: props.action
        }
    }

    handleClickEvent = () => {

    }

    render() {
        return (
            <button className="btn actionBtn" onClick={ this.handleClickEvent }>{ this.state.action }</button>
        )
    }
}

export default ActionButton