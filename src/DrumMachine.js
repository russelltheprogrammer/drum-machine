import './index.scss'
import React, { useState} from 'react';
import AudioData from './AudioData';

const DrumMachine = () => {
    return ( 
        <div id="drum-machine">
        <div id="inner-drum-machine-box">
            <div className="row">
                <div className="col">
                    <button id="audio-1" className="drum-pad">Q</button>
                </div>
                <div className="col">
                <button id="audio-2" className="drum-pad">W</button>
                </div>
                <div className="col">
                <button id="audio-3" className="drum-pad">E</button>
                </div>
                <div className="col-5">
                    TOP ROW OPEN SPACE
                </div>
            </div>
            <div className="row">
                <div className="col">
                <button id="audio-4" className="drum-pad">A</button>
                </div>
                <div className="col">
                <button id="audio-5" className="drum-pad">S</button>
                </div>
                <div className="col">
                <button id="audio-6" className="drum-pad">D</button>
                </div>
                <div id="display" className="col-5">
                    DISPLAY
                </div>
            </div>
            <div className="row">
                <div className="col">
                <button id="audio-7" className="drum-pad">Z</button>
                </div>
                <div className="col">
                <button id="audio-8" className="drum-pad">X</button>
                </div>
                <div className="col">
                <button id="audio-9" className="drum-pad">C</button>
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