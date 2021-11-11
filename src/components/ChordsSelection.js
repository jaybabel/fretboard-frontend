import { render } from '@testing-library/react';
import React, { Component } from 'react';

const openChords = ["C-Major_open.png", "F-Major_open.png", "G-Major_open.png", "D-Minor_open.png", "A-Minor_open.png", "E-Minor_open.png"]
const barChords = ["CMajor_bar.png", "FMajor_bar.png", "GMajor_bar.png", "Dm_bar.png", "Am_bar.png", "Em_bar.png"]
const chordType = []

function ChordsSelection(props) {
    render(); {
        return (
        <div className="selectKey">
            <div className="circleOf5ths">
                    <img src="Circle_of_5ths.png" alt="Circle of 5ths"></img>
                <div className="selections">
                    <h3>Select Key</h3>
                    <select name="musicalKey" id="keyDropdown">
                        <option value="C">C</option>
                        <option value="G">G</option>
                        <option value="D">D</option>
                        <option value="A">A</option>
                        <option value="E">E</option>
                        <option value="B">B</option>
                        <option value="F#">F#</option>
                        <option value="Db">Db</option>
                        <option value="Ab">Ab</option>
                        <option value="Eb">Eb</option>
                        <option value="Bb">Bb</option>
                        <option value="F">F</option>
                    </select>
                    <br></br><br></br>

                    <form target="result" method="get">
                        <input type="radio" id="openChords" name="chord_type" value="openChords" checked></input>
                        <label for="openChords" className="chordRadio">Open Chords</label>
                        <br></br><br></br>
                        <input type="radio" id="barChords" name="chord_type" value="barChords"></input>
                        <label for="barChords" className="chordRadio">Bar Chords</label><br></br>
                        <br></br><br></br>
                        <input type="submit" value="Chord Type"></input>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default ChordsSelection;