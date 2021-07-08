import React from "react";
import './index.scss';

const AudioButton = ({ props, letter }) => {

    return ( 
        <div>
                   <div id={props.audioId} className="drum-pad">
                          <span>{letter}</span>
                          <audio id={letter} className="clip" src={props.url} preload="preload"></audio>
             </div> 
        </div>
     );
}
 
export default AudioButton;