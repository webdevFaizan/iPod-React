import './App.css';
import React from 'react';
import Buttons from './Buttons';
import Screen from './Screen';
import ZingTouch from 'zingtouch'
import $ from 'jquery'

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
              songs_sub_menu: ['All Songs', 'Artists', 'Albums'],     //This list of menu is hard coded here, and thus we are able to change the state of options without giving any api call.
              current_music_selection: 0,
              song_index: -1,     
              currently_on_play_music_screen: false,    //As this will be true, we will be able to show the music screen.
      }
    }

    componentDidMount()
    {
        var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);   //This getElementsByClassName returns a HTML collection, of all the containers that consists of a class with name = 'buttons-container', and we selecting the first one that is there, actually there is only one such class and applying the ZingTouch method on it, considering it as a region for ZingTouch moniter. Means any input outside this element will not be considered as a region and thus it will not be considered as a input.

        //This is the main reason why the above method is not considered as the gesture of the app, the below bind method is applied for the gesture moniter, and this is the good part, our buttons inside this button container was in the form of rectangle, so the gestures could not have been applied to each button, rather it should be applied to the parent of those button, which in this case is circular in nature.
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>   //We have taken care of the rotate event, this we had to learn from the documentation of zingtouch.
        {
          // console.log(event.detail.distanceFromLast);    //IMPORTANT : It was good that we added this console.log method here, we could moniter the instanteneous distance travelled by this method, but the main issue is that this distanceFromLast is taking a lot of calculation as well as it is throwing a lot of console.log statement even for a very small amount of gesture, this could lead to hanging up of the client browser since this much input is a problem the only thing is that it is based on user input and not permanent input this simply means there will be some fininte time span when this method will have any effect.

            if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))//The rotation gesture will create any effect only when the screen-menu is visible.
            {
                let dist = event.detail.distanceFromLast;   //This in an internal function that takes care of the distance travelled by the rotation function in term of degress, note we need not have a gesture in the circular fashion, instead we need to have a an input and it will calculation the rotation.                
                // I think in the depth of the analysis of this method, this mehtod is just checking for the distance from immediate last gesture, this means, there must be some kind of throttling could be done, but I also think throttling will create a problem with this method since it will not be able to handle the instanteneous gesture. But in some similar situation where you would want to limit the number of inputs or calculation so that your client does not hang up, you could use throttling.
                this.temp_change_in_angle += dist;
                if (this.temp_change_in_angle > 60)
                {
                    this.temp_selected++;
                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                        // song_index: -1
                    });

                    this.temp_change_in_angle = 0;
                }
                else if (this.temp_change_in_angle < -60)
                {
                    this.temp_selected--;
                    if (this.temp_selected === -1)
                        this.temp_selected = this.state.options.length - 1;

                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                        // song_index: -1
                    });
                    this.temp_change_in_angle = 0;
                }
            }

        });
    }


  menuButtonClicked=()=>{
    console.log("menu button clicked");
    let screenMenuClassList = document.getElementsByClassName('screen-menu')[0].classList;
        if (screenMenuClassList.contains('width-50'))
        {
            $('.screen-menu').removeClass('width-50');//hide menu
        }
        else
        {
            $('.screen-menu').addClass('width-50');//show menu
        }
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
      // The basic flow of the app is as follows - We have a screen component that changes as per the input from the buttons component, but the button component is almost same for all the pages, this is why there are not a lot of components inside the buttons component, and in the screen component we have a fixed component as menu, which will be hidden and shown as per requirement, and as per the selection of the menu items we will show other components inside the screen component itself. Like the Games component which does not have anything to show except image of game.
      // Any click on the button and the input bar in the Buttons component will change the state in this App component which is the parent of all other components, and through prop drilling we will send in all the elements to the respective sub components. Which will be displayed on the screen.
        <div className="App">
              <Screen 
                selectedOption={this.state.selected}
                showPage={this.state.showPage}
                optionsInMenu={this.state.options}
              />
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
