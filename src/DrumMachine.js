import './index.scss'
import React, { useState} from 'react';

const DrumMachine = () => {
    return ( 
        <div id="drum-machine">
        <div id="inner-drum-machine-box">
            <div className="row">
                <div id="Q" className="col">
                    Q
                </div>
                <div id="W" className="col">
                    W
                </div>
                <div id="E" className="col">
                    E
                </div>
                <div className="col-5">
                    TOP ROW OPEN SPACE
                </div>
            </div>
            <div className="row">
                <div id="A" className="col">
                    A
                </div>
                <div id="S" className="col">
                    S
                </div>
                <div id="D" className="col">
                    D
                </div>
                <div id="display" className="col-5">
                    DISPLAY
                </div>
            </div>
            <div className="row">
                <div id="Z" className="col">
                    Z
                </div>
                <div id="X" className="col">
                    X
                </div>
                <div id="C" className="col">
                    C
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