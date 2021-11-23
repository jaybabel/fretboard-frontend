# fretboard
SEI Project 4 - Circle of 5ths Chords and Scales

Backend README - https://github.com/jaybabel/fretboard-backend/blob/main/README.md

## Project 4 – Progressions and Scales (a.k.a. Jay’s Fretboard)

Description

This application displays six guitar chords based on the key chosen from the Circle of Fifths.  The user can choose open chords or bar chords and the application will display two to four scales that can be used with the chords chosen.  The application has a record function that allows users to save the recordings in MP3 format.

## ERD


![Project4-ERD](https://user-images.githubusercontent.com/8105789/141372697-2b7ef527-d6ae-4c50-98f7-486d3787dd95.png)





Note: Chords table will use a Boolean value = True if the chord diagram is a bar chord

## Wireframes

Main Page

![Project4_Wireframe_1](https://user-images.githubusercontent.com/8105789/141023630-021db5fd-a68f-440a-963e-2952e14f70b5.png)

Admin Page

![image](https://user-images.githubusercontent.com/8105789/141022241-86656f1e-7593-4eb6-b2b3-4a67d686d14c.png)


## Architecture


![ApplicationArchitecture](https://user-images.githubusercontent.com/8105789/142795717-14b09920-a319-4616-99e7-8bb4f78b2d19.png)



## User Stories

* I am a guitar player and I want to select a musical key so I can play chord progressions

* I am a guitar player and I want to record my chord progressions so I can play them back

* I am a guitar player and I want to create a user login

* I am a guitar player and I want to login so I can save my chord progressions

* I am a guitar player and I want to login so I can delete my chord progressions

* I am a guitar player and I want to see guitar scales so I can play leads with my chord progressions

* I am a site administrator and I want a user admin page so I can reset passwords

* I am a site administrator and I want an admin page so I can delete users



## MVP

* User login

* User-selected Key returns six chord diagrams for the key group.

* User can select open or bar chords.

* Displays one or more guitar scales appropriate for the selected key.

* Allows user to record, playback and save audio.


## Stretch Goals

* Guitar scales are pulled from www.tofret.com API based on selected chords.  Scale diagrams rendered dynamically using canvas.

* Setup Bcrypt for user passwords.

* Implement Oauth security for user logon.

*Refer to Project Kanban for current enhancements backlog.*


## New (untaught) Components

Audio recorder

The canvas HTML/React component


## Resources

Chord Diagrams - https://chordpic.com/

Scales Diagrams - https://www.guitarscale.org/all-scales.html


## Audio Recording

### react-mp3-audio-recording
After evaluating a couple of recording methods, I decided to use the method described on this webpage:

https://medium.com/front-end-weekly/recording-audio-in-mp3-using-reactjs-under-5-minutes-5e960defaf10

This method uses MP3 audio files which are smaller than wav files and better suited for my application.  In addition to record and playback, the sample code includes ability to download the file and adjust playback speed.  Aside from the file size, the wav code I considered was much less complete and would have been difficult to implement (see audio-react-recorder section below).

The recorder is created using the React mic-recorder-to-mp3 package.

npm install --save mic-recorder-to-mp3

I used the code from the following GitHub repo:

https://github.com/Matheswaaran/react-mp3-audio-recording/blob/master/src/App.js

This is the code in my Return that renders the MP3 recorder:

```
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
```

### Play-Pause-Stop and Loop MP3 code

The Play, Pause, and Stop buttons along with the Loop checkbox are independent of the MP3 recorder outlined above.  The code for playback of MP3 files was taken from:

https://www.cluemediator.com/how-to-play-an-mp3-file-in-reactjs

Other than a little styling, I used the code as provided by the website.  The code is pretty straight-forward, it shows how to use the Javascript Audio() constructor which utilizes the HTML audio element.  The methods used in the code can be found at:

https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

Additional references:

https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

https://www.w3schools.com/html/html5_audio.asp

### audio-react-recorder
First attempt was with audio-react-recorder.  Had some dependency issues.  Code provided did not fully reproduce the provided demo.

React Recorder - https://www.npmjs.com/package/audio-react-recorder
	Required:
		npm install --save prop-types
		npm install --save audio-react-recorder --legacy-peer-deps

https://github.com/doppelgunner/audio-react-recorder

