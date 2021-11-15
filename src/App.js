import './App.css';
// import Canvas from './components/Canvas';
// import Scales from './components/Scales';
// import ChordGroup from './components/ChordGroup';
import ChordsSelection from './components/ChordsSelection';

function App() {
  return (
    <div className="App">
      <div className="upper">
        <h1>Fretboard</h1>
        <ChordsSelection />
        {/* <ChordGroup /> */}
      </div>
      {/* <Canvas /> */}
    </div>
  );
}

export default App;
