/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import styles from "./App.module.css";
export default function InputWithLabel({
  todoTitle,
  handleTitleChange,
  children,
}) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor="todoTitle">
        <p className="indexText">{children}</p>
      </label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
}
