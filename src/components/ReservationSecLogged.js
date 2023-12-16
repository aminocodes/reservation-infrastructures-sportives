import React from 'react'
import icon from '../images/calendar.svg';
import Button from './Button';
import axios from 'axios'
export default class ReservationSecLogged extends React.Component {
    constructor(prop) {
        super(prop)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {}
    }
    handleDateChange = (e) => {
        this.setState({ date: e.target.value });
    }
    handleHeureChange = (e) => {
        this.setState({ heure: e.target.value + ':00.000' });
    }
    handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        let userId = 0;
        axios.get('/users/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(
            res => {
                userId = res.data.id
                console.log(userId)
                const data = {
                    date: this.state.date,
                    heure: this.state.heure,
                    infra_id: this.props.infra.id,
                    user_id: userId
                };
                axios.post('http://localhost:1337/reservations', data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(
                    (res) => {
                        console.log(res.data)
                    }
                ).catch(
                    (err) => {
                        console.log(err)
                    }
                );
            },
            err => {
                console.log(err)
            }
        )
    };

    render() {
        return (
            <div>
                <div className='reservation'>
                    <h2>Reservation</h2>
                    <div className='reservation__box'>
                        <h3>Let the game begin</h3>
                        <form onSubmit={this.handleSubmit}>
                            {
                                /* 
                                <div className='reservation__user'>
                                <label>First Name</label>
                                <input className="firstname" type="text" />
                                <label>Last Name</label>
                                <input className="lastname" type="text" />
                            </div>
                                */
                            }
                            <div className='reservation__rules reservation__infos'>
                                <div className='reservation__first'>
                                    <label for="start">Playing Date:</label>
                                    <input type="date" id="start" name="date"
                                        value={this.state.date} onChange={this.handleDateChange} />
                                </div>
                                <div className='reservation__second'>
                                    <label>Choose heure:</label>
                                    <input type="time" id="appt" name="heure"
                                        min="09:00" max="22:00" required value={this.state.heure} onChange={this.handleHeureChange} />
                                </div>
                                <input type="submit" value="Book" className="button button__reservation booknow" />
                            </div>
                        </form>
                    </div>
                    <div className='reservation__rules has-padding'>
                        <p>Rules for reservation of <span>Ali Abdda</span></p>
                        <ul>
                            <li>- The hours of availability are from 09:00 to 20:00</li>
                            <li>- Reservation of innfrastructure is available to members and visitors.</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
