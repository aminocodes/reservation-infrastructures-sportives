import React from 'react';
import { Button, Navbar, Form } from 'react-bootstrap'
import { Link } from 'react-dom'
import axios from 'axios'
import { Redirect } from 'react-router'
import background from '../../images/stade-1.jpg';
import Footer from '../../components/Footer'


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        if (!this.state) {
            this.state = {}
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            identifier: this.email,
            password: this.password
        }
        axios.post('/auth/local', data).then(
            (res) => {
                localStorage.setItem('token', res.data.jwt);
                this.setState({
                    ...this.state,
                    loggedIn: true
                })
                this.props.setUser(res.data.user)
                console.log(res)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        );
    }
    render() {
        if (this.state.loggedIn) {
            const infraId = localStorage.getItem('infraId')
            return <Redirect to={`/${infraId}`} />
        }

        return (
            <div>
                <section className='section'>
                    <div className='login'>
                        <form className='login__form has-padding' onSubmit={this.handleSubmit}>
                            <h3 className='login__heading'>Log In</h3>

                            <div className="form-group form-login">
                                <label className='login__label'>Email</label>
                                <input type="text" className='form-control' onChange={(e) => this.email = e.target.value} />
                            </div>

                            <div className="form-group form-login form-login__2">
                                <label className='login__label'>Password</label>
                                <input type="password" className='form-control' onChange={(e) => this.password = e.target.value} />
                            </div>

                            <button type='submit' className='btn btn-primary btn-lg'>Login</button>
                            <div className='login__account'>
                                <p>Don't have an account?</p>
                                <a href='/register'>Sign Up</a>
                            </div>
                        </form>
                        <div className='login__img'>
                            <img src={background} />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

