import { Button } from '@mui/material'
import { useFormikContext ,useField, validateYupSchema} from 'formik'
import React from 'react'
// import { ToastContainer, toast  } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
const SubmitButtonWrapper = ({
    children,...otherprops
}) => {
    const {submitForm,values}=useFormikContext()
    
    const handleSubmit=()=>{
       
      
            // console.log(values);
            submitForm()
       
      
       
    }
    const config={
        onClick:handleSubmit,fullWidth:true,disableElevation:true
    }
    return (<>
        <Button {...config}{...otherprops}>
            {children}
        </Button>
        {/* <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/> */}
       </>
    )
}

export default SubmitButtonWrapper
