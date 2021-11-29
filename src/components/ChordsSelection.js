import React, { Component } from "react";
import axios from "axios";
import Scales from "./Scales";
import ChordGroup from "./ChordGroup";
import Recorder from "./Recorder";

// add code to switch between local and Heroku
let BASE_URL = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:3005";
} else {
  BASE_URL = "https://jays-fretboard.herokuapp.com";
}

class ChordsSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validatedUser: props.validatedUser,
      keylist: [],
      chords: [],
      scales: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`${BASE_URL}/musicalkeys`)

      .then((response) => {
        this.setState({
          keylist: response.data,
        });
      });
  };

  handleKeyChange = async (e) => {
    await this.setState({
      value: e.target.value,
    });
  };

  submitKey = async (e) => {
    e.preventDefault();

    const [chordsResponse, scalesResponse] = await Promise.all([
      axios.get(
        `${BASE_URL}/chords/${this.state.value}/${e.target[1].checked}`
      ),
      axios.get(`${BASE_URL}/scales/${this.state.value}`),
    ]);

    this.setState({
      chords: chordsResponse.data,
      scales: scalesResponse.data,
    });
  };

  renderSwitch(keyChoice) {
    console.log("renderSwitch: ", keyChoice);
    switch (keyChoice) {
      case "C":
        document.getElementById("circle").src = "circleof5-C.png";
        break;
      case "G":
        document.getElementById("circle").src = "circleof5-G.png";
        break;
      case "D":
        document.getElementById("circle").src = "circleof5-D.png";
        break;
      case "A":
        document.getElementById("circle").src = "circleof5-A.png";
        break;
      case "E":
        document.getElementById("circle").src = "circleof5-E.png";
        break;
      case "B":
        document.getElementById("circle").src = "circleof5-B.png";
        break;
      case "Gb":
        document.getElementById("circle").src = "circleof5-Gb.png";
        break;
      case "Db":
        document.getElementById("circle").src = "circleof5-Db.png";
        break;
      case "Ab":
        document.getElementById("circle").src = "circleof5-Ab.png";
        break;
      case "Eb":
        document.getElementById("circle").src = "circleof5-Eb.png";
        break;
      case "Bb":
        document.getElementById("circle").src = "circleof5-Bb.png";
        break;
      case "F":
        document.getElementById("circle").src = "circleof5-F.png";
        break;
      default:
        <img src="circleof5.png" alt="Circle of 5ths"></img>;
    }
  }

  render() {
    return (
      <div className="selectKey">
        <div className="circleOf5ths">
          <img src="circleof5.png" alt="Circle of 5ths" id="circle"></img>
          <div className="selections">
            <h3>Keys and Chord Types</h3>
            <form onSubmit={this.submitKey}>
              <select
                className="optSelectKey"
                value={this.state.value}
                onChange={this.handleKeyChange}
              >
                <option selected value="">
                  Select Key
                </option>
                {this.state.keylist.map((mkey, index) => {
                  return (
                    <option key={mkey.id} value={mkey.keyname}>
                      {mkey.keyname}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <br></br>
              <input
                type="checkbox"
                className="chkIsBarChord"
                name="isBarChord"
              />
              <label className="chkBxLbl">Bar Chords</label>
              <br></br>
              <br></br>
              <br></br>
              <input className="btnChooseKey" type="submit" value="Submit" />
            </form>
            <br></br>
            <br></br>
          </div>

          <ChordGroup chords={this.state.chords} />
        </div>
        {this.renderSwitch(this.state.value)}
        <div className="divScales">
          <Scales scales={this.state.scales} />
          <div className="divRecorder">
            <Recorder validatedUser={this.state.validatedUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default ChordsSelection;
