import React from 'react'

export default function Game() {
  return (
    <div className="screen-game">
      <h1>Cover</h1>
      <div style={{backgroundPosition : 'center', backgroundSize : 'cover'}}>
          <img src="./img/cover.jpg" alt="" />          
      </div>
    </div>
  )
}
