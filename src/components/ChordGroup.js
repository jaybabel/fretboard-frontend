// import { render } from '@testing-library/react';
// import React, { Component } from 'react';


function ChordGroup(props) {
    console.log('chord group chords: ', props)

    return (

        <div className="chordGroup">
            {props.chords.map((chordkey, index) => {
                return (
                    <li key={index}>
                        <img src={props.chords[index].imageurl} alt="I chord" className="chordImage"></img>
                    </li>
                )
            })
            }
        </div>
    );
}

export default ChordGroup;