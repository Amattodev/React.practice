import { useState } from "react";
import React from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([
      ...todos,
      {
        content: value,
        id: nanoid(),
        isDone: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <h1> Todo APP</h1>
      <Form addTodo={addTodo}></Form>
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      ></List>
    </>
  );
};

export default App;
