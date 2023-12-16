import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-strapi-rest';
import authProvider from './authProvider'
import Cookies from './Cookies';
import ReservationList from './ReservationList'
import ReservationCreate from './ReservationCreate'
import ReservationEdit from './ReservationEdit'
import InfraList from './InfraList'
import InfraCreate from './InfraCreate'
import InfraEdit from './InfraEdit'
import Footer from '../../components/Footer'

const uploadFields = ["images", "files", "avatar"];



const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = Cookies.getCookie('token')
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const AdminPage = () => {
    return (
        <div>
            <Admin dataProvider={simpleRestProvider('http://localhost:1337', httpClient, uploadFields)} authProvider={authProvider}>
                <Resource name='reservations'
                    list={ReservationList}
                    create={ReservationCreate}
                    edit={ReservationEdit}
                />
                <Resource name='infras'
                    list={InfraList}
                    create={InfraCreate}
                    edit={InfraEdit}
                />
            </Admin>
            <Footer />
        </div>
    )
}

export default AdminPage