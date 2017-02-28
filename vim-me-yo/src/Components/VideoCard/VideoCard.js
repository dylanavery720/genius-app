import React from 'react';
import Button from '../Button/Button'

const VideoCard = (props) => {
  const shortTags = props.tags.splice(0, 4)
  return (
    <li className={props.classes} key={props.keys}>
      {shortTags.map(tag => <h3 className="mdl-card__title-text">&nbsp; #{tag.canonical}</h3>)}
      <iframe src={props.src} width="480" height="270" />
      <button className="mdl-button mdl-js-button mdl-button--icon">
      <i className="material-icons" onClick={props.favorite}>mood</i>
      </button>
    </li>
  )
}

export default VideoCard
