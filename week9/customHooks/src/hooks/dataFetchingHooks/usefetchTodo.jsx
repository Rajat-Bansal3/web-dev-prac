import { useEffect, useState } from "react";

const useFetchTodo = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  function getdata() {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => {
        setLoading(false);
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.log("error occured :" + err.message);
      });
  }

  useEffect(() => {
    const id = setInterval(() => {
      getdata();
    }, n * 1000);

    return () => {
      clearInterval(id);
    };
  }, [n]);
  getdata()
  return { loading, todos };
};
export default useFetchTodo;
