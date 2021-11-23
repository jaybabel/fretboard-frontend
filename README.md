# fretboard
SEI Project 4 - Circle of 5ths Chords and Scales

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

* Implement Oauth security for user logon.

* Delete related records (i.e. user is deleted and associated recordings are deleted using cascade)

*Refer to Project Kanban for current enhancements backlog.*


## New (untaught) Components

Audio recorder

The canvas HTML/React component


## Resources

Chord Diagrams - https://chordpic.com/

Scales Diagrams - https://www.guitarscale.org/all-scales.html


## Audio Recording

### react-mp3-audio-recording
Sample code includes ability to download and adjust playback speed.

https://medium.com/front-end-weekly/recording-audio-in-mp3-using-reactjs-under-5-minutes-5e960defaf10

npm install --save mic-recorder-to-mp3

https://github.com/Matheswaaran/react-mp3-audio-recording/blob/master/src/App.js

### Play-Pause-Stop and Loop MP3 code

The code for playback of MP3 was taken from:

https://www.cluemediator.com/how-to-play-an-mp3-file-in-reactjs

Other than a little styling, I used the code as provided by the website.


### audio-react-recorder
First attempt was with audio-react-recorder.  Had some dependency issues.  Code provided didi not fully reproduce the provided demo.

React Recorder - https://www.npmjs.com/package/audio-react-recorder
	Required:
		npm install --save prop-types
		npm install --save audio-react-recorder --legacy-peer-deps

https://github.com/doppelgunner/audio-react-recorder

