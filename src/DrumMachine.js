import './index.scss'
import React from 'react';
import playAudio from './playAudio';


const DrumMachine = () => {



    return ( 
        <div id="drum-machine">
        <div id="inner-drum-machine-box">
            <div className="row">
                <div className="col">
                    <div id="crash" className="drum-pad">
                        <button className="drum-button" onClick={playAudio}>
                            <span>Q</span>
                        </button>
                        <audio id="Q" className="clip" preload="preload">
                            <source src="https://actions.google.com/sounds/v1/impacts/crash.ogg"></source>
                        </audio>
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