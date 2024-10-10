import * as React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm.jsx";
import Search from "./Search.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

// const title = 'React';

function App() {
  let onLoadList = JSON.parse(localStorage.getItem("savedTodoList"));

  const [todoList, setTodoList] = useState(onLoadList || []);
  const [isLoading, setIsLoading] = useState(true);

  const [filteredTodos, setFilteredTodos] = useState(todoList);

  useEffect(() => {
    setFilteredTodos(todoList);
  }, [todoList]);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredTodos(todoList);
    } else {
      const filtered = todoList.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  };

  async function fetchData() {
    const query1 = "?view=Grid%20view";
    const query2 = "&sort[0][field]=title";
    const query3 = "&sort[0][direction]=asc";
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}${query1 + query2 + query3}`;
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
      console.log("data:", todos);
      var sortedTodos = todos;
      sortedTodos.sort((objA, objB) => {
        if (objA.title < objB.title) {
          return 1;
        } else if (objA.title > objB.title) {
          return -1;
        } else {
          return 0;
        }
      });
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
              <h1 className="headerText" id={styles.headerBG}>
                Todo List
              </h1>
              <AddTodoForm onAddTodo={handleTodoAdded} />

              {isLoading ? (
                <p className="indexText">Loading...</p>
              ) : (
                <TodoList
                  todoList={filteredTodos}
                  onListUpdated={handleTodoAdded}
                />
              )}
              <Search onSearch={handleSearch} />
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
