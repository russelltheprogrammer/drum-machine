import React from "react";
import './index.scss';

const PowerButton = ({ power }) => {
    
    return ( 
        <div>
            {power
            ? <div><label className="label-title">POWER</label><div id="power-button-on" className="power-button">ON</div></div>
            : <div><label className="label-title">POWER</label><div id="power-button-off" className="power-button">OFF</div></div>
        }
        </div>
     );
}
 
export default PowerButton;