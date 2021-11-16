import './App.css';
// import Canvas from './components/Canvas';
// import Scales from './components/Scales';
// import ChordGroup from './components/ChordGroup';
import ChordsSelection from './components/ChordsSelection';

function App() {
  return (
    <div className="App">
              <h1>Jay's Fretboard</h1>
      <div className="upper">

        <ChordsSelection />
        {/* <ChordGroup /> */}
      </div>
      {/* <Canvas /> */}
    </div>
  );
}

export default App;
