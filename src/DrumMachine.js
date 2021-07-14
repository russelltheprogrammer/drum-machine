import './index.scss'
import React, { useState, useRef, useEffect } from 'react';
import AudioData from './AudioData';
import AudioButton from './AudioButton';
import Display from './Display';

const DrumMachine = () => {

    const [display, setDisplay] = useState("Play a beat!");
    const [audioId, setAudioId] = useState(null);
    const [letter, setLetter] = useState(null);
    const [url, setUrl] = useState(null);
    const [index, setIndex] = useState(0)
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
        // const sound = document.getElementsByClassName("clip")[index];
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

    //extra div for the "drum-pad" class is unnecessary but to pass the specific tests for the FCC project it was needed

    return ( 
        <div id="drum-machine">
            <div id="inner-drum-machine-box">
                 <div className="row">
                    <div className="col">
                        <div classNames="drum-pad" onClick={() => getAudioData('crash').then(() => playAudioClip())}>
                        <AudioButton letter={defaultLetterCheck("Q")} props={passPropsToAudioButton(audioId, url)} audioElement={audioElement} />
                        </div>
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

//  <div>
//     <PlayAudio audioId={AudioData[index]["id"]} letter={AudioData[index]["keyTrigger"]} url={AudioData[index]["url"]} 
//     index={index} keyCode={AudioData[index]["keyCode"]} />
//     </div> 

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