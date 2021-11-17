import React, { useState } from 'react';
// import PropTypes from 'prop-types';

//import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';




function Scales(props) {
    let scalesLength = '';
    scalesLength = props.scales.length

    console.log('scalesLength = ', scalesLength)

    const initialCount = 0
    // export default function Counter({ initialCount }) {
    let [count, setCount] = useState(0)
    // }
    //let count = ''

    function incrementCount() {
        { (setCount(count) == scalesLength - 1) ? setCount(count = 0) : setCount(count + 1) }
        console.log(count)
    }

    function decrementCount() {
        setCount(count - 1)
        // {this.state.count < 0 ? count = 0 : null }
        console.log(count)
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
// }

// ensures counter value is a number
// Counter.propTypes = {
//     initialValue: PropTypes.number
// }

export default Scales;
