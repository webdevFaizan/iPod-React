import React, { Component } from 'react'
import MenuItems from './MenuItems'

export default class Menu extends Component {
  render() {
    // console.log(this.props.optionsInMenu);
    return (
        // IMPORTANT : This will be menu, it will be in a hidden or shown state as per the requirement, when we click on the button we will change the state in the App.js component which will ultimately show or hide this menu. And in the case of react those central items are the state variables that is being changed over the click of the button. And UI is only one thing that is being altered by the central state system.
        <div className="screen-menu">        
            <div className="app-logo">
                <h3><i>Faizan's iPod</i></h3>
            </div>
            {/* The menuItems are not hard coded, since this will vary from screen to screen, the menu items will change as per the state. This will ultimately lead to the different options to be selected. */}
            <MenuItems                 
            optionsInMenu={this.props.optionsInMenu}
            selectedOption={this.props.selectedOption}
            />
      </div>
    )
  }
}