import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Infrastructure from './pages/Infrastructure';
import Reservation from './pages/Reservation';
import ContactUs from './components/ContactUs';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import Football from './components/Football';
import Tennis from './components/Tennis';
import Piscines from './components/Piscines';
import NavBar from './components/NavBar';
import AdminPage from './pages/auth/AdminPage';
import TestAdmin from './pages/auth/TestAdmin'
import './styles/main.scss';
import axios from 'axios'
import AboutUs from './pages/AboutUs';
import InfrasSection from './components/InfrasSection';

axios.defaults.baseURL = 'http://localhost:1337';
//axios.defaults.headers.common['Authorization'] = `Bearer ${}`;



class Router extends React.Component {
    constructor(props) {
        super(props)
        if (!this.state) {
            this.state = {}
        }
    }
    componentDidMount() {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    {location.pathname !== '/admin' && <NavBar />}
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/infrastructures' component={Infrastructure} />
                        <Route path='/contact' component={ContactUs} />
                        <Route path='/about' component={AboutUs} />
                        <Route exact path='/login' component={() => <LoginPage infra={this.state.infra} setUser={this.setUser} />} />
                        <Route path='/register' component={RegisterPage} />
                        <Route exact path='/admin' component={AdminPage} />
                        <Route path='/testadmin' component={TestAdmin} />
                        <Route exact path='/foot' component={Infrastructure} />
                        <Route exact path='/tennis' component={Infrastructure} />
                        <Route exact path='/piscines' component={Infrastructure} />
                        <Route path="/:id" component={Reservation} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

reactDOM.render(<Router />, document.getElementById('root'))





