import * as React from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.jsx'; 


// const title = 'React';




function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <Search />
  

      <hr />
        

    </div>
  );
}



function Search() {
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App;