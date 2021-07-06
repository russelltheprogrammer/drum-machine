import React from "react";
import './index.scss';

const Display = ({ display }) => {
    
    return ( 
        <div id="display" className="col-5">
            <div id="display-container">
                {display}
            </div>
        </div>
     );
}
 
export default Display;