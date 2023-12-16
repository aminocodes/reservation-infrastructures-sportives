import React from 'react'
import location from '../images/locationn.png'
import calendar from '../images/calendarr.png'
import checked from '../images/check.png'
import background from '../images/ligne.png'

const Services = () => {
    return (
        <div className="services">
            <h1>Simple and easy to reserve</h1>
            <p>A few simple steps separate you from your upcoming game.
                See how easy it is to book an infrastructure</p>
            <img src={background} />
            <div className="services__all has-padding">
                <div className="services__one">
                    <div className="services__img">
                        <img src={location} alt="location" />
                    </div>
                    <h3>Choose infrastructure</h3>
                    <p>Select the infrastructure<br />that you want</p>
                </div>
                <div className="services__two">
                    <div className="services__img">
                        <img src={calendar} alt="calendar" />
                    </div>
                    <h3>Select a date</h3>
                    <p>Select the date and hour of the infrastructure<br />that you want to book</p>
                </div>
                <div className="services__three">
                    <div className="services__img">
                        <img src={checked} alt="checked" />
                    </div>
                    <h3>Book infrastructure</h3>
                    <p>Ready! Now you can<br /> go to your game</p>
                </div>
            </div>
        </div>
    )
}

export default Services
