import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4'



function TodoApp(){
    const initialTodos =[
        {id:1, task:"Clean Fishtank", completed:false},
        {id:2, task:"Wash Car", completed:true},
        {id:3, task:"Grow Beard", completed:false},
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodo=>{
        setTodos([...todos,{id:uuid(),task:newTodo,completed:false}])
    }
    const removeTodo =(id)=>{
        const updatedTodos= todos.filter(todo=>todo.id !==id);
        setTodos(updatedTodos)
    }
    const toggleTodo =id=>{
        const updatedTodos=todos.map(todo=>
            todo.id===id ? {...todo,completed:!todo.completed}:todo
        );
        setTodos(updatedTodos);
    }
    return(
        <Paper style={{padding:0,margin:0,height:"100vh", backgroundColor:'#fafafa'}} elevation={0} >
            <AppBar>
                <Toolbar color='primary' position='static' style={{height:'64px'}}>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo} />
            <TodoList toggleTodo={toggleTodo} todos={todos} removeTodo={removeTodo} />
        </Paper>
        
    )
}

export default TodoApp;