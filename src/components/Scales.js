import React, { Component } from 'react';
import axios from 'axios'

class Scales extends Component {
    constructor() {
        super();

        this.state = {
            scales: [],
            musicalKey: 'C',
            chordGroup: ['C', 'Dm', 'Em', 'F', 'G', 'Am'],
            musicalNotes: ''
        }
    }

    componentDidMount() {
        axios
            .get(`http://www.tofret.com/reverse-chord-finder.php?return-type=json&notes=${this.state.musicalKey}`, { 

        })
        .then((response) => {
            this.setState({scales: response.scales})
        })
    }

    updateScales() {
        axios
        .get(`http://www.tofret.com/reverse-chord-finder.php?return-type=json&notes=${this.state.musicalNotes}`, { 

        })
        .then((response) => {
            this.setState({scales: response.scales})
        })
    }
}


export default Scales;
