import React, { Component } from 'react'

export default class MenuItems extends Component {
  render()
    {
        const { optionsInMenu } = this.props;        
        return (
            // This method is not changing the states but only displaying the items, this is just a show piece, all the actual changes are always done from the input side which changes some central thing, or data, and that central data is in sync with the ui which will display an updated ui. So basically does nothing but is a communication between screen and user.
            <React.Fragment>
                {
                    optionsInMenu.map((item, index) =>
                    {
                        //IMPORTANT : Any change in the ui of the particular list item will be done here, which means if we want the current element to be highlighted, then we will simply add the selected class. And this is being decided by the states, once the state changes only the difference in the elements will be shown. Which means a new render method will be run, which will not un-add(not exactly removing) the select class from the different item and will add selected class to this new item which will create an illusion that the current item has been selected.
                        return (    
                            <div className={this.props.selectedOption === index ? 'selected' : ''} key={index}>
                                {/* usually the addition of index as keys is not recommended but this is a small scale application and the options state is hardcoded which means the index value will not be changed which furthur means key will be unique as per index.*/}
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
                {optionsInMenu.length === 3 ?
                    <div style={{color:'green'}}>
                        <p style={{fontSize:18}}>click "<i className="fas fa-backward"></i>" to go back</p>
                    </div>:''
                }
            </React.Fragment>
        )
    }
}

