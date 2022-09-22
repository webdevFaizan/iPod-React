import React from 'react';

class Music extends React.Component
{
    componentDidMount()
    {
        this.props.currentlyOnPlayMusicScreen();        //When ever we are playing any music, then this method will automatically run, and this will inturn be used to add the infinitely changing color animation on the buttons.
        this.props.playPauseButtonClicked();
    }
    componentWillUnmount()
    {
        // IMPORTANT : This button here is a very good example of switching to and from music playing screen, when this component is mounted, then this animation should start and how will this be checked? This is exactly what this method is doing, in the App.js file this method is actually changing the state of the variable which means whent his component will be mounted that animation will start, and when this component is unmounted then this method will run again, it would behave like a kind of toggle switch. But as you notice we have done a lot of prop drilling for this method itself, I think this prop drilling was not required for this animation, as it seems kind of unnecessary.
        this.props.currentlyOnPlayMusicScreen()
    }
    render()
    {
        const {songIndex, Songs}=this.props;
        return (
            <div className="screen-music">
                <h2>{Songs[songIndex].name}</h2>
                <div className="song-image">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzrIyTb8emnPtXD2EYZ1nkSdIkYZ2zxUzUhw&usqp=CAU'} alt="song item"></img>
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