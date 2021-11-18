import React, { Component } from 'react';
import axios from 'axios';
import Scales from './Scales';
import ChordGroup from './ChordGroup';

// add code to switch between local and Heroku
let BASE_URL = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://localhost:3005'
} else {
    BASE_URL = 'https://jays-fretboard.herokuapp.com'
}

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
            .get(`${BASE_URL}/musicalkeys`)

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
            axios.get(`${BASE_URL}/chords/${this.state.value}/${e.target[1].checked}`),
            axios.get(`${BASE_URL}/scales/${this.state.value}`)
        ]);

        this.setState({
            chords: chordsResponse.data,
            scales: scalesResponse.data
        })
    }

    render() {

        return (
            <div className="selectKey">
                <div className="circleOf5ths">
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
                            <br></br><br></br><br></br>
                            <input
                                type="checkbox"
                                className="chkIsBarChord"
                                name="isBarChord"
                            />
                            <label className="chkBxLbl">Bar Chords</label><br></br>
                            <br></br><br></br>
                            <input className="btnChooseKey" type="submit" value="Submit" />
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