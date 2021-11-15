import React, { Component } from 'react';
import axios from 'axios';


// const openChords = ["C-Major_open.png", "F-Major_open.png", "G-Major_open.png", "D-Minor_open.png", "A-Minor_open.png", "E-Minor_open.png"]
// const barChords = ["CMajor_bar.png", "FMajor_bar.png", "GMajor_bar.png", "Dm_bar.png", "Am_bar.png", "Em_bar.png"]
// const chordType = []

class ChordsSelection extends Component {
    constructor() {
        super();

        this.state = {
            keylist: [],
            scales: []
        }
    }

    componentDidMount = () => {
        axios
            .get('http://localhost:3005/musicalkeys')
    
        .then((response) => {
            this.setState({ 
                keylist: response.data 
            })
        })
    }

    handleKeyChange = async (e) => {
        await this.setState({
            value: e.target.value
        });      
    }

    submitKey = async (e) => {
        e.preventDefault();
        axios
            .get(`http://localhost:3005/scales/${this.state.value}`, {})

            .then((response) => {
                this.setState({ 
                    scales: response.data 
                })
            })            
        }


    render() {

        console.log('keylist ', this.state.keylist)
        console.log('scales ', this.state.scales)
        
        return (
        <div className="selectKey">
            <div className="circleOf5ths">
                    <img src="Circle_of_5ths.png" alt="Circle of 5ths"></img>
                <div className="selections">
                    <h3>Select Key</h3>
                    {/* <select name="musicalKey" id="keyDropdown"></select> */}

                    <form onSubmit={this.submitKey}>
                        <select value={this.state.value} onChange={this.handleKeyChange}>
                            <option selected value="">Select Key</option>
                            {this.state.keylist.map((mkey, index) => {
                                return (
                                    <option key={mkey.id} 
                                    value={mkey.keyname}>
                                    {mkey.keyname}
                                    </option>
                                )}
                            )}
                        </select>
                        <input class="btnChooseKey" type="submit" value="Submit" />
                    </form>
                    <br></br><br></br>

                    <form target="result" method="get">
                        <input type="radio" id="openChords" name="chord_type" value="openChords"></input>
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