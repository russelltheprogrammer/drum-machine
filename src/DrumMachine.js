import './index.scss'
import React, { useState, useRef, useEffect } from 'react';
import AudioData from './AudioData';
import AudioButton from './AudioButton';
import Display from './Display';
import PowerButton from './PowerButton';
import VolumeControl from './VolumeControl';

// From a learning perspective -- My final note on this project is I think it could have been more code efficient if the
// map function was used to generate the audio buttons. This would have used a lot less lines of code if done correctly.


const DrumMachine = () => {

    const playABeat = "Play a beat!";
    const powerOffDisplay = "Power is off";
    const [display, setDisplay] = useState(playABeat);
    const [audioId, setAudioId] = useState(AudioData[0]["id"]);
    const [letter, setLetter] = useState(AudioData[0]["keyTrigger"]);
    const [url, setUrl] = useState(AudioData[0]["url"]);
    const [power, setPower] = useState(true);
    const [volumeValue, setVolumeValue ] = useState(0.5);
    const [index, setIndex] = useState(0);

    const audioElement = useRef();


    const getAudioData = (audioIdWanted) => {

        return new Promise((resolve, reject) => {
            for(let i = 0; i < AudioData.length; i++){
                let index = 0;
                    if(audioIdWanted === AudioData[i]["id"]) {
                        index = AudioData.indexOf(AudioData[i]);
                        setDisplay(AudioData[index]["id"]);
                        setAudioId(AudioData[index]["id"]);
                        setLetter(AudioData[index]["keyTrigger"]);
                        setUrl(AudioData[index]["url"]);
                        setIndex(index);
                    }
            }
        resolve();
        reject("error")
        })
    }
    
    const playAudioClip = () => {
        if(power) {
            const sound = audioElement.current;
            sound.volume = volumeValue;
            sound.currentTime = 0;
            setTimeout(() => {
                sound.play()
            }, 150);
        }
        else if (!power){
        setDisplay(powerOffDisplay)
        }
    };


    const defaultLetterCheck = (defaultLetter) => defaultLetter === letter ? letter : defaultLetter;

    const passPropsToAudioButton = (audioId, url) => {
        let props = {
        audioId: audioId, 
        url: url
        }
        return props
    };
        

    const keyClick = (e) => {
            for(let i = 0; i < AudioData.length; i++) {
                let index = 0;
                    if(e.keyCode === AudioData[i]["keyCode"]){
                        index = AudioData.indexOf(AudioData[i]);
                        getAudioData(AudioData[index]["id"]);
                        playAudioClip();
                    }
            }
    }

    const handlePower = () => !power ? setPower(true) : setPower(false) & setDisplay(powerOffDisplay);

    const handleVolumeChange = (e) => {
        if(power) {
            setVolumeValue(e.target.value);
            setDisplay("Volume: " + Math.round(e.target.value * 100));
            setTimeout(() => setDisplay(playABeat), 1000);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyClick)
        return () => {
        document.removeEventListener('keydown', keyClick)
        }
    })


    return ( 
        <div id="drum-machine">
            <div id="inner-drum-machine-box">
                 <div className="row">
                    <div className="col" onClick={() => getAudioData(AudioData[0]["id"]).then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("Q")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div> 
                    <div className="col" onClick={() => getAudioData(AudioData[1]["id"]).then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("W")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div> 
                    <div className="col" onClick={() => getAudioData(AudioData[2]["id"]).then(() => playAudioClip())}>
                         <AudioButton letter={defaultLetterCheck("E")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div> 
                    <div className="col-5" onClick={() => handlePower()}>
                         <PowerButton power={power}/>
                    </div> 
                 </div> 
                 <div className="row">
                    <div className="col" onClick={() => getAudioData(AudioData[3]["id"]).then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("A")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                     </div> 
                     <div className="col" onClick={() => getAudioData(AudioData[4]["id"]).then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("S")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col" onClick={() => getAudioData(AudioData[5]["id"]).then(() => playAudioClip())}>
                         <AudioButton letter={defaultLetterCheck("D")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col-5">
                         <Display display ={display}/>
                    </div>
                </div>
                    <div className="row">
                    <div className="col" onClick={() => getAudioData(AudioData[6]["id"]).then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("Z")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                     </div> 
                     <div className="col" onClick={() => getAudioData(AudioData[7]["id"]).then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("X")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col" onClick={() => getAudioData(AudioData[8]["id"]).then(() => playAudioClip())}>
                         <AudioButton letter={defaultLetterCheck("C")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col-5">
                        <VolumeControl volumeValue={volumeValue} handleVolumeChange={handleVolumeChange} />
                    </div> 
                 </div> 
             </div>
        </div>
     );
}
 
export default DrumMachine;