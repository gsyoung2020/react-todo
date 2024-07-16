/* eslint-disable react/prop-types */
import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <>
            <TodoListItem key={item.id} todo={item} />
          </>
        );
      })}
    </ul>
  );
}
