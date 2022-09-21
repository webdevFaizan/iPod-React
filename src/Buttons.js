import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    return (
      <div className='buttons-container'>
        <button className="center-circle" onClick={this.props.selectButtonClicked}>
                <h2>Select</h2>
            </button>

            <button className="menu-button" onClick={this.props.menuButtonClicked}>
                <i className="fas fa-bars"></i>
            </button>
            <button className="left-button" onClick={this.props.leftButtonClicked}>
                <i className="fas fa-backward"></i>
            </button>
            <button className="right-button" onClick={this.props.rightButtonClicked}>
                <i className="fas fa-forward"></i>
            </button>
            <button className="play-pause" onClick={this.props.playPauseButtonClicked}>
                <i className="fas fa-play"></i>/<i className="fas fa-pause"></i>
        </button>
      </div>
    )
  }
}
