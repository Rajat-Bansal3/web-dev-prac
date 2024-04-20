import { useEffect, useState } from "react";
import axios from "axios";

function useTodo(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);
  }, []);
  return { todos, loading };
}
export default useTodo;
