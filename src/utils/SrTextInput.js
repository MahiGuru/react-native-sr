import React from 'react'

import {
    TextInput,
    Text,
    View,
  } from 'react-native'; 

const SrTextInput = ({label, formikKey, formikProps, style, ...rest}) => {
    const inputStyles = {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 15,
        paddingHorizontal: 25,
        marginBottom: 3,
        borderRadius:50
    }
    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = 'red';
    } 

    return (
        <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
            { label ? (<Text style={{ marginBottom: 3 }}>{label}</Text>) : null }
            
            <TextInput
                style={[inputStyles, style]}
                onChangeText={formikProps.handleChange(formikKey)}
                onBlur={formikProps.handleBlur(formikKey)}
                {...rest}
            />
            { 
                (formikProps.touched[formikKey] && formikProps.errors[formikKey]) 
                ? 
                <Text style={{ color: 'red' }} >
                    {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
                </Text>
                :
                null  
              }
        </View>
    )
}

export default SrTextInput
