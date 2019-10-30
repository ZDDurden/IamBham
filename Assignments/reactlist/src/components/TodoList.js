import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import InlineEdit from "react-edit-inline";
import "../index.css";

const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <div className="lsti">
        <ListItem className="lsti" key={index.toString()} dense button>
          <Checkbox style={{ color: "#153b50" }} tabIndex={-1} disableRipple />
          <ListItemText
            disableTypography
            primary={
              <Typography
                className="listText"
                type="body2"
                style={{
                  fontFamily: "'Spicy Rice', cursive",
                  color: "#153b50"
                }}
              >
                {todo}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <IconButton
              className="btn"
              aria-label="Delete"
              style={{ color: "#153b50" }}
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    ))}
  </List>
);

export default TodoList;
