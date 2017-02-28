import React from 'react';

const Button = (props) => {
  return (
    <button className={props.classes} onClick={props.handleClick}>{props.text}</button>
  )
}

Button.propTypes = {
  classes: React.PropTypes.string,
  text: React.PropTypes.string,
  handleClick: React.PropTypes.func,
}

export default Button
