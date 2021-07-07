import React from "react";
import './index.scss';

const Display = ({ display }) => {
    
    return ( 
        <div id="display">
            <div id="display-container">
                {display}
            </div>
        </div>
     );
}
 
export default Display;