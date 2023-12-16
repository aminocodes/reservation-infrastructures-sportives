import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios'
import background from '../../images/stade-1.jpg';
import Footer from '../../components/Footer'
import { Redirect } from 'react-router'

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {}
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            firstname: this.firstName,
            lastname: this.lastName,
            username: this.username,
            email: this.email,
            password: this.password
        };
        console.log(data)
        axios.post('http://localhost:1337/auth/local/register', data).then(
            (res) => {
                this.setState({
                    register: true
                })
                console.log(res)
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        );
    };


    render() {
        if (this.state.register) {
            return <Redirect to={'/login'} />
        }
        return (
            <div>
                <section className='section section__signup'>
                    <div className='login login__signup'>
                        <Form className='login__form has-padding' onSubmit={this.handleSubmit}>
                            <h3 className='login__heading'>Sign up</h3>

                            <div className="form-group">
                                <label className='login__label'>First Name</label>
                                <input type="text" className='form-control' onChange={(e) => this.firstName = e.target.value} />
                            </div>
                            <div className="form-group">
                                <label className='login__label'>Last Name</label>
                                <input type="text" className='form-control' onChange={(e) => this.lastName = e.target.value} />
                            </div>
                            <div className="form-group">
                                <label className='login__label'>username</label>
                                <input type="text" className='form-control' onChange={(e) => this.username = e.target.value} />
                            </div>

                            <div className="form-group">
                                <label className='login__label'>Email</label>
                                <input type="email" className='form-control' onChange={(e) => this.email = e.target.value} />
                            </div>

                            <div className="form-group form-1">
                                <label className='login__label'>Password</label>
                                <input type="password" className='form-control' onChange={(e) => this.password = e.target.value} />
                            </div>

                            <button className='btn btn-primary'>Sign up</button>
                        </Form>
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