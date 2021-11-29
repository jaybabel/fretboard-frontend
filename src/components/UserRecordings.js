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
      validatedUser: props.validatedUser,
      recordinglist: []
    };
  }

  componentDidMount = () => {
    console.log("user recordings validated user: ", this.state.validatedUser) 

    // this.state.validatedUser ?

    axios
      .get(`${BASE_URL}/user_recordings`)

      .then((response) => {
        this.setState({
          recordinglist: response.data,
        });
      })
    //  : alert ('To use recording list, please log in.')
  };

  handleRecordingChange = async (e) => {
    await this.setState({
      value: e.target.value,
    });
  };

  submitRecording = async (e) => {
      e.preventDefault();

    const data = this.state.value

      this.state.value ? 
      
      axios.post(`${BASE_URL}/user_recordings/getRecordingData`, {recordingname:data} )

       .then((response) => {
        this.setState({
          recordingData: response.data
       });
        {document.getElementById("recordingurl").value = this.state.recordingData.recordingurl}
        {document.getElementById("memo").value = this.state.recordingData.memo}
       })
       : 
       alert('Please make a selection')
    
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
              type="text"
            />
          </p>
          <p class="formfield">
            <label id="lblMemo" for="memo">
              Memo:{" "}
            </label>
            <textarea id="memo" name="txtMemo" rows="4" columns="60"></textarea>
          </p>
          <input className="btnMP3" type="submit" value="Get Info" />
        </form>
      </div>
    );
  }
}

export default UserRecordings;
