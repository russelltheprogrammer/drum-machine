import './index.scss'
import React, { useState, useEffect } from 'react';
import AudioData from './AudioData';
import Display from './Display';
import PowerButton from './PowerButton';
import VolumeControl from './VolumeControl';

// From a learning perspective -- My final note on this project is I think it could have been more code efficient if the
// map function was used to generate the audio buttons. This would have used a lot less lines of code if done correctly.

// This version of the DrumMachine is to be able to pass the FCC tests. My original version worked as expected but could
// not pass two of the FCC tests. This version seems to be less code efficient than my original version. Although
// when I made the FCC version I reduced the number of states and functions that I needed to use.


const DrumMachineFCCTestsPass = () => {

    const playABeat = "Play a beat!";
    const powerOffDisplay = "Power is off";
    const [display, setDisplay] = useState(playABeat);
    // const [audioId, setAudioId] = useState(AudioData[0]["id"]);
    // const [url, setUrl] = useState(AudioData[0]["url"]);
    const [power, setPower] = useState(true);
    const [volumeValue, setVolumeValue ] = useState(0.5);
    const [index, setIndex] = useState(0);

    const getAudioData = (audioIdWanted) => {

        return new Promise((resolve, reject) => {
            for(let i = 0; i < AudioData.length; i++){
                let index = 0;
                    if(audioIdWanted === AudioData[i]["id"]) {
                        index = AudioData.indexOf(AudioData[i]);
                        setDisplay(AudioData[index]["id"]);
                        setIndex(index);
                    }
            }
        resolve();
        reject("error")
        })
    }
    
    const playAudioClip = () => {
        if(power) {
            const sound = document.getElementById(AudioData[index]["keyTrigger"]);
            console.log(sound);
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
                        <div id={AudioData[0]["id"]} className="drum-pad">
                            <span>{AudioData[0]["keyTrigger"]}</span>
                            <audio id={AudioData[0]["keyTrigger"]} className="clip" src={AudioData[0]["url"]} preload="preload" />
                        </div> 
                    </div> 
                    <div className="col" onClick={() => getAudioData(AudioData[1]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[1]["id"]} className="drum-pad">
                            <span>{AudioData[1]["keyTrigger"]}</span>
                            <audio id={AudioData[1]["keyTrigger"]} className="clip" src={AudioData[1]["url"]} preload="preload" />
                        </div> 
                    </div> 
                    <div className="col" onClick={() => getAudioData(AudioData[2]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[2]["id"]} className="drum-pad">
                            <span>{AudioData[2]["keyTrigger"]}</span>
                            <audio id={AudioData[2]["keyTrigger"]} className="clip" src={AudioData[2]["url"]} preload="preload" />
                        </div> 
                    </div> 
                    <div className="col-5" onClick={() => handlePower()}>
                         <PowerButton power={power}/>
                    </div> 
                 </div> 
                 <div className="row">
                    <div className="col" onClick={() => getAudioData(AudioData[3]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[3]["id"]} className="drum-pad">
                            <span>{AudioData[3]["keyTrigger"]}</span>
                            <audio id={AudioData[3]["keyTrigger"]} className="clip" src={AudioData[3]["url"]} preload="preload" />
                        </div> 
                     </div> 
                     <div className="col" onClick={() => getAudioData(AudioData[4]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[4]["id"]} className="drum-pad">
                            <span>{AudioData[4]["keyTrigger"]}</span>
                            <audio id={AudioData[4]["keyTrigger"]} className="clip" src={AudioData[4]["url"]} preload="preload" />
                        </div> 
                    </div>
                    <div className="col" onClick={() => getAudioData(AudioData[5]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[5]["id"]} className="drum-pad">
                            <span>{AudioData[5]["keyTrigger"]}</span>
                            <audio id={AudioData[5]["keyTrigger"]} className="clip" src={AudioData[5]["url"]} preload="preload" />
                        </div> 
                    </div>
                    <div className="col-5">
                         <Display display ={display}/>
                    </div>
                </div>
                    <div className="row">
                    <div className="col" onClick={() => getAudioData(AudioData[6]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[6]["id"]} className="drum-pad">
                            <span>{AudioData[6]["keyTrigger"]}</span>
                            <audio id={AudioData[6]["keyTrigger"]} className="clip" src={AudioData[6]["url"]} preload="preload" />
                        </div> 
                     </div> 
                     <div className="col" onClick={() => getAudioData(AudioData[7]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[7]["id"]} className="drum-pad">
                            <span>{AudioData[7]["keyTrigger"]}</span>
                            <audio id={AudioData[7]["keyTrigger"]} className="clip" src={AudioData[7]["url"]} preload="preload" />
                        </div> 
                    </div>
                    <div className="col" onClick={() => getAudioData(AudioData[8]["id"]).then(() => playAudioClip())}>
                        <div id={AudioData[8]["id"]} className="drum-pad">
                            <span>{AudioData[8]["keyTrigger"]}</span>
                            <audio id={AudioData[8]["keyTrigger"]} className="clip" src={AudioData[8]["url"]} preload="preload" />
                        </div> 
                    </div>
                    <div className="col-5">
                        <VolumeControl volumeValue={volumeValue} handleVolumeChange={handleVolumeChange} />
                    </div> 
                 </div> 
             </div>
        </div>
     );
}
 
export default DrumMachineFCCTestsPass;