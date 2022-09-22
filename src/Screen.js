import React, { Component } from 'react'
import Menu from './Screens/Menu'

export default class Screen extends Component {
  render() {
    
    return (
      <div className='screen-container'>
        {/* This menu container will be the one that will be available all the time but it might be in a hidden state, so when the menu button is click we will trigger a functionality that will ultimately change the state, which is being passed to this component that will show the desired output. */}
        <Menu
            optionsInMenu={this.props.optionsInMenu}
        />
      </div>
    )
  }
}
