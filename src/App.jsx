import * as React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import { useState, useEffect } from "react";

// const title = 'React';

function App() {
  let onLoadList = JSON.parse(localStorage.getItem("savedTodoList"));

  const [todoList, setTodoList] = useState(onLoadList || []);
  const [isLoading, setIsLoading] = useState(true);
  console.log(JSON.stringify(todoList));
  useEffect(() => {
    console.log(`hello`);
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: onLoadList || [] } });
      }, 2000);
    });

    promise.then((results) => {
      setTodoList(results.data.todoList);
      setIsLoading(false);
    });
  }, []);

  const addTodo = (newTodo) => {
    //... look up spread operator
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

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
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
