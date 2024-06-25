import * as React from 'react';

// Shortcut key for comments: Ctrl + /

const todoList = [
  {
    id: 1,
    title: 'Complete assignment',
    date: '2020-02-15',
  },
  {
    id: 2,
    title: 'Submit assignment',
    date: '2022-10-30',
  },
  {
    id: 3,
    title: 'Check assignment',
    date: '2024-08-01',
  },
];


function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      <ul>
        {todoList.map(function (item) {
          return (<> 
        <li key={item.id}>{item.title}</li>
          </>)
        })}
      </ul>
    </div>
  );
}

export default App;