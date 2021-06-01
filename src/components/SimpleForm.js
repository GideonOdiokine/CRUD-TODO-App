import React   from "react";
import useStateInput from '../hooks/useStateInput'

const SimpleForm = ()=>{
    const [email, toggleEmail, resetEmail] = useStateInput('');
    const [password, togglePassword, resetPassword] = useStateInput('');
 return(
    <div>
         <h4>Form  email is {email} & password: {password}</h4>
         <input type="text" value={email} onChange={toggleEmail} />
         <input type="text" value={password} onChange={togglePassword} />
        <button onClick={resetEmail}>Reset Email</button>
        <button onClick={resetPassword}>Reset password</button>
    </div>
 )
}

export default SimpleForm;