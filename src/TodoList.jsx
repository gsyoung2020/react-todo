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

export default function TodoList() {
    return (
        <ul>
        {todoList.map(function (item) {
          return (<> 
      < li key={item.id}>{item.title}</li>
        </>)
        })}
        </ul>
    );
}