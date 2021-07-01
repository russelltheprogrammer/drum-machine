import './index.scss'
import React from 'react';
import passAudioData from './passAudioData'


const DrumMachine = () => {

    return ( 
        <div id="drum-machine">
        <div id="inner-drum-machine-box">
            <div className="row">
                <div className="col">
                    {/* Q */}
                    {passAudioData('crash')}
                </div>
                <div className="col">
                    {/* W */}
                {passAudioData('dumpster-bottle-smash')}
                </div>
                <div className="col">
                    {/* E */}
                {passAudioData('air-woosh-underwater')}
                </div>
                <div className="col-5">
                    TOP ROW OPEN SPACE
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* A */}
                {passAudioData('metal-bat-hits-baseball')}
                </div>
                <div className="col">
                    {/* S */}
                {passAudioData('wood-rattle')}
                </div>
                <div className="col">
                    {/* D */}
                {passAudioData('helicopter-by')}
                </div>
                <div id="display" className="col-5">
                    DISPLAY
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* Z */}
                    {passAudioData('boing')}
                </div>
                <div className="col">
                    {/* X */}
                    {passAudioData('emergency-siren-short-burst')}
                </div>
                <div className="col">
                    {/* C */}
                    {passAudioData('drill-gear')}
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