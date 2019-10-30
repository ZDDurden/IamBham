import React from "react";
// import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import "../index.css";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <input
        className="box"
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <button className="box box2">Add</button>
    </form>
  );
};

export default TodoForm;
