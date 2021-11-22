import React, { Component } from "react";
import axios from "axios";

// add code to switch between local and Heroku
let BASE_URL = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:3005";
} else {
  BASE_URL = "https://jays-fretboard.herokuapp.com";
}

class UserRecordings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordingData: [],
      recordinglist: [],
      recordingurl: [],
      memo: []
    };
  }

  componentDidMount = () => {
    axios
      .get(`${BASE_URL}/user_recordings`)

      .then((response) => {
        this.setState({
          recordinglist: response.data,
        });
      });
  };

  handleRecordingChange = async (e) => {
    await this.setState({
      value: e.target.value,
    });
  };

  submitRecording = async (e) => {
      e.preventDefault();

      const data = this.state.value

    axios.post(`${BASE_URL}/user_recordings/getRecordingData`, {recordingname:data} )

    // const [recordingNameResponse] = await Promise.all([
    //   axios.get(`${BASE_URL}/user_recordings/getRecordingData/:${this.state.value}`)
    // ]);
    // this.setState({ recordingData: recordingNameResponse });

      // .then((response) => {
      //   this.setState({
      //     recordinglist: response.data
      //   });
      //  });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitRecording}>
          <select
            id="optSelectMP3"
            className="optSelectRecording"
            value={this.state.value} onChange={this.handleRecordingChange}
          >
            <option selected value="">
              Select Recording Name
            </option>
            {this.state.recordinglist.map((recording, index) => {
              return (
                <option key={recording.id} value={recording.recordingname}>
                  {recording.recordingname}
                </option>
              );
            })}
          </select>
          <br></br>
          <p class="formfield">
            <label for="recordingurl">MP3 Location: </label>
            <input
              id="recordingurl"
              name="recordingurl"
              // onChange={props.handleChange}
              type="text"
            />
          </p>
          <p class="formfield">
            <label id="lblMemo" for="memo">
              Memo:{" "}
            </label>
            <textarea id="memo" name="" rows="4" columns="60"></textarea>
          </p>
          <input className="btnMP3" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UserRecordings;
