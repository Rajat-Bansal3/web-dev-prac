import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "goto Gym",
      description: "gym jao bhai mote ho gye ho",
      completed: true,
    },
    {
      title: "goto study",
      description: "padhai karo bhai nasamjh ho gye ho",
      completed: false,
    },
  ]);

  function addTodo(){
    setTodo([...todo,{
      title: "new Todo",
      description: "new Todo",
      completed: true,
    }]);
  }

  return (
    <>
      <button onClick={addTodo}>Add</button>
      {todo.map((to) => {
        return (
          <Todo
            title={to.title}
            description={to.description}
            completed={to.completed}
          />
        );
      })}
    </>
  );
}
function Todo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      {props.completed ? <div>Done</div> : <div>Not Done</div>}
    </>
  );
}

export default App;
