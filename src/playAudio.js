import './index.scss';
import React from 'react';

const PlayAudio = ({ audioId, letter, url, index }) => {


const playAudioClip = () => {
    const sound = document.getElementsByClassName("clip")[index];
    sound.currentTime = 0;
    sound.play();
}


return (
<div id={audioId} className="drum-pad">
                        <button className="drum-button" onClick={playAudioClip}>
                            <span>{letter}</span>
                        </button>
                        <audio id={letter} className="clip" src={url} preload="preload">
                        </audio>
                    </div>
)
}

export default PlayAudio;