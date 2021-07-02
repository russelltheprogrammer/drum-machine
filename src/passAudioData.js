import './index.scss'
import React from 'react';
import PlayAudio from './PlayAudio';
import AudioData from './AudioData';


const passAudioData = (idAudio) => {
    for(let i = 0; i < AudioData.length; i++){
        let index = 0;
    if(idAudio === AudioData[i]["id"]) {
        index = AudioData.indexOf(AudioData[i]);

return (
    <div>
    <PlayAudio audioId={AudioData[index]["id"]} letter={AudioData[index]["keyTrigger"]} url={AudioData[index]["url"]} 
    index={index} keyCode={AudioData[index]["keyCode"]} />
    </div>
)
    }
    }
}
    
export default passAudioData;