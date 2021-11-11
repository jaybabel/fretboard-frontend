import { render } from '@testing-library/react';
import React, { Component } from 'react';

const openChords = ["C-Major_open.png", "F-Major_open.png", "G-Major_open.png", "D-Minor_open.png", "A-Minor_open.png", "E-Minor_open.png"]
const barChords = ["CMajor_bar.png", "FMajor_bar.png", "GMajor_bar.png", "Dm_bar.png", "Am_bar.png", "Em_bar.png"]
const chordType = []

function ChordGroup(props) {
    render(); {
        return (

                <div className="chordGroup">
                    <form className="chordBox">
                        <img src={openChords[0]} alt="C chord" className="chordImage"></img>
                        <input type="checkbox" id="I_chord" className="chordCheckbox" name="I_chord"></input>
                        <label for="I_chord">I</label>
                    </form>
                    <form className="chordBox">
                        <img src={openChords[1]} alt="F chord" className="chordImage"></img>
                        <input type="checkbox" id="IV_chord" className="chordCheckbox" name="IV_chord"></input>
                        <label for="IV_chord">IV</label>
                    </form>
                    <form className="chordBox">
                        <img src={openChords[2]} alt="G chord" className="chordImage"></img>
                        <input type="checkbox" id="V_chord" className="chordCheckbox" name="V_chord"></input>
                        <label for="V_chord">V</label>
                    </form>
                    <form className="chordBox">
                        <img src={openChords[3]} alt="Dm chord" className="chordImage"></img>
                        <input type="checkbox" id="ii_chord" className="chordCheckbox" name="ii_chord"></input>
                        <label for="ii_chord">ii</label>
                    </form>
                    <form className="chordBox">
                        <img src={openChords[4]} alt="Am chord" className="chordImage"></img>
                        <input type="checkbox" id="vi_chord" className="chordCheckbox" name="vi_chord"></input>
                        <label for="vi_chord">vi</label>
                    </form>
                    <form className="chordBox">
                        <img src={openChords[5]} alt="Em chord" className="chordImage"></img>
                        <input type="checkbox" id="iii_chord" className="chordCheckbox" name="iii_chord"></input>
                        <label for="iii_chord">iii</label>
                    </form>
                </div>
        );
    }
}
export default ChordGroup;