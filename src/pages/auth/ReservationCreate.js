import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, DateTimeInput } from 'react-admin'

const ReservationCreate = (props) => {
    return (
        <Create title='Create a Reservation' {...props}>
            <SimpleForm>
                <DateInput source='date' />
                <DateTimeInput source='heure' />
                <DateInput source='created_at' />
                <TextInput source='status' />
            </SimpleForm>
        </Create>
    )
}

export default ReservationCreate
