import React from "react";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoState from "./components/useTodoState";
// import createMuiTheme from "@material-ui/core/styles";
import "typeface-sacramento";
import "./index.css";
// import Sacramento from "./fonts/Sacramento/Sacramento-Regular.ttf";

// const sacra = {
//   fontFamily: "Sacramento",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 400,
//   src: `
//     local('Sacramento'),
//     local('Sacramento-Regular'),
//     url(${Sacramento}) format('truetype')
//   `
// };
// const theme = createMuiTheme({
//   typography: {
//     fontFamily: "Sacramento"
//   },
//   overrides: {
//     MuiCssBaseline: {
//       "@global": {
//         "@font-face": [sacra]
//       }
//     }
//   }
// });

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <div>
        <Typography component="h1" variant="h2">
          Todo List
        </Typography>
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
