import React from 'react'
import './title.css'

const Title = (props) => {
    return (
        <div className="titleMain">
            <h1>{ props.content }</h1>
        </div>
    )
}

export default Title