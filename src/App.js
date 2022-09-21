
import './App.css';
import React from 'react';
import Buttons from './Buttons';

class App extends React.Component {

  menuButtonClicked=()=>{

  }
  selectButtonClicked=()=>{

  }
  leftButtonClicked=()=>{

  }
  rightButtonClicked=()=>{

  }
  playPauseButtonClicked=()=>{

  }

  render(){
    return (
      <>
        <div className="container" style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
            <div className="App">
              <Buttons
              menuButtonClicked={this.menuButtonClicked}
              selectButtonClicked={this.selectButtonClicked}
              leftButtonClicked={this.leftButtonClicked}
              rightButtonClicked={this.rightButtonClicked}
              playPauseButtonClicked={this.playPauseButtonClicked}
              />
            </div>
        </div>
      </>
    );
  }
}

export default App;
