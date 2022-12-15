import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
const TextFieldWrapper = ({name,...otherprops}) => {
    const [field,meta]=useField(name)
    // {console.log(field);}

    const configTextField = {
        ...field,
        ...otherprops,
        fullWidth: false,
        variant: "outlined",
        autoComplete: "off",
      };
      if (meta && meta.touched && meta.error){
//configTextField.error=true;
// configTextField.helperText=meta.error;
      }

    return (
        <>
        <TextField {...configTextField}/>
            <span style={{color:'red'}}>{meta.touched&&meta.error}</span>
        </>
    )
}

export default TextFieldWrapper
