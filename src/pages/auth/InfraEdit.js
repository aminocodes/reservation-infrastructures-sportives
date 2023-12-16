import React from 'react'
import { Edit, ImageField, ImageInput, TextInput, DateInput, SimpleForm } from 'react-admin'

const InfraList = (props) => {

    return (
        <Edit title='Edit Reservation' {...props}>
            <SimpleForm>
                <DateInput source='id' />
                <TextInput source='type' />
                <TextInput source='name' />
                <TextInput source='location' />
                <ImageInput
                    multiple={true}
                    source="photo"
                    label="Related pictures"
                    accept="images/*"
                >
                    <ImageField source="photo" title="name" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    )
}

export default InfraList