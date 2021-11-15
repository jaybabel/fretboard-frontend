//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';


function Scales(props) {
    console.log('scales.js ', props)
    // render(); {
    return (
        <div className="scaleSection">
            <h3>Scale</h3>
            <br></br><br></br>
            <div className="displayScale">
                <form className="pageScales">
                    <input type="submit" className="btnScale" value="<"></input>
                    <option selected value=""></option>
                    {props.scales.map((scalekey, index) => {
                        return (
                            <li>    
                                {props.scales[1].scalename}
                                <img src={props.scales[1].imageurl} alt="scale" ></img>
                            </li>
                        )
                     })
                    }
                    <input type="submit" className="btnScale"  value=">"></input>
                </form>
            </div>
        </div>
    );
}
// }

export default Scales;
