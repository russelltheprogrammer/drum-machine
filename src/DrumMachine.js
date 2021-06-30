import './index.scss'
import React from 'react';
import PlayAudio from './PlayAudio';
import AudioData from './AudioData';



const DrumMachine = () => {

  

const passAudioData = (index) => {
return (
    <PlayAudio audioId={AudioData[index]["id"]} letter={AudioData[index]["keyTrigger"]} url={AudioData[index]["url"]} index={index} />
)
}

    return ( 
        <div id="drum-machine">
        <div id="inner-drum-machine-box">
            <div className="row">
                <div className="col">
                    {/* Q */}
                    {passAudioData(0)} 
                </div>
                <div className="col">
                    {/* W */}
                {passAudioData(1)}
                </div>
                <div className="col">
                    {/* E */}
                {passAudioData(2)}
                </div>
                <div className="col-5">
                    TOP ROW OPEN SPACE
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* A */}
                {passAudioData(3)}
                </div>
                <div className="col">
                    {/* S */}
                {passAudioData(4)}
                </div>
                <div className="col">
                    {/* D */}
                {passAudioData(5)}
                </div>
                <div id="display" className="col-5">
                    DISPLAY
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/* Z */}
                    {passAudioData(6)}
                </div>
                <div className="col">
                    {/* X */}
                    {passAudioData(7)}
                </div>
                <div className="col">
                    {/* C */}
                    {passAudioData(8)}
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