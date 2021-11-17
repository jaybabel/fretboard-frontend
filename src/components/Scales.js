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
    let [count, setCount] = useState(initialCount)
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
                <button onClick={incrementCount}>^</button><br></br>
                <button onClick={decrementCount}>v</button>
                {props.scales.map((scalekey, index) => {
                    return (
                        <div className="oneScale">
                            <li key={index}>
                                <h4>{props.scales[index].scalename}</h4>
                                <img src={props.scales[index].imageurl} alt="scaleList"></img>
                            </li>
                        </div>
                    )
                })
                }
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
