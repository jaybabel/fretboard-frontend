import React from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import Playback from './Playback';


const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Recorder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted - MP3 componentDidMount');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied - MP3 componentDidMount');
        this.setState({ isBlocked: true })
      },
    );
  }

  submitKey = async (e) => {
    e.preventDefault();

  }

render() {
  return (
    <div className="recordingCenter">
      <form onSubmit={this.submitMP3Name}>
        <select id="optSelectMP3" className="optSelectRecording" value={this.state.value}>
          <option selected value="">
            Select Recording Name
          </option>
        </select><br></br>
        <p class="formfield">
        <label for="recordingurl">MP3 Location: </label>
        <input id="recordingurl" name="recordingurl"
            // onChange={props.handleChange}
            type="text"
          /></p>
          <p class="formfield">
          <label id="lblMemo" for="memo">Memo: </label>
          <textarea id="memo" name="" rows="4" columns="60"></textarea></p>
          <input className="btnMP3" type="submit" value="Submit" />
      </form>
      <br></br>
      <div className="MP3_div">
        <audio src={this.state.blobURL} controls="controls" />
        <header className="MP3_header">
          <button
            className="btnMP3"
            onClick={this.start}
            disabled={this.state.isRecording}
          >
            Record
          </button>
          <button
            className="btnMP3"
            onClick={this.stop}
            disabled={!this.state.isRecording}
          >
            Stop
          </button>
        </header>
      </div>
      <Playback />
    </div>
  );
}
}

export default Recorder;
