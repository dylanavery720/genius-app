import React from 'react';
import Button from '../Button/Button'

const ArtCard = (props) => {
  return (
    <div>
      <h1 className="mdl-card__title-text">&nbsp; {props.title}</h1>
      <img className="thumbnail" src={props.src} width="480" height="270" />
      {!props.toggleC && <button
        type="checkbox"
        id="smiley"
        className="mdl-button mdl-js-button mdl-button--icon"
      >
        <i className="material-icons" onClick={props.favorite}>mood</i>
        </button>}
      {props.toggleC && <button
        type="checkbox"
        id="smiley"
        className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
      >
        <i className="material-icons" onClick={props.favorite}>mood</i>
      </button>}
    </div>
  )
}

ArtCard.propTypes = {
  classes: React.PropTypes.string,
  keys: React.PropTypes.number,
  src: React.PropTypes.string,
  favorite: React.PropTypes.func,
  tags: React.PropTypes.node,
  id: React.PropTypes.number,
  toggleC: React.PropTypes.bool,
}

export default ArtCard
