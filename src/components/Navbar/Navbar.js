import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from '../Searchbar/Searchbar';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <h2 className="navbar-brand" href="#">Navbar</h2>
                <Searchbar />
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active float-right">
                        <a className="nav-link" href="#">Log in <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item float-right">
                        <a className="nav-link" href="#">Sign up</a>
                    </li>
                </ul>
            </div>
                );
            }
        }
        
export default Navbar;