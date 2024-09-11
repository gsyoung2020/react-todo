import * as React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
// const title = 'React';

function App() {
  let onLoadList = JSON.parse(localStorage.getItem("savedTodoList"));

  useEffect(() => {
    document.body.style.backgroundColor = "#3657EB";
  }, []);

  const [todoList, setTodoList] = useState(onLoadList || []);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;
    let options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          import.meta.env.VITE_AIRTABLE_API_TOKEN
        }`,
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      let data = await response.json();
      let todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });
      console.log(todos);
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    //console.log(`hello`);
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const handleTodoAdded = () => {
    fetchData(); // Re-fetch data when a new todo is added
  };

  // const addTodo = (newTodo) => {
  //   //... look up spread operator
  //   setTodoList([...todoList, newTodo]);
  // };
  // const removeTodo = (id) => {
  //   const newTodoList = todoList.filter((todo) => todo.id !== id);
  //   setTodoList(newTodoList);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.todoModule} id={styles.title}>
              <h1 className="indexText" id={styles.headerBG}>
                Todo List
              </h1>
              <AddTodoForm onAddTodo={handleTodoAdded} />

              {isLoading ? (
                <p className="indexText">Loading...</p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onListUpdated={handleTodoAdded}
                />
              )}
              <Search />
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
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
      <label className="indexText" htmlFor="search">
        Search:{" "}
      </label>
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
