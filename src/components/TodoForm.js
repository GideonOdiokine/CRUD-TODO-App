import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField'
import useStateInput from '../hooks/useStateInput'


function TodoForm({addTodo}){

    const [value, handleChange, reset] = useStateInput("")
    return(
        <Paper style={{position:'relative', top:'60px',bottom:'10px'}} >
            <form onSubmit={e=>{e.preventDefault(); addTodo(value); reset()}}>
            <TextField value={value} onChange={handleChange}  />
            </form>

        </Paper>
    )
} 

export default TodoForm;