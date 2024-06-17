import * as React from 'react';

/*
const welcome = {
  greeting: 'Hey',
  title: 'React',
}
*/

/*function getTitle(title) {
  return title;
}*/

const title = 'React';

const TodoList = [
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
      {/*<h1>
        {welcome.greeting} {welcome.title}
      </h1>*/}
      <h1>Todo List</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      <ul>
        {TodoList.map(function (item) {
          return (<> 
        <p key={item.id}>{item.title}<br></br>{item.date}</p>
          </>)
        })}
      </ul>
    </div>
  );
}

export default App;