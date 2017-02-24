import React from 'react';
import Button from '../Button/Button'
import logo from '../../film-reel.png';

const Header = (props) => {
  return (
    <div className={props.classes}>
      {!props.token && <a href="http://localhost:9000/test">Login</a>}
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Palatial Revimeo</h1>
      <input className='mdl-textfield__input' onChange={props.updateSearch}></input>
      <Button classes="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" handleClick={props.search} text="Search" />
      {/* <i class="material-icons">search</i> */}
    </div>
  )
}
export default Header
