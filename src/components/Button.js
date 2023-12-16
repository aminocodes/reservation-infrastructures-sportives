import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, hero, link }) => {
    return (
        <Link to={link} className={hero}>{title}</Link>
    )
}

export default Button
