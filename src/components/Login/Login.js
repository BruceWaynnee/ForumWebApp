import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import './Login.css';
class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar option={2}/>
                <form className="container-fluid col-8 mx-auto form-style">
                    {/* username input */}
                    <div className="form-group">
                        <label for="userName">User Name</label>
                        <input type="text" className="form-control" id="userNameInput" required/>
                    </div>
                    {/* email input */}
                    <div class="form-group">
                        <label for="emailAddress">Email address</label>
                        <input type="email" className="form-control" id="emailAddressInput" required  aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    {/* password input */}
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="passwordInput" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
export default Login;