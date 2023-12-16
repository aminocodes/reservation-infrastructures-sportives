import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Football from './Football';
import Piscines from './Piscines';
import Tennis from './Tennis';
import Button from './Button'
import All from './All'

const InfrasSection = () => (
    <BrowserRouter>
        <section className="page1">
            <h1 className="heading">LOCATION DES INFRASTRUCTURE</h1>
            <div className="lign"></div>
            <div className="page3">
                <div className="page2">
                    <div className="linkes">
                        <NavLink to='/infrastructures' activeClassName='is-active' className='link' exact>All</NavLink>
                        <NavLink to='/foot' activeClassName='is-active' className='link' exact>Stades de football</NavLink>
                        <NavLink to='/tennis' activeClassName='is-active' className='link'>Stades de tennis</NavLink>
                        <NavLink to='/piscines' activeClassName='is-active' className='link'>Picines</NavLink>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path='/infrastructures' component={All} />
                <Route exact path='/foot' component={Football} />
                <Route exact path='/tennis' component={Tennis} />
                <Route exact path='/piscines' component={Piscines} />
            </Switch>

        </section>
    </BrowserRouter>
);

export default InfrasSection