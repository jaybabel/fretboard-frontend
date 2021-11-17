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
        setCount(count + 1)
        {count = (scalesLength - 1) ? count = 0 : null }
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
                <form className="pageScales">
                    {/* <input type="submit" className="btnScale" value="^"></input> */}
                    <option selected value=""></option>
                    {props.scales.map((scalekey, index) => { 
                        return (
                            <li key={index}> 
                                <h4>{props.scales[count].scalename}</h4>
                                <img src={props.scales[count].imageurl} alt="scaleList"></img>
                            </li>
                         )
                       })
                    } 
                    {/* <input type="submit" className="btnScale"  value=">"></input> */}
                </form>
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
