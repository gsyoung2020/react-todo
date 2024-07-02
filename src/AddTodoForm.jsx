/* eslint-disable react/prop-types */
export default function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    var todoTitle = event.target.elements.title.value;
    console.log(todoTitle);
    console.log(event);
    props.onAddTodo(todoTitle);
    event.target[0].value = "";
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}
