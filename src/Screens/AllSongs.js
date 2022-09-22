import React, { Component } from 'react'
import { getStorage,ref,getDownloadURL  } from "firebase/storage";
import firebaseApp from '../Firebase';




export default class AllSongs extends Component {

    constructor(){
        super();
        this.temp_songs=[];
        this.state = {
            allSongs : [],
            loading : true
        }
    }
    componentDidMount(){
        // Initialize Cloud Storage and get a reference to the service
        const storage = getStorage(firebaseApp);
        const gsReference = ref(storage, 'gs://ipod-react-c473f.appspot.com/Valkyries_OST.mp3');
        console.log(gsReference.name);
        // getDownloadURL(ref(storage, '/Valkyries God of War - OST.mp3'))
        // .then((url) => {
        //    console.log(url);
        //   })
        //   .catch((error) => {
        //     // Handle any errors
        //   });
    }
  render() {
    return (
      <div className='screen-game'>
        <h1>All Songs</h1>
        <div style={{backgroundPosition : 'center', backgroundSize : 'cover'}}>
            <img src="./img/games.jpg" alt="..." />          
        </div>
      </div>
    )
  }
}
