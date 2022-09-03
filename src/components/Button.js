// import React from 'react'

const Button = (props) => {
    const buttonStyle = {
        backgroundColor: props.color,
    }
    return (
        <div>
             <button onClick = {props.onClick} style = {buttonStyle} className ='btn'>{props.text}</button>
        </div>
    )
}

Button.defaultProps = {
    backgroundColor: 'black',
    text: 'button',
}


export default Button
