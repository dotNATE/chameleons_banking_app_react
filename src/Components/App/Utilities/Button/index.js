import React from "react"

const Button = (props) => props.link ? (<button><a href={ props.link }>{ props.content }</a></button>) : (<button>{ props.content }</button>)

export default Button