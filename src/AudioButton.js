import React from "react";
import './index.scss';

const AudioButton = ({ letter, props, audioElement }) => {

    return ( 
        <div>
            <div id={props.audioId} className="audio-button">
                <audio ref={audioElement} id={letter} className="clip" src={props.url} preload="preload"></audio>
                <span>{letter}</span>
            </div> 
        </div>
     );
}
 
export default AudioButton;