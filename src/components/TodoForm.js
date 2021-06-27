import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "../hooks/useStateInput";
function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value !== "") {
            addTodo(value);
          }
          reset();
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            value={value}
            onChange={handleChange}
            margin="normal"
            label="Add New Todo"
            fullWidth
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (value !== "") {
                addTodo(value);
              }
              reset();
            }}
            style={{
              backgroundColor: "blue",
              border: "0",
              padding: "8px",
              marginTop: "5px",
              color: "#fff",
            }}
          >
            Add
          </button>
        </div>
      </form>
    </Paper>
  );
}
export default TodoForm;
