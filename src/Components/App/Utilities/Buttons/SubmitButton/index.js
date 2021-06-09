import React from "react"
import  './submitButton.css'

const SubmitButton = () => <button className="btn submitBtn">Submit</button>

class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = () => {

    }

    render() {
        return (
            <button className="btn submitBtn" onClick={ this.handleClick }>Submit</button>
        )
    }
}

export default SubmitButton