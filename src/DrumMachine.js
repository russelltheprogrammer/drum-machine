import './index.scss'
import React, { useState, useEffect } from 'react';
import AudioData from './AudioData';
import Display from './Display';
import PowerButton from './PowerButton';
import VolumeControl from './VolumeControl';

// From a learning perspective --- My final notes on this project are I think it could have been more code efficient if the
// map function was used to generate the drum-pad buttons, the audio tags, and the letters. 
// This would have used a lot less lines of code if done correctly.
// Responsiveness could have been improved too but that is not the point of this project.


const DrumMachine = () => {

    const playABeat = "Play a beat!";
    const powerOffDisplay = "Power is off";
    const [display, setDisplay] = useState(playABeat);
    const [power, setPower] = useState(true);
    const [volumeValue, setVolumeValue ] = useState(0.5);

    const playAudioClip = (index) => {
        if(power) {
            setDisplay(AudioData[index]["id"]);
            const sound = document.getElementsByClassName("clip")[index];
            sound.currentTime = 0;
            sound.volume = volumeValue;
            sound.play();
        }
        else if (!power){
        setDisplay(powerOffDisplay)
        }
    };

    const click = (audioId) => {
        for(let i = 0; i < AudioData.length; i++) {
            let index = 0;
                if(audioId === AudioData[i]["id"]){
                    index = AudioData.indexOf(AudioData[i]);
                    playAudioClip(index);
                }
            }
        }
    
    const keyClick = (e) => {
            for(let i = 0; i < AudioData.length; i++) {
                let index = 0;
                    if(e.keyCode === AudioData[i]["keyCode"]){
                        index = AudioData.indexOf(AudioData[i]);
                        playAudioClip(index);
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
    });

    return ( 
        <div id="drum-machine">
            <div id="inner-drum-machine-box">
                 <div className="row">
                    <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[0]["id"]} onClick={() => click(AudioData[0]["id"])}>
                                <audio className="clip" id={AudioData[0]["keyTrigger"]} src={AudioData[0]["url"]}>{" "}</audio>
                                {AudioData[0]["keyTrigger"]}
                            </button>
                        </div>  
                    </div> 
                    <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[1]["id"]} onClick={() => click(AudioData[1]["id"])}>
                                <audio className="clip" id={AudioData[1]["keyTrigger"]} src={AudioData[1]["url"]}>{" "}</audio>
                                {AudioData[1]["keyTrigger"]}
                            </button>
                        </div>
                    </div> 
                    <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[2]["id"]} onClick={() => click(AudioData[2]["id"])}>
                                <audio className="clip" id={AudioData[2]["keyTrigger"]} src={AudioData[2]["url"]}>{" "}</audio>
                                {AudioData[2]["keyTrigger"]}
                            </button>
                        </div>
                    </div> 
                    <div className="col-5" onClick={() => handlePower()}>
                         <PowerButton power={power}/>
                    </div> 
                 </div> 
                 <div className="row">
                    <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[3]["id"]} onClick={() => click(AudioData[3]["id"])}>
                                <audio className="clip" id={AudioData[3]["keyTrigger"]} src={AudioData[3]["url"]}>{" "}</audio>
                                {AudioData[3]["keyTrigger"]}
                            </button>
                        </div>
                     </div>
                     <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[4]["id"]} onClick={() => click(AudioData[4]["id"])}>
                                <audio className="clip" id={AudioData[4]["keyTrigger"]} src={AudioData[4]["url"]}>{" "}</audio>
                                {AudioData[4]["keyTrigger"]}
                            </button>
                        </div> 
                    </div>
                    <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[5]["id"]} onClick={() => click(AudioData[5]["id"])}>
                                <audio className="clip" id={AudioData[5]["keyTrigger"]} src={AudioData[5]["url"]}>{" "}</audio>
                                {AudioData[5]["keyTrigger"]}
                            </button>
                        </div>
                    </div>
                    <div className="col-5">
                         <Display display ={display}/>
                    </div>
                </div>
                    <div className="row">
                    <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[6]["id"]} onClick={() => click(AudioData[6]["id"])}>
                                <audio className="clip" id={AudioData[6]["keyTrigger"]} src={AudioData[6]["url"]}>{" "}</audio>
                                {AudioData[6]["keyTrigger"]}
                            </button>
                        </div>
                     </div> 
                     <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[7]["id"]} onClick={() => click(AudioData[7]["id"])}>
                                <audio className="clip" id={AudioData[7]["keyTrigger"]} src={AudioData[7]["url"]}>{" "}</audio>
                                {AudioData[7]["keyTrigger"]}
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <button className="drum-pad" id={AudioData[8]["id"]} onClick={() => click(AudioData[8]["id"])}>
                                <audio className="clip" id={AudioData[8]["keyTrigger"]} src={AudioData[8]["url"]}>{" "}</audio>
                                {AudioData[8]["keyTrigger"]}
                            </button>
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
 
export default DrumMachine;