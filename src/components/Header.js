import React from 'react'



const Header = ({ title, description, children, hero, hero1 }) => {

    return (
        <section className={hero} >
            <div className={hero1}>
                <h3>{title}</h3>
                <p>{description}</p>
                {children}
            </div>
        </section>

    )
}

export default Header
