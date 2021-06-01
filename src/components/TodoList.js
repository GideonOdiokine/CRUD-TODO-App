import React from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Todo from './Todo';




function TodoList({todos, removeTodo,toggleTodo}){

    return(
        <Paper style={{position:'relative', top:'60px'}}>
          <List>
            {todos.map(todo=>(
               <Todo toggleTodo={toggleTodo} completed={todo.completed}  removeTodo={ removeTodo} id={todo.id} key={todo.id} task={todo.task} />
            ))} 
           </List>
        </Paper>
    )
} 

export default TodoList;