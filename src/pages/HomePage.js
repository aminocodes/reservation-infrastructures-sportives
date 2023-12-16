import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import SpecialPromos from '../components/SpecialPromos';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Button from '../components/Button'
import Services from '../components/Services'


const HomePage = () => {
    return (
        <div>
            <Header id='home' hero="home" hero1='content' title='Guelma sport' description='Welcome To Guelma Sport, Choose And Reserve Your Infrastructure, For More Information Click On Book Now'>
                <Button title='Get Started' hero='button button__bbtn button__reservation' link='/' />
            </Header>
            <Services />
            <SpecialPromos />
            <ContactUs />
            <Footer />
        </div>
    )
}
export default HomePage
