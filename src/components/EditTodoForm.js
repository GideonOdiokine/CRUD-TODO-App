import React from "react";
import useStateInput from "../hooks/useStateInput";
import TextField from "@material-ui/core/TextField";

const EditTodoForm = ({ EditTodo, id, task, toggle}) => {
  const [value, handleChange, reset] = useStateInput(task);
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        EditTodo(id, value);
        reset();
        toggle()
      }}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </div>
  );
};

export default EditTodoForm;
