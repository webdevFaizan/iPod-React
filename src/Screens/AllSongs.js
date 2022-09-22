import React, { Component } from 'react'
import { getStorage,ref,getDownloadURL,listAll  } from "firebase/storage";
import firebaseApp from '../Firebase';


export default class AllSongs extends Component {

    constructor(){
        super();
        this.new_data_array=[];
        this.state = {
            all_songs_list : [],
            loading : true
        }
    }
     componentDidMount(){
        // Initialize Cloud Storage and get a reference to the service
        const storage = getStorage(firebaseApp);
        const listRef = ref(storage, 'music');
        // console.log(gsReference);
        listAll(listRef)
        .then((res) => {
        //   console.log(res.items) ;
            res.items.map(async (elem)=>{
                // console.log(elem.name)
                await getDownloadURL(elem)
                .then((url) =>
                {
                    this.new_data_array.push({ name: elem.name, url: url });
                    if (this.new_data_array.length === 2)//load the component when all the songs are added to the array.
                    {
                        this.setState({
                            all_songs_list: this.new_data_array,
                            loading: false
                        },()=>{
                            console.log(this.state.all_songs_list);
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
      <div className='screen-game'>
        <h1>All Songs</h1>
        <div style={{backgroundPosition : 'center', backgroundSize : 'cover'}}>
            <img src="./img/games.jpg" alt="..." />          
        </div>
      </div>
    )
  }
}
