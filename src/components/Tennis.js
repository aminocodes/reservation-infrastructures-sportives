import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Tennis = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios
            .get("http://localhost:1337/infras", config)
            .then((res) => {
                setCountries(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setFilteredCountries(
            countries.filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase()) && country.type === 'tennis'
            )



        );
    }, [search, countries]);
    if (loading) {
        return <p>Loading Infrastructures...</p>;
    }
    return (
        <div className="App">

            <input className="searchinfra"
                type="text"
                placeholder="Search Infrastructures"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="pricing">
                {filteredCountries.map((infra) => (
                    <CountryDetail key={infra.id} infra={infra} {...infra} />
                ))}
            </div>

        </div>
    );
}

const CountryDetail = (props) => {
    return (
        <div className="container" >
            <div className="form-container sign-up-container">
                <div className='stades__img' >
                    <img src={axios.defaults.baseURL + props.infra.photo.formats.medium.url}></img>
                </div>
                <h1>{props.infra.name}</h1>
                <div >
                    <button className="button button__one">Info</button>
                    <a href={`http://localhost:8080/${props.infra.id}`} className="button button__reservation">Reserver</a>
                </div>
            </div>
        </div>

    );
}

export default Tennis