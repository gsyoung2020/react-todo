import * as React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import { useState } from "react";
import Quickmaths from "./Quickmaths.jsx";

// const title = 'React';

function App() {
  const [colorPicked, pickedColor] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />
      <Search />
      {/* <Quickmaths
        one={1}
        two={5}
        colour={colorPicked}
        colorChoosen={pickedColor}
      /> */}
    </div>
  );
}

function Search() {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  const blur = (event) => {
    console.log(event);
    console.log(event.target.value);
    console.log("blur");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        onBlur={blur}
      />
    </div>
  );
}

export default App;
