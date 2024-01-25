import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <CreateTodo />
        <Todos
          todos={[
            {
              title: "test",
              description: "test description",
              completed: false,
            },
            {
              title: "test",
              description: "test description",
              completed: false,
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
