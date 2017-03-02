import React from 'react';
import Button from '../Button/Button'

const VideoCard = (props) => {
  const shortTags = props.tags.splice(0, 4)
  return (
    <li className={props.classes} key={props.keys}>
      {shortTags.map(tag => <h3 className="mdl-card__title-text">&nbsp; #{tag.canonical}</h3>)}
      <iframe src={props.src} width="480" height="270" />
      {!props.toggleC && <button
        type="checkbox"
        id="smiley"
        className="mdl-button mdl-js-button mdl-button--icon"
      >
        <i className="material-icons" id={props.id} onClick={props.favorite}>mood</i>
        </button>}
      {props.toggleC && <button
        type="checkbox"
        id="smiley"
        className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
      >
        <i className="material-icons" id={props.id} onClick={props.favorite}>mood</i>
      </button>}
    </li>
  )
}

VideoCard.propTypes = {
  classes: React.PropTypes.string,
  keys: React.PropTypes.number,
  src: React.PropTypes.string,
  favorite: React.PropTypes.func,
  tags: React.PropTypes.node,
  id: React.PropTypes.number,
  toggleC: React.PropTypes.bool,
}

export default VideoCard
