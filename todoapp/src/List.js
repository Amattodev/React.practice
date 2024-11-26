import React from "react";
import Item from "./Item";

const List = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {/* <Item content={todos[0].content}></Item>
      <Item content={todos[1].content}></Item>
      <Item content={todos[2].content}></Item> */}
      {todos.map((todo) => {
        return (
          <Item
            content={todo.content}
            key={todo.id}
            id={todo.id}
            isDone={todo.isDone}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          ></Item>
        );
      })}
    </ul>
  );
};

export default List;
