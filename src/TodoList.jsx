/* eslint-disable react/prop-types */
import TodoListItem from "./TodoListItem";
import { useState, useEffect } from "react";

export default function TodoList({ todoList, onListUpdated }) {
  const [confirmingId, setConfirmingId] = useState(null);

  const handleDeleteClick = (id) => {
    setConfirmingId(id);
  };

  const handleCancelDelete = () => {
    setConfirmingId(null);
  };

  const handleConfirmDelete = async (id) => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${
          import.meta.env.VITE_AIRTABLE_API_TOKEN
        }`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Todo deleted successfully");
      setConfirmingId(null);
      onListUpdated(); // Trigger re-fetch in parent component
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <ul className="ulTodoList">
      {todoList.map((item) => (
        <TodoListItem
          key={item.id}
          todo={item}
          isConfirming={item.id === confirmingId}
          onDeleteClick={handleDeleteClick}
          onCancelDelete={handleCancelDelete}
          onConfirmDelete={handleConfirmDelete}
        />
      ))}
    </ul>
  );
}
