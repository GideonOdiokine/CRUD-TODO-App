import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useStateInput from "../hooks/useStateInput";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useStateInput("");
  return (
    <Paper
      style={{
        position: "relative",
        top: "60px",
        bottom: "10px",
        margin: "1rem 0",
        padding: "0 1rem",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange} fullWidth />
      </form>
    </Paper>
  );
}

export default TodoForm;
