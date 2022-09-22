import React, { Component } from 'react'

// const {name} = this.props;
export default class PlayMusic extends Component {
//    var {name} = this.props;
    constructor(){
        super();
    }
    componentDidMount(){        
    }
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
