import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoState from "./components/useTodoState";
import "./index.css";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
      </div>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <div className="lst">
        <TodoList className="lst" todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
