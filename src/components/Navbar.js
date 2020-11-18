import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';

export class Navbar extends Component {

state = {
    toggled: false
}

toggleHandler = () => {
    this.setState({ toggled: !this.state.toggled });
}
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />  
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.toggleHandler}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={ this.state.toggled ? "nav-links show-nav" : "nav-links" }>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
