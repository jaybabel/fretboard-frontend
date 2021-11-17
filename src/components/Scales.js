import React, { useState } from 'react';


function Scales(props) {
    let scalesLength = '';
    scalesLength = props.scales.length
    let [count, setCount] = useState(0)

    console.log('scalesLength = ', scalesLength)

    function incrementCount() {
        (count === scalesLength - 1) ? setCount(count = 0) : setCount(count + 1)
    }

    function decrementCount() {
        (count === 0) ? setCount(count = scalesLength-1) : setCount(count - 1)
    }

    return (
        <div className="scaleSection">
            <div className="displayScale">
                <div className="btnDiv">
                    <button className="btnCounter" onClick={incrementCount}>^</button><br></br>
                    <button className="btnCounter" onClick={decrementCount}>v</button>
                </div>
                        <div className="oneScale">
                        {
                            props.scales[count] ?
                            <li>
                                <h4>{props.scales[count].scalename}</h4>
                                <img src={props.scales[count].imageurl} alt="scaleList"></img>
                            </li>
                            :
                            <div></div>                                
                        }
                        </div>
            </div>
        </div>
    );
}

export default Scales;
