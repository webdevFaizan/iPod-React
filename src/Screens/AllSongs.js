import React, { Component } from 'react'

export default class AllSongs extends Component {
  render() {
    return (
      <div className='screen-game'>
        <h1>All Songs</h1>
        <div style={{backgroundPosition : 'center', backgroundSize : 'cover'}}>
            <img src="./img/games.jpg" alt="..." />          
        </div>
      </div>
    )
  }
}
