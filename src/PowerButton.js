import React from "react";
import './index.scss';

const PowerButton = ({ power }) => {
    
    return ( 
        <div>
            {power
            ? <div id="power-button-on" className="power-button">ON</div>
            : <div id="power-button-off" className="power-button">OFF</div>
        }
        </div>
     );
}
 
export default PowerButton;