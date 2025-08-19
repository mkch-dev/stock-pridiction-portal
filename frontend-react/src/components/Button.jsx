import React from 'react'

const Button = (props) => {
    return (
        <>
            <a href="" className={`btn ${props.class} ${props.margin ? props.margin : ''}`}>{props.text}</a>
        </>
    )
}

export default Button