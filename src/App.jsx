import * as React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import { useState } from "react";

// const title = 'React';

function App() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
      <Search />

      <hr />
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
