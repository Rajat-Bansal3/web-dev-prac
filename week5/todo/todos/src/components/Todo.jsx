export function Todos({ todos }) {
  return (
    <div className="">
      {todos.map((todo) => {
        return (
          <>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{todo.completed ? "Completed" : "Comeplete"}</div>
          </>
        );
      })}
    </div>
  );
}
