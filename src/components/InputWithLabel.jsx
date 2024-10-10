/* eslint-disable react/prop-types */
import { Children, useEffect, useRef } from "react";
import styles from "../App.module.css";
import PropTypes from "prop-types";

export default function InputWithLabel({
  todoTitle,
  handleTitleChange,
  children,
}) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
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

InputWithLabel.proptype = {
  children: PropTypes.node.isRequired,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};
