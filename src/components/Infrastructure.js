import React from 'react'
import axios from 'axios'
import Button from './Button'

export default function Infrastructure(props, { hero }) {


    const showData = () => {
        alert(props.infra.id, props.infra.name);
    }

    return (
        <div className="container">
            <div className="form-container sign-up-container">
                <div className='stades__img'>
                    <img src={axios.defaults.baseURL + props.infra.photo.formats.medium.url}></img>
                </div>
                <h1 >{props.infra.name}</h1>
                <div >
                    <a href='localhost:8080/reservertion'>reserver</a>
                    <button className="button button__one" onClick={showData}>reserver</button>
                </div>
            </div>
        </div>
    )

}
