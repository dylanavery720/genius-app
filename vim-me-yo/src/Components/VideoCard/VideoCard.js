import React from 'react';
import Button from '../Button/Button'

const VideoCard = (props) => {
  let shortTags = props.tags.map.splice(0,4)
  return (
    <li className={props.classes} key={props.keys}>
    {shortTags.map(tag =><h2>#{tag.canonical}</h2>)}
      <iframe src={props.src} width="480" height="270"></iframe>
    <button className="mdl-button mdl-js-button mdl-button--icon">
      <i className="material-icons">mood</i>
    </button>
    </li>
  )
}

export default VideoCard
