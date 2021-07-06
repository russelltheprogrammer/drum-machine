import React from "react";
import './index.scss';

const AudioButton = ({ audioId, letter, url }) => {
    return ( 
        <div>
                   <div id={audioId} className="drum-pad">
                          <span>{letter}</span>
                          <audio id={letter} className="clip" src={url} preload="preload"></audio>
             </div> 
        </div>
     );
}
 
export default AudioButton;