import React from 'react'
import { List, ImageField, TextField, Datagrid, EditButton, DeleteButton, FunctionField, useRecordContext } from 'react-admin'

const InfraList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='type' />
                <TextField source='name' />
                <TextField source='location' />
                <FunctionField source='photo' render={record => <img src={'http://localhost:1337' + record.photo.formats.thumbnail.url} />} />
                <EditButton basePath='/infras' />
                <DeleteButton basePath='/infras' />
            </Datagrid>
        </List>
    )
}

export default InfraList
