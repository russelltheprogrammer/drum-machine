import React from "react";
import './index.scss';

const AudioButton = ({ props, audioElement }) => {

    return ( 
        <div>
                <audio ref={audioElement} id={props.letter} className="clip" src={props.url} preload="preload"></audio>
        </div>
     );
}
 
export default AudioButton;