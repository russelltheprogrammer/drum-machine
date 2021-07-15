import './index.scss'
import React, { useState, useRef, useEffect } from 'react';
import AudioData from './AudioData';
import AudioButton from './AudioButton';
import Display from './Display';

const DrumMachine = () => {

    const [display, setDisplay] = useState("Play a beat!");
    const [audioId, setAudioId] = useState(AudioData[0]["id"]);
    const [letter, setLetter] = useState(AudioData[0]["keyTrigger"]);
    const [url, setUrl] = useState(AudioData[0]["url"]);
    const [index, setIndex] = useState(0);
    const [keyCode, setKeyCode] = useState(null);
    const [power, setPower] = useState(true);


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
        const sound = audioElement.current;
        sound.currentTime = 0;
        setTimeout(() => {
        sound.play()
        }, 150);
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
                    <div className="col" onClick={() => getAudioData('crash').then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("Q")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div> 
                    <div className="col" onClick={() => getAudioData('dumpster-bottle-smash').then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("W")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div> 
                    <div className="col" onClick={() => getAudioData('air-woosh-underwater').then(() => playAudioClip())}>
                         <AudioButton letter={defaultLetterCheck("E")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div> 
                    <div className="col-5">
                         POWER BUTTON
                    </div> 
                 </div> 
                 <div className="row">
                    <div className="col" onClick={() => getAudioData('metal-bat-hits-baseball').then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("A")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                     </div> 
                     <div className="col" onClick={() => getAudioData('wood-rattle').then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("S")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col" onClick={() => getAudioData('helicopter-by').then(() => playAudioClip())}>
                         <AudioButton letter={defaultLetterCheck("D")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col-5">
                         <Display display ={display}/>
                    </div>
                </div>
                    <div className="row">
                    <div className="col" onClick={() => getAudioData('boing').then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("Z")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                     </div> 
                     <div className="col" onClick={() => getAudioData('emergency-siren-short-burst').then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("X")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col" onClick={() => getAudioData('swoosh').then(() => playAudioClip())}>
                         <AudioButton letter={defaultLetterCheck("C")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                    </div>
                    <div className="col-5">
                         VOLUME CONTROL
                    </div> 
                 </div> 
             </div>
        </div>
     );
}
 
export default DrumMachine;


    // <div>
    // <div id={audioId} className="drum-pad" onClick={playAudioClip}>
    //     <span>{letter}</span>
    //     <audio id={letter} className="clip" src={url} preload="preload"></audio>
    // </div>
    // </div>

    // <div id="drum-machine">
    //     <div id="inner-drum-machine-box">
    //         <div className="row">
    //             <div className="col">
    //                 {/* Q */}
    //               <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div> 
    //             <div className="col">
    //                 {/* W */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div className="col">
    //                 {/* E */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div className="col-5">
    //                 TOP ROW OPEN SPACE
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col">
    //                 {/* A */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div className="col">
    //                 {/* S */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div className="col">
    //                 {/* D */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div id="display" className="col-5">
    //                 <div id="display-container">
    //                 {display}
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col">
    //                 {/* Z */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div className="col">
    //                 {/* X */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div className="col">
    //                 {/* C */}
    //                 <div id={audioId} className="drum-pad" onClick={playAudioClip(0), setDisplay(audioId)}>
    //                      <span>{letter}</span>
    //                      <audio id={letter} className="clip" src={url} preload="preload"></audio>
    //              </div> 
    //             </div>
    //             <div className="col-5">
    //             BOTTOM ROW OPEN SPACE
    //             </div>
    //         </div>
    //     </div>
    //    </div>