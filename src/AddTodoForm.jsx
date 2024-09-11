/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    var newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  //Try Adding The The text from submit to the airtable

  const handleAddTodo = async (event) => {
    event.preventDefault();
    console.log(todoTitle);
    console.log(event);
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          import.meta.env.VITE_AIRTABLE_API_TOKEN
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          title: todoTitle,
        },
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Success:", result);
      setTodoTitle("");
      onAddTodo(); // Trigger re-fetch in App.jsx
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title:
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
}

// const handleAddTodo = (event) => {
//   event.preventDefault();
//   console.log(todoTitle);
//   console.log(event);
//   onAddTodo({
//     title: todoTitle,
//     id: Date.now(),
//   });
//   setTodoTitle("");
// };
