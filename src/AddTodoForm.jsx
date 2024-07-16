/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    var newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    //event.target.elements.title.value
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    console.log(event);
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
