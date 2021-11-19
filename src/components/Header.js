import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login';

function Header() {

    return (
        <div>
            <div className="headerDiv">
                <Link to="/login">Login</Link>
                <h1>Jay's Fretboard</h1>
            </div>
        </div>
    )
}

export default Header;
