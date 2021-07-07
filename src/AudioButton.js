import React from "react";
import './index.scss';

const AudioButton = ({ props, letter }) => {

    const playAudioClip = (index) => {
        const sound = document.getElementById(letter);
        sound.currentTime = 0;
        sound.play();
    };

    return ( 
        <div>
                   <div id={props.audioId} className="drum-pad" onClick={() => playAudioClip(props.index) && props.playValue}>
                          <span>{letter}</span>
                          <audio id={letter} className="clip" src={props.url} preload="preload"></audio>
             </div> 
        </div>
     );
}
 
export default AudioButton;