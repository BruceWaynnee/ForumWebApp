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
                    <div class="form-group">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="text" class="form-control" id="userNameInput" required/>
                    </div>
                    {/* email input */}
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" required  aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    {/* password input */}
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
export default Login;