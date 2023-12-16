import React from 'react'
import { Create, ImageField, ImageInput, TextInput, DateInput, SimpleForm, DeleteButton } from 'react-admin'

const InfraCreate = (props) => {

    return (
        <Create title='Create a Infrastructure' {...props}>
            <SimpleForm>
                <TextInput source='id' />
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
        </Create>
    )
}

export default InfraCreate