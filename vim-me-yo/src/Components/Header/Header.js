import React from 'react';
import { browserHistory } from 'react-router';
import Button from '../Button/Button'
import logo from '../../film-reel.png';

const Header = (props) => {
  return (
    <div className={props.classes}>
      {!props.token && <a href="http://localhost:9000/test">Login</a>}
      <img src={logo} className="App-logo" alt="logo" onClick={props.handleClick} />
      <a onClick={props.handleClick} className="fave-link">Favorites</a>
      <h1 onClick={props.handleHome}>Palatial Revimeo</h1>
      <input className='mdl-textfield__input' onChange={props.updateSearch} />
      <Button id="search-butt" classes="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" handleClick={props.search} text="Search" />
      <button id="search-glass" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" handleClick={props.search}>
        <i className="material-icons">search</i>
      </button>
    </div>
  )
}
export default Header
