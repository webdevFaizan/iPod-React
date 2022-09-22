import React, { Component } from 'react'
import Menu from './Screens/Menu'
import Game from './Screens/Game'
import Setting from './Screens/Setting'
import Coverflow from './Screens/Coverflow'
import Artists from './Screens/Artists'
import Albums from './Screens/Albums'
import AllSongs from './Screens/AllSongs'

export default class Screen extends Component {
  render(){    
    return (
      <div className='screen-container'>
        {/* This menu container will be the one that will be available all the time but it might be in a hidden state, so when the menu button is click we will trigger a functionality that will ultimately change the state, which is being passed to this component that will show the desired output. */}
        <Menu
            optionsInMenu={this.props.optionsInMenu}
            selectedOption={this.props.selectedOption}
        />
        {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? 
        <Game /> : ''}
        {/* IMPORTANT : When we click on the music option shown in the list, then a new component will not open up, instead on the state level we will check if that option is about music, if yes then we will change the state of the list variable to a new list containing songs_sub_menu: ['All Songs', 'Artists', 'Albums'] and after the state is mounted then we will have new components to mount which is written below.*/}
        {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? 
        <Setting /> : ''}
        {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? 
        <Coverflow /> : ''}
        {/* There is one very important detail here, which could have been missed, the option contains ['Games', 'Music', 'Settings', 'CoverFlow'], but in the components the Music with index 1 is missing, there is a reason, we have not divided the Music as a component, instead all the components inside the music has been added here, below, there is one advantage for this we have to mount the correct method inside the Screen component, now the music component could have been added separately which would have added the below components, but instead we have added the inner components here, if the conditions meets properly then the following components will mount. */}
        {this.props.showPage === 0 && this.props.optionsInMenu.length === 3 ? <AllSongs 
        currentMusicSelection={this.props.currentMusicSelection}
        songIndex={this.props.songIndex}
        currentlyOnPlayMusicScreen={this.props.currentlyOnPlayMusicScreen}
        playPauseButtonClicked={this.props.playPauseButtonClicked}
        /> : ''}
        {this.props.showPage === 1 && this.props.optionsInMenu.length === 3 ? 
        <Artists /> : ''}
        {this.props.showPage === 2 && this.props.optionsInMenu.length === 3 ? 
        <Albums /> : ''}
      </div>
    )
  }
}
