const VolumeControl = ({ volumeValue, handleVolumeChange }) => {

    return ( 
        <div>
            <label className="label-title">VOLUME CONTROL</label>
            <div id="volume-control-container">
            <input type="range" id="volume" min="0" max="1" value={volumeValue} onChange={handleVolumeChange} step="0.01" />
            </div>
        </div>
     );
}
 
export default VolumeControl;