import React, { Component } from 'react'

export default class MenuItems extends Component {
    render() {
        const arr = this.props.optionsInMenu;
        // console.log(arr);
    return (
        // This method is not changing the states but only displaying the items, this is just a show piece, all the actual changes are always done from the input side which changes some central thing, or data, and that central data is in sync with the ui which will display an updated ui. So basically does nothing but is a communication between screen and user.
      <div>
        <ul>
            {arr.map((elem,index)=>{
                return (<li key={index} >{elem}</li>)
            })}
        </ul>
      </div>
    )
  }
}

