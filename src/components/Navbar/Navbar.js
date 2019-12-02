import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from '../Searchbar/Searchbar';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /* options [0,1,2]: 
                -options = 0 => Both Log In and Sign Up button are available for click.
                -options = 1 => Show only Log In button for click.
                -options = 2 => Show only Sign Up button for click. 
            */
        }
        this.GenerateNav = this.GenerateNav.bind(this);
    };
    componentDidMount() {
        this.setState({ navbar: this.GenerateNav() })
    };
    GenerateNav() {
        //options [0,1,2]:
        if (this.props.option === 1) { //-options = 1 => Show only Log In button for click.
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active float-right">
                        <a className="nav-link" href="#">Log in <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            )
        } else if (this.props.option === 2) { //-options = 2 => Show only Sign Up button for click.
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item float-right">
                        <a className="nav-link" href="#">Sign up</a>
                    </li>
                </ul>
            )
        } else { //-options = 0 => Both Log In and Sign Up button are available for click.
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active float-right">
                        <a className="nav-link" href="#">Log in <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item float-right">
                        <a className="nav-link" href="#">Sign up</a>
                    </li>
                </ul>
            );
        }
    };
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <h2 className="navbar-brand" href="#">Navbar</h2>
                <Searchbar />
                {this.state.navbar}
            </div>
        );
    };
};
export default Navbar;