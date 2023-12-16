import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import axios from 'axios'
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfrasSection from '../components/InfrasSection';



const Infrastructure = () => {
    const [infrastructure, setInfrastructure] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredInfrastructure, setFilteredInfrastructure] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:1337/infras")
            .then((res) => {
                setInfrastructure(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setFilteredInfrastructure(
            infrastructure.filter((infra) =>
                infra.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, infrastructure]);

    if (loading) {
        return <p>Loading Infrastructures...</p>;
    }
    return (
        <div className="App">
            <Header hero='infra infra__ourinfra' hero1='infra__content' title='Our Infrastructures' description='Search And Book Your Infrastructure Now'>
                <Button title='Return Home' hero='button button__bbtn button__reservation' link='/' />
            </Header>
            <InfrasSection />
            <Footer />
        </div>
    );
}

const InfrastructureDetail = (props) => {
    return (
        <div className="container" >
            <div className="form-container sign-up-container">
                <div className='stades__img' >
                    <img src={axios.defaults.baseURL + props.infra.photo.formats.medium.url}></img>
                </div>
                <h1>{props.infra.name}</h1>
                <div >
                    <button className="button button__one">Info</button>
                    <Button title='reserver' hero='button button__bbtn button__reservation' link={{
                        pathname: '/reservation',
                        state: {
                            id: props.infra.id,
                            name: props.infra.name,
                            photo: axios.defaults.baseURL + props.infra.photo.formats.medium.url
                        }
                    }
                    } />
                </div>
            </div>
        </div>

    );
}

export default Infrastructure

/*

<input type="radio" id="all" name="categories" value="all" />
            <input type="radio" id="football" name="categories" value="football" />
            <label for="football">Football</label>
            <input type="radio" id="piscine" name="categories" value="piscine" />
            <label for="piscine">Piscines</label>
            <input type="radio" id="tennis" name="categories" value="tennis" />
            <label for="tennis">Tennis</label>
*/