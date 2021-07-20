import React from "react";
import './index.scss';

const AudioButton = ({ letter, props, audioElement }) => {

// get rid of props? and change function?

    return ( 
        <div>
            <div>
                <span>{letter}</span>
                <audio ref={audioElement} id={letter} className="clip" src={props.url} preload="preload"></audio>
            </div> 
        </div>
     );
}
 
export default AudioButton;