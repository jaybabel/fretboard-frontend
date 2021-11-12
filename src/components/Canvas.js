import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);

function Canvas(props) {
    render(); {
        return (
            <div className="scaleSection">
                <h3>C Major Scale</h3>
                <form className="pageScales">

                    <input type="submit" value="<"></input>
                    <div className="displayScale">
                         <img src="C_Major_scale.png" alt="G chord" className="chordImage"></img>
                    </div>
                    <input type="submit" value=">"></input>
                </form>
            </div>

            // <canvas height="300px" width="600" background="blue">
            // </canvas>
        );
    }
}

// ReactDOM.render(<App />, document.getElementById('root').getContext('2d'));

export default Canvas;
