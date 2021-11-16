import React, { Component } from 'react';
import axios from 'axios';
import Scales from './Scales';
import ChordGroup from './ChordGroup';


class ChordsSelection extends Component {
    constructor() {
        super();

        this.state = {
            keylist: [],
            chords: [],
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
        const [chordsResponse, scalesResponse] = await Promise.all([
            axios.get(`http://localhost:3005/chords/${this.state.value}/true`),
            axios.get(`http://localhost:3005/scales/${this.state.value}`)

        ]);

        this.setState({
            chords: chordsResponse.data,
            scales: scalesResponse.data
        })
    }


    render() {

        console.log('keylist ', this.state.keylist)
        console.log('chords ', this.state.chords)
        console.log('scales ', this.state.scales)
        // console.log('value ', this.state.value)
        // console.log('ibarcode ', this.state.barchord)

        return (
            <div className="selectKey">
                <div className="circleOf5ths">
                    {/* <img src="Circle_of_5ths.png" alt="Circle of 5ths"></img> */}
                    <img src="circleof5.png" alt="Circle of 5ths"></img>
                    <div className="selections">
                        <h3>Keys and Chord Types</h3>
                        <form onSubmit={this.submitKey}>
                            <select className="optSelectKey" value={this.state.value} onChange={this.handleKeyChange}>
                                <option selected value="">Select Key</option>
                                {this.state.keylist.map((mkey, index) => {
                                    return (
                                        <option key={mkey.id} value={mkey.keyname}>
                                            {mkey.keyname}
                                        </option>
                                    )
                                }
                                )}
                            </select>
                            <br></br><br></br>
                            <input type="radio" id="openChords" name="barchord" value="false"></input>
                            <label for="openChords" className="chordRadio">Open Chords</label>
                            <br></br><br></br>
                            <input type="radio" id="barChords" name="barchord" value="true"></input>
                            <label for="barChords" className="chordRadio">Bar Chords</label><br></br>
                            <br></br><br></br>
                            <input class="btnChooseKey" type="submit" value="Submit" />

                            
                        </form>
                        <br></br><br></br>
                    </div>
                    <ChordGroup chords={this.state.chords} />
                </div>
                <div className="divScales">
                    <Scales scales={this.state.scales} />
                </div>
            </div>
        );
    }
}

export default ChordsSelection;