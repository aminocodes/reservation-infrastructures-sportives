import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => (
    <div className='error'>
        <section className="home home__error" >
            <div className="content content__error">
                <h3>404</h3>
                <p>Page Not Found</p>
                <Link to='/' className="button button__bbtn button__reservation">Return Home</Link>
            </div>
        </section>
    </div>
);

export default ErrorPage
