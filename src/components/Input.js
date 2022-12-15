import React,{useState} from 'react'
import * as RiIcons from 'react-icons/ri';

export default function Input(props) {
    const {error,type, priceCloseIcon, checkboxAlign} = props;
    const [showPassword,setShowPassword] = useState(false)
    return (
      <>
        <div  className={`input_box  password ${checkboxAlign? 'checkboxAlign' : ''}`}>
        <input {...props} type={type ? (showPassword ? "text" : type) : "text"} autocomplete="off" />
        {priceCloseIcon ? (
          <RiIcons.RiCloseCircleFill style={{color:"#FF4001", marginRight: "-7px" , position: "absolute", marginTop: "-32px", right: "0px" }} />
        ) : ""}
        {type === "password"  ? (
          <i onClick={() => setShowPassword(!showPassword)} className={`fa ${!showPassword?"fa-eye-slash":"fa-eye"}`}>
            
          </i>
        ) : (
          ""
        )}
        </div>
        {error ? (
          <p  
          style={{ paddingTop: 5,
          fontSize:13,
          color:"red" }}>
            {error}
          </p>
        ) : null}
      </>
    );
}
