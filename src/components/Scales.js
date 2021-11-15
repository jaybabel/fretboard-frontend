import React, { Component } from 'react';
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
                    {/* <input type="submit" value="<"></input> */}
                    <option selected value="">scale</option>
                    {props.scales.map((scalekey, index) => {
                        return (
                            <li key={scalekey.id}
                                value={scalekey.scalename}>
                                {scalekey.scalename}
                                <img src={scalekey.imageurl}></img>
                            </li>
                        )
                    }
                    )}
                    <input type="submit" value=">"></input>
                </form>
            </div>
        </div>
    );
}
// }

export default Scales;
