import React from 'react'
import location from '../images/location-pin.png'
import size from '../images/user-group.png'

const InfraInfo = (props) => {
    return (
        <div>
            <div className='infrainfo__details has-padding'>
                <h2>Details</h2>
                <p>{props.infra.name}</p>
                <div className="infrainfo__all">
                    <div className="infrainfo__one">
                        <img src={location} className="infrainfo__img" />
                        <p>{props.infra.location}</p>
                    </div>
                    <div className="infrainfo__two">
                        <img src={size} className="infrainfo__img" />
                        <p>{props.infra.nombre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfraInfo
