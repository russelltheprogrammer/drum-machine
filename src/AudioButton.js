import React from "react";
import './index.scss';

const AudioButton = ({ letter, props, audioElement }) => {

    return ( 
        <div>
            <div id={props.audioId} className="drum-pad">
                <span>{letter}</span>
                <audio ref={audioElement} id={letter} className="clip" src={props.url} preload="none"></audio>
            </div> 
        </div>
     );
}
 
export default AudioButton;