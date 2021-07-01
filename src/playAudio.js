import './index.scss';
import React, { useState, useEffect } from 'react';

const PlayAudio = ({ audioId, letter, url, index, keyCode }) => {

const playAudioClip = () => {
    const sound = document.getElementsByClassName("clip")[index];
    sound.currentTime = 0;
    sound.play();
}

const KeyClick = (keyCode) => {
    const [keyPressed, setKeyPressed ] = useState(false)

    const downHandler = ({ key }) => {
        if(key === keyCode){
            setKeyPressed(true)
        }
    }
    const upHandler = ({ key }) => {
        if (key === keyCode){
            setKeyPressed(false)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', downHandler);
        document.addEventListener('keyup', upHandler);
        return () => {
        document.removeEventListener('keydown', downHandler);
        document.removeEventListener('keyup', upHandler);
        }
        }, [ downHandler, upHandler ])
    return keyPressed
}

// const keyClick = (e) => {
//     if(e.keyCode === keyCode){
//     playAudioClip();
//     console.log("you pressed a key!")
//     }
// }



return (
    <div id={audioId} className="drum-pad" onClick={playAudioClip} onKeyPress={KeyClick(keyCode) ? 'pressed' : null}>
        <span>{letter}</span>
        <audio id={letter} className="clip" src={url} preload="preload"></audio>
    </div>
)
}

export default PlayAudio;