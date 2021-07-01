import './index.scss';
import React, { useState, useEffect } from 'react';

const PlayAudio = ({ audioId, letter, url, index, keyCode }) => {

const playAudioClip = () => {
    const sound = document.getElementsByClassName("clip")[index];
    sound.currentTime = 0;
    sound.play();
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


return (
    <div id={audioId} className="drum-pad" onClick={playAudioClip}>
        <span>{letter}</span>
        <audio id={letter} className="clip" src={url} preload="preload"></audio>
    </div>
)
}

export default PlayAudio;