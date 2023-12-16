import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, FunctionField, DeleteButton } from 'react-admin'

const ReservationList = (props) => {

    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <DateField source='date' />
                <FunctionField label='Heure' render={record => record.heure} />
                <TextField source='status' />
                <TextField source='user_id.username' label='Username' />
                <EditButton basePath='/reservations' />
                <DeleteButton basePath='/reservations' />
            </Datagrid>
        </List>
    )
}

export default ReservationList
