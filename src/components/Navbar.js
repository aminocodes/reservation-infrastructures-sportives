import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'
import logo from '../images/logo.png';
import '../styles/main.scss';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null)
    }
    render() {
        let buttons;
        if (this.props.user) {
            buttons = (
                <li>
                    <NavLink to='/' onClick={this.handleLogout}>Logout</NavLink>
                </li>
            )
        } else {
            buttons = (
                <li>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </li>
            )
        }
        return (
            <header>
                <div className="logo">
                    {<img src={logo} />}
                </div>
                <nav className="navbar">
                    <NavLink to="/" className="a">Home</NavLink>
                    <NavLink to="/infrastructures" className="a">Infrastructures</NavLink>
                    <Link to="contact" className="a contact" spy={true} smooth={true}>Contact us</Link>
                    <NavLink to='/register' className="button button__booknow">Sign up</NavLink>
                </nav>
            </header>
        )
    }
}