import React from 'react';

function Playback() {
  let audio = new Audio("./test.mp3")

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}>Playback</button>
    </div >
  );
}

export default Playback;