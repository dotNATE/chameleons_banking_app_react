import React from "react"

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
            <button onClick={ this.handleClickEvent }>{ this.state.action }</button>
        )
    }
}

export default ActionButton