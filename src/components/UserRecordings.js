import React, { Component } from "react";
import axios from "axios";
import Playback2 from "./Playback2";
// import { render } from "@testing-library/react";
// import { isCompositeComponent } from "react-dom/test-utils";

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
      recordinglist: [],
    };
  }

  componentDidMount = () => {

    axios
      .get(`${BASE_URL}/user_recordings/${this.state.validatedUser}`)
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

    const data = this.state.value;
    if (e.nativeEvent.submitter.defaultValue === "Get Info") {
      this.state.value
        ? axios
            .post(`${BASE_URL}/user_recordings/getRecordingData`, {
              recordingname: data,
            })

            .then((response) => {
              this.setState({
                recordingData: response.data,
              });
              {
                document.getElementById("recordingurl").value =
                  this.state.recordingData.recordingurl;
              }
              {
                document.getElementById("memo").value =
                  this.state.recordingData.memo;
              }
            })
        : alert("Please make a selection");
    } else if (e.nativeEvent.submitter.defaultValue === "Update") {
        alert("UPDATE button pushed");
    } else if (e.nativeEvent.submitter.defaultValue === "New") {
        // alert("NEW button pushed");
        document.getElementById("optSelectMP3").outerHTML = '<input id="optSelectMP3" type="text"/>';
        document.getElementById("recordingurl").value = '';
        document.getElementById("memo").value = '';
    } else if (e.nativeEvent.submitter.defaultValue === "Save") {
        alert("New record saved.");

// console.log('axios call ', this.state.validatedUser);
// post & get are receiving 404 errors - works with Postman
      // axios.post(`${BASE_URL}/user/userId/${this.state.validatedUser}`)
      //     .then((response) => { 
      //       console.log('response data ', response.data);
      //      this.setState({ userId: response.data });
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   });

         console.log('User ID: ', this.state.userId);

        const data = {
          username: this.state.validatedUser,
          recordingname: document.getElementById("optSelectMP3").value,
          recordingurl: document.getElementById("recordingurl").value,
          memo: document.getElementById("memo").value
        }
        console.log('SAVE data - ', data);

        axios.post(`${BASE_URL}/user_recordings/addRecording/`, data);

       // this.componentDidMount();
        document.getElementById("optSelectMP3").outerHTML = '<select id="optSelectMP3" className="optSelectRecording" value={this.state.value} onChange={this.handleRecordingChange} />';
        document.getElementById("optSelectMP3").innerHTML = '<option selected value=""> Select Recording Name </option>';
        // ${this.state.recordinglist.map((recording, index) => { return (<option key={recording.id} value={recording.recordingname}> {recording.recordingname} </option>);})}`;
        document.getElementById("recordingurl").value = '';
        document.getElementById("memo").value = '';           
    } else if (e.nativeEvent.submitter.defaultValue === "Delete") {
      if (
        window.confirm("Are you sure you want to DELETE this record?") === true
      ) {
        alert("Record deleted");
      } else {
        alert("Delete cancelled");
      }
    } else {
      alert("different button pushed");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitRecording}>
          <label id="lblSelectMP3" for="optSelectMP3">MP3 Name: </label>
          <select
            id="optSelectMP3"
            className="optSelectRecording"
            value={this.state.value}
            onChange={this.handleRecordingChange}
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
            <input id="recordingurl" name="recordingurl" type="text" />
          </p>
          <p class="formfield">
            <label id="lblMemo" for="memo">
              Memo:{" "}
            </label>
            <textarea id="memo" name="txtMemo" rows="4" columns="60"></textarea>
          </p>
          <input className="btnMP3" type="submit" value="Get Info" />
          <input className="btnMP3" type="submit" value="Update" />
          <input className="btnMP3" type="submit" value="New" />
          <input className="btnMP3" type="submit" value="Save" />
          <input className="btnMP3" type="submit" value="Delete" />
        </form>
        <Playback2 />
      </div>
    );
  }
}

export default UserRecordings;
