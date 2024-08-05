import * as React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import { useState, useEffect } from "react";

// const title = 'React';
/* Remembe to change the code inside this function to varaibles */
const useSemiPersistentState = () => {
  var onLoadList = JSON.parse(localStorage.getItem("savedTodoList"));

  const [todoList, setTodoList] = useState(onLoadList || []);
  console.log(JSON.stringify(todoList));
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      <Search />
    </>
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
    <>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        onBlur={blur}
      />
    </>
  );
}

export default App;
