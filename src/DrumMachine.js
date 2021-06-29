import './index.scss'
import React from 'react';

const playAudio = (url) => {
    new Audio(url).play();
}


const DrumMachine = () => {
    return ( 
        <div id="drum-machine">
        <div id="inner-drum-machine-box">
            <div className="row">
                <div className="col">
                    <div id="audio-1" className="drum-pad">
                        <button onClick={playAudio()}>Q </button>
                        <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                        </div>
                </div>
                <div className="col">
                <div id="audio-2" className="drum-pad">W</div>
                </div>
                <div className="col">
                <div id="audio-3" className="drum-pad">E</div>
                </div>
                <div className="col-5">
                    TOP ROW OPEN SPACE
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div id="audio-4" className="drum-pad">A</div>
                </div>
                <div className="col">
                <div id="audio-5" className="drum-pad">S</div>
                </div>
                <div className="col">
                <div id="audio-6" className="drum-pad">D</div>
                </div>
                <div id="display" className="col-5">
                    DISPLAY
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div id="audio-7" className="drum-pad">Z</div>
                </div>
                <div className="col">
                <div id="audio-8" className="drum-pad">X</div>
                </div>
                <div className="col">
                <div id="audio-9" className="drum-pad">C</div>
                </div>
                <div className="col-5">
                BOTTOM ROW OPEN SPACE
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default DrumMachine;