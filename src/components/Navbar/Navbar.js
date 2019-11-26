import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className='d-block'>
                <h2 className='float-left m-3'>Forum</h2>
                <a className='float-right m-3 text-decoration-none text-black-50' href='login.com'>Log in </a>
                <a className='float-right m-3 text-decoration-none text-black-50' href='signup.com'>Sign up</a>
            </div>
        );
    }
}

export default Navbar;