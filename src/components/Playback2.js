import React, { useEffect, useState } from 'react';

// Code from https://www.cluemediator.com/how-to-play-an-mp3-file-in-reactjs
 
function Playback2() {
 
  // use Audio constructor to create HTMLAudioElement
  const audioTune = new Audio('./WishYouWereHere.mp3');
 
  // variable to play audio in loop
  const [playInLoop, setPlayInLoop] = useState(false);
 
  // load audio file on component load
  useEffect(() => {
    audioTune.load();
  }, [])
 
  // set the loop of audio tune
  useEffect(() => {
    audioTune.loop = playInLoop;
  }, [playInLoop])
 
  // play audio sound
  const playSound = () => {
    audioTune.play();
  }
 
  // pause audio sound
  const pauseSound = () => {
    audioTune.pause();
  }
 
  // stop audio sound
  const stopSound = () => {
    audioTune.pause();
    audioTune.currentTime = 0;
  }
 
  return (
    <div className="playback2">
      <input type="button" className="btnPlayback2" value="Play" onClick={playSound}></input>
      <input type="button" className="btnPlayback2" value="Pause" onClick={pauseSound}></input>
      <input type="button" className="btnPlayback2" value="Stop" onClick={stopSound}></input>
 
      <label id="lblLoop"><input id="chkLoop" type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label>
    </div>
  );
}
 
export default Playback2;