import { useState } from "react";


const useStateInput =(initialValue)=>{

    const [value, setValue] = useState(initialValue);

    const handleChange =(e)=>{
        setValue(e.target.value)
    }
    const reset = (e)=>{
        setValue("")
    }
    return [value, handleChange, reset]
}

export default useStateInput;