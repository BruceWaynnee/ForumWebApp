import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import { tsImportEqualsDeclaration } from '@babel/types';

class Singup extends React.Component{
    constructor(){
        super();
        this.state = {
            registerPassword: '',
            confirmPassword: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const { name, value } = event.target;
        this.setState({
            [name] : value,
        })
    }
    handleSubmit(){
        this.passValidation();
    }
    passValidation(){
        if( this.state.registerPassword !== null && this.state.confirmPassword !== null ){
            if(this.state.registerPassword === this.state.confirmPassword)
                alert("password match!");
            else
                alert("password don't match!");
        }
    }
    render(){
        return(
            <div>
                <Navbar option={1}/><br/>
                <h2>Forum Registration</h2>
            <form className="container-fluid col-8 mx-auto form-style" onSubmit={ this.handleSubmit }>
            {/* Username register */}
                    <div class="form-group mt-n3">
                        <label for="firstName">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firsNameInput" 
                            required
                        />
                    </div>
                    <div class="form-group mt-n3">
                        <label for="lastName">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastNameInput" 
                            required
                        />
                    </div>
            {/* email register */}
                    <div class="form-group mt-n3">
                        <label for="emailAddress">Email address</label>
                        <input type="email" className="form-control" 
                            id="emailAddressInput" 
                            required
                            aria-describedby="emailHelp" 
                        />
                        <small 
                            id="emailHelp" 
                            className="form-text text-muted">We'll never share your email with anyone else.
                        </small>
                    </div>
            {/* password register with authentication */}
                    <div class="form-group mt-n3">
                        <label for="password">Password</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            id="passwordInput"  
                            value={ this.state.registerPassword }
                            name="registerPassword"
                            onChange={ this.handleChange }
                            required
                        />
                    </div>
                    <div class="form-group mt-n3">
                        <label for="confirmPassword">Confirm Password</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            id="confirmPasswordInput" 
                            value={ this.state.confirmPassword }
                            name="confirmPassword"
                            placeholder="must be match register password"
                            onChange={ this.handleChange }
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <p>Your password is: { this.state.registerPassword }</p>
                <p>Your confirmpassword is: { this.state.confirmPassword }</p>
            </div>
        );
    }
}
export default Singup;