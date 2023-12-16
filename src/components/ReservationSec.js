import React from 'react'
import Button from '../components/Button'

const ReservationSec = (props) => {
    console.log(props.infra)
    localStorage.setItem('infraId', props.infra.id)
    return (
        <div>
            <div className='reservation'>
                <h2>Reservation</h2>
                <p>Login first to book your infrastructure</p>
                <Button title='Login' hero='button button__login' link='/login' />
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

export default ReservationSec
