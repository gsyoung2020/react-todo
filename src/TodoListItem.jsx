/* eslint-disable react/prop-types */
import styles from "./TodoListItem.module.css";

function TodoListItem({
  todo,
  isConfirming,
  onDeleteClick,
  onCancelDelete,
  onConfirmDelete,
}) {
  if (isConfirming) {
    return (
      <li className={styles.ListItem}>
        <p>Delete {todo.title}?</p>
        <button
          className={styles.button54}
          onClick={() => onConfirmDelete(todo.id)}
        >
          Y
        </button>
        <button className={styles.button54} onClick={onCancelDelete}>
          N
        </button>
      </li>
    );
  }

  return (
    <li className={styles.ListItem}>
      {todo.title}{" "}
      <button
        className={styles.button54}
        type="button"
        onClick={() => onDeleteClick(todo.id)}
      >
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
//onClick={() => onRemoveTodo(todo.id)}
