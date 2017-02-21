import React, { Component } from 'react';

export class SongCards extends Component = (props) => {

  fetcher(e) {
    console.log('working')
      fetch(`http://localhost:9000/api/${e.target.id}`)
      .then(response => response.json())
      .then(data => this.props.displayPopular(data)))
  }

  render() {
  return (
    <div>
      <button id="jonwayne" onClick={e => this.fetcher(e)}>Jonwayne</button>
      <button id='kanyewest' onClick={e => this.fetcher(e)}>Kanye</button>
      <button id='lupefiasco' onClick={e => this.fetcher(e)}>Lupe</button>
      <button id='schoolboyq' onClick={e => this.fetcher(e)}>ScHoolboyQ</button>
      <button id='nipseyhussle' onClick={e => this.fetcher(e)}>Nipsey</button>
    </div>
  )
}
}
