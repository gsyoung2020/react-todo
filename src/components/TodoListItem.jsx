import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({
  todo,
  isConfirming,
  onDeleteClick,
  onCancelDelete,
  onConfirmDelete,
}) {
  //console.log(isConfirming);
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
        onClick={() => onDeleteClick(todo.id)}
      >
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
//onClick={() => onRemoveTodo(todo.id)}

TodoListItem.propTypes = {
  todo: PropTypes.string,
  isConfirming: PropTypes.bool,
  onDeleteClick: PropTypes.func,
  onCancelDelete: PropTypes.func,
  onConfirmDelete: PropTypes.func,
};
