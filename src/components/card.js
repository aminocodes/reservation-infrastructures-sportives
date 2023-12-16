import React from 'react'

const card = ({ name, img }) => {
    return (
        <div className="form-container sign-up-container">
            <div className='stades__img'>
                {<img src={img} />}
            </div>
            <h1 className='form-container__heading'>{name}</h1>
            <div >
                <Button title='Info' hero='button button__one' link='/stades' />
                <Button title='Réserver' hero='button button__one' link='/stades' />
            </div>
        </div>
    )
}

export default card
