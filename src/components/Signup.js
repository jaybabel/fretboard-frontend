import React from 'react';

function Signup(props) {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.handleSignup}>
            <h1>Signup Form</h1>
            <input type="text" name="name" placeholder="Your name" onChange={props.handleChange}/><br></br><br></br>
            <input type="text" name="username" placeholder="Enter a login name" onChange={props.handleChange}/><br></br><br></br>
            <input type="text" name="password" placeholder="password" onChange={props.handleChange}/><br></br><br></br>
            <input type="text" name="confirmPwd" placeholder="confirmPwd" onChange={props.handleChange}/><br></br><br></br>
            <input type="submit" value="Submit" />
        </form>
        <p>
            {(props.validated) ? 'success' : 'Please setup an account'}
        </p>     
        </div>
    )
}

export default Signup;