import React from 'react';
// import image from '../../public/img/music.jpg';
import $ from 'jquery'


class Music extends React.Component
{
    

    componentDidMount()
    {
        this.props.currentlyOnPlayMusicScreen();        //When ever we are playing any music, then this method will automatically run, and this will inturn be used to add the infinitely changing color animation on the buttons.



        // this.props.playPauseButtonClicked();    //Since this is the CDM method, means it will only click on the play/pause button for only once, this simply means that this button could be easily replaced by adding an autoPlay tag in my music player. Which I have added, but due to some reason this method is being called twice and thus the play is never executed, instead the player is getting paused over again. But this is a minor bug.


        this.play();        //The above problem is fixed by this method.
    }

    async play(){      
        // The main reason why there was an initial error was that, .play() mehtod returns a promise, this means we will have to get it resolved, if it is not resolved then it will continue giving us a uncaught promise error.
        await document.getElementById('audio').play();
        $('.buttons-container').addClass('colored');
        // This addClass method is there in the jquery, without importing the $ sign from jquery this .addClass syntax was giving an error, but I had to add this class individually since I am not able to run teh playPauseButtonClicked() method as the promise of .play() is not getting resolved.
    }

    componentWillUnmount()
    {
        // IMPORTANT : This button here is a very good example of switching to and from music playing screen, when this component is mounted, then this animation should start and how will this be checked? This is exactly what this method is doing, in the App.js file this method is actually changing the state of the variable which means whent his component will be mounted that animation will start, and when this component is unmounted then this method will run again, it would behave like a kind of toggle switch. But as you notice we have done a lot of prop drilling for this method itself, I think this prop drilling was not required for this animation, as it seems kind of unnecessary.
        this.props.currentlyOnPlayMusicScreen();    
    }
    
    render()
    {
        const {songIndex, Songs}=this.props;
        // The destrcuturing of the props should be done only in this render method before the return statement, not in the CDM method or before the class or else it will throw an error.
        return (
            <div className="screen-music">
                <h2>{Songs[songIndex].name.split(' ')[0]}</h2>
                <div className="song-image">
                    <img src={'./img/music.jpg'} alt="song item"></img>
                </div>
                <div style={{marginTop:20}}>
                    <audio controls="seeking" id="audio" src={Songs[songIndex].url}></audio>
                </div>
                <div className='screen-music-instruction'>
                    <p>
                        Press "<i className="fas fa-play"></i>/<i className="fas fa-pause"></i>" button to play/pause.
                    </p>
                </div>
            </div>
        );
    }
};

export default Music;