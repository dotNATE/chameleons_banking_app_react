import React from "react"
import './closeButton.css'

class CloseButton extends React.Component {
    handleClick() {
        document.querySelector('.modalBg').classList.add('hidden')
    }

    render() {
        return  (
            <button className="btn closeBtn" onClick={ this.handleClick }>Close</button>
        )
    }
}

export default CloseButton