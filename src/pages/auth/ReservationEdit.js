import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, DateTimeInput, FunctionInput } from 'react-admin'

const ReservationEdit = (props) => {
    return (
        <Edit title='Edit Reservation' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <DateInput source='date' />
                <DateTimeInput source='heure' />
                <DateInput source='created_at' />
                <TextInput source='status' />
            </SimpleForm>
        </Edit>
    )
}

export default ReservationEdit