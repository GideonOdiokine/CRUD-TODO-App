import React from "react";
import useStateInput from "../hooks/useStateInput";
import TextField from "@material-ui/core/TextField";

const EditTodoForm = () => {
  const [value, handleChange] = useStateInput("");
  return (
    <div>
      <TextField value={value} onChange={handleChange} />
    </div>
  );
};

export default EditTodoForm;
