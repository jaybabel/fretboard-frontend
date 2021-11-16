//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
const scaleId = 1

function Scales(props) {
    console.log('scales.js ', props)
    const scalesList = props.scales.map((scale) => scale);
    console.log('scale list: ', scalesList) 
    // render(); {
    return (
        <div className="scaleSection">
            <div className="displayScale">
                <form className="pageScales">
                    <input type="submit" className="btnScale" value="<"></input>
                    <option selected value=""></option>
                    {props.scales.map((scalekey, index) => {
                        return (
                            <li key={index}>    
                                {props.scales[scaleId].scalename}
                                <img src={props.scales[scaleId].imageurl} alt="scale" ></img>
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
