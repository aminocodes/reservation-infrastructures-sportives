import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Piscines from '../components/Piscines'
import Infrastructure from '../components/Infrastructure'
import InfraInfo from '../components/InfraInfo'
import ReservationSec from '../components/ReservationSec'
import { Inject, ScheduleComponent, Day, Week, Workweek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule'
import Footer from '../components/Footer'
import ReservationSecLogged from '../components/ReservationSecLogged'
import LoginPage from '../pages/auth/LoginPage'

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            connected: false
        }
    }

    componentDidMount() {
        const infraId = this.props.match.params.id
        const token = localStorage.getItem('token');
        if (token) {
            this.setState({ ...this.state, connected: true })
            axios.get('/infras/' + infraId).then(
                res => {
                    this.setState({
                        ...this.state,
                        infra: res.data
                    })
                },
                err => {
                    console.log(err)
                }
            )
        }
        else {
            axios.get('/infras/' + infraId).then(
                res => {
                    this.setState({
                        ...this.state,
                        infra: res.data
                    })
                },
                err => {
                    console.log(err)
                }
            )
        }
    }

    render() {
        if (this.state.infra) {
            return (
                <div>
                    <div>
                        <Header hero='infra' hero1='infra__content' title={this.state.infra.name} description='Choose And Reserve Your Infrastructure'>
                            {/* <img className="infra" src={'http://localhost:1337' + this.state.infra.photo.formats.medium.url} /> */}
                            <Button title='Return Home' hero='button button__bbtn button__reservation' link='/' />
                        </Header>
                    </div>
                    <InfraInfo infra={this.state.infra} />
                    {this.state.connected ? <ReservationSecLogged infra={this.state.infra} /> : <ReservationSec infra={this.state.infra} />}
                    <Footer />
                </div>
            )
        }
        else {
            return (
                <div>
                    Loading ...
                </div>
            )
        }
    }
}
/*
<ScheduleComponent currentView='Month'>
                    <Inject services={[Day, Week, Month, Agenda]}/>
                    </ScheduleComponent> */
/*
return (
        <div className='reservation'>
            <section className="home home__reservation" >
                <div className="content content__reservation">
                    <h3>Book Your Infrastructure</h3>
                    <p>Choose and  reserve your infrastructure</p>
                    <Link to='/' className="button button__bbtn button__reservation">Return Home</Link>
                </div>
            </section>
            <section className='reservation__search'>
                <h1 className="reservation__heading">Search Infrastructure</h1>
            </section>
        </div>
    )
*/
