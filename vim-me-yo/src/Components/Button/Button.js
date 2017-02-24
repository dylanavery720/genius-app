import React from 'react';

const Button = (props) => {
  return (
    <button className={props.classes} onClick={props.handleClick}>{props.text}</button>
  )
}
export default Button
