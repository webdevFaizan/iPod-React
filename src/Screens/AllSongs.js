// IMPORTANT : Before the loading of this component no data regarding this component was downloaded, since the array consisting of all the music file to be downloaded are declared as a state variable and kept in this file, which means uless this file is mounted, and the component did mount is run  till then there will be no call to the firebase.
//And this is fine because the files of music does not need to be in the global state variable because no other child components of other parent is going to use this method.

import React, { Component } from 'react'
import { getStorage,ref,getDownloadURL,listAll  } from "firebase/storage";
import firebaseApp from '../Firebase';
import Loading from './Loading'

export default class AllSongs extends Component{
    constructor(){
        super();
        this.new_data_array=[];     //This temporary array is going to store the details of all the song items and when the list is complete then this array is pushed to the state variables.
        this.state = {
            all_songs_list : [],
            loading : true
        }
    }
     componentDidMount(){
        // Initialize Cloud Storage and get a reference to the service
        const storage = getStorage(firebaseApp);        //Read the docs and you will understand this. It was difficult for me to understand as it was not written at one place but over several places in the docs, in several articles, but in the end it worked out.
        const listRef = ref(storage, 'music');          //This music is the folder that is containing the data of the music.
        // console.log(gsReference);
        listAll(listRef)            //listAll method is going to find the list of all the reference variables. Which in this case means that we will have a list of array.
        .then((res) => {
        //   console.log(res.items) ;
            res.items.map(async (elem)=>{
                // console.log(elem.name)
                await getDownloadURL(elem)      //This method has to be an asycn method, since we do not get the downloaded url synchronously.
                .then((url) =>
                {
                    this.new_data_array.push({ name: elem.name, url: url });
                    if (this.new_data_array.length === 2)//load the component when all the songs are added to the array.
                    {
                        this.setState({
                            all_songs_list: this.new_data_array,
                            loading: true
                        },()=>{
                            console.log(this.state.all_songs_list);     //This will display the list of elements after the state has been changed.
                        });
                    }
                })
                .catch((error) =>
                {
                    console.log(error);
                })
            })
        })
    }
  render() {
    return (
        this.state.loading ? <Loading/> : ''
    )
  }
}
