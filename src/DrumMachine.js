import './index.scss'
import React, { useState, useEffect } from 'react';
import AudioData from './AudioData';
import AudioButton from './AudioButton';
import Display from './Display';

const DrumMachine = () => {

    const [display, setDisplay] = useState("hello");
    const [audioId, setAudioId] = useState(null);
    const [letter, setLetter] = useState(null);
    const [url, setUrl] = useState(null);
    const [keyCode, setKeyCode] = useState(null);
    const [index, setIndex] = useState(0);
    const [power, setPower] = useState(true);

    const getAudioData = (idAudio) => {
        for(let i = 0; i < AudioData.length; i++){
            let index = 0;
        if(idAudio === AudioData[i]["id"]) {
            index = AudioData.indexOf(AudioData[i]);
        }
    }
}

const playAudioClip = (index) => {
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
            <div id="drum-machine">
       <div id="inner-drum-machine-box">
            <AudioButton />
            <Display />
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