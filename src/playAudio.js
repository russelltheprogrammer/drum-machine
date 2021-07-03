import './index.scss';
import React, { useState, useEffect } from 'react';

const PlayAudio = ({ audioId, letter, url, index, keyCode }) => {

    const [display, setDisplay] = useState("");

const playAudioClip = () => {
    const sound = document.getElementsByClassName("clip")[index];
    sound.currentTime = 0;
    sound.play();
    setDisplay(audioId);
}

const keyClick = (e) => {
    if(e.keyCode === keyCode){
        playAudioClip();
    }
}

useEffect(() => {
    document.addEventListener('keydown', keyClick)
    return () => {
        document.removeEventListener('keydown', keyClick)
    }
})



// useEffect(() => {
//     document.addEventListener(, playAudioClip)
//     return () => {
//         document.removeEventListener(, playAudioClip)
//     }
// })

return (
    <div>
    <div id={audioId} className="drum-pad" onClick={playAudioClip}>
        <span>{letter}</span>
        <audio id={letter} className="clip" src={url} preload="preload"></audio>
    </div>
    <div>
    {display}
    </div>
    </div>
)
}

export default PlayAudio;