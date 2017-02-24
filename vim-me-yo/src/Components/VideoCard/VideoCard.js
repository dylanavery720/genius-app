import React from 'react';

const VideoCard = (props) => {
  return (
    <li className={props.classes} key={props.keys}><iframe src={props.src} width="480" height="270"></iframe></li>
  )
}

export default VideoCard
