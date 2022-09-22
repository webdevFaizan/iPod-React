import './App.css';
import React from 'react';
import Buttons from './Buttons';
import Screen from './Screen';

class App extends React.Component {
  constructor(){
    super();
    //This app does not seem to be a very scalable solution, since we are maintaining the state of the music selection page within this state only. And also we are all kind of prop drilling. No context api no redux.
    this.state = {
            options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            change_in_angle: 0,   //This will moniter the change in the gesture over the ipod. Designed only for webview, zingtouch will allow us count the degrees we have dragged over the menu button and we could easily handle the change in the angle over the ipod buttons which will be considered as the input to change the menu elements and for selection purposes.
            selected: 0,        //This is defining which item on the menu is being selected.
            showPage: -1,       //Initially we are on the home page, this variable will help us in tracking on which page we are actually in.
            general_menu: ['Games', 'Music', 'Settings', 'Cover Flow'],
            songs_sub_menu: ['All Songs', 'Artists', 'Albums'],
            current_music_selection: 0,
            song_index: -1,     
            currently_on_play_music_screen: false,    //As this will be true, we will be able to show the music screen.
    }
  }

  menuButtonClicked=()=>{
    console.log("menu button clicked");
  }
  selectButtonClicked=()=>{
    console.log("select button clicked");
  }
  leftButtonClicked=()=>{
    console.log("left button clicked");
  }
  rightButtonClicked=()=>{
    console.log("right button clicked");
  }
  playPauseButtonClicked=()=>{
    console.log("play/pause button clicked");
  }

  render(){
    return (      
        <div className="container" >
              <Screen/>
            <div className="App" style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
              <Buttons
              menuButtonClicked={this.menuButtonClicked}
              selectButtonClicked={this.selectButtonClicked}
              leftButtonClicked={this.leftButtonClicked}
              rightButtonClicked={this.rightButtonClicked}
              playPauseButtonClicked={this.playPauseButtonClicked}
              />
            </div>
        </div>      
    );
  }
}

export default App;
