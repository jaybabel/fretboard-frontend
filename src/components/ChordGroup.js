// import { render } from '@testing-library/react';
// import React, { Component } from 'react';


function ChordGroup(props) {
    console.log('chord group chords: ', props)
    // render(); {

        return (
       
                <div className="chordGroup">
        {/* {props.chords.map((chordkey, index) => {                      */}
                    <form className="chordBox">
                        <img src={props.chords[0].imageurl} alt="I chord" className="chordImage"></img>
                        <input type="checkbox" id="I_chord" className="chordCheckbox" name="I_chord"></input>
                        <label for="I_chord">I</label>
                    </form>
                    <form className="chordBox">
                        <img src={props.chords[1].imageurl} alt="IV chord" className="chordImage"></img>
                        <input type="checkbox" id="IV_chord" className="chordCheckbox" name="IV_chord"></input>
                        <label for="IV_chord">IV</label>
                    </form>
                    <form className="chordBox">
                        <img src={props.chords[2].imageurl} alt="V chord" className="chordImage"></img>
                        <input type="checkbox" id="V_chord" className="chordCheckbox" name="V_chord"></input>
                        <label for="V_chord">V</label>
                    </form>
                    <form className="chordBox">
                        <img src={props.chords[3].imageurl} alt="ii chord" className="chordImage"></img>
                        <input type="checkbox" id="ii_chord" className="chordCheckbox" name="ii_chord"></input>
                        <label for="ii_chord">ii</label>
                    </form>
                    <form className="chordBox">
                        <img src={props.chords[4].imageurl} alt="vi chord" className="chordImage"></img>
                        <input type="checkbox" id="vi_chord" className="chordCheckbox" name="vi_chord"></input>
                        <label for="vi_chord">vi</label>
                    </form>
                    <form className="chordBox">
                        <img src={props.chords[5].imageurl} alt="iii chord" className="chordImage"></img>
                        <input type="checkbox" id="iii_chord" className="chordCheckbox" name="iii_chord"></input>
                        <label for="iii_chord">iii</label>
                    </form>
        {/* })}                     */}
                </div>

        );
    }
// }
export default ChordGroup;