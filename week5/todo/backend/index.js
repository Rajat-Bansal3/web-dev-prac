const express = require("express");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");

const app = express();
app.use(express.json());

app.post("/todo", async (req, res) => {
  const payload = req.body;
  const parsedPaylaod = createTodo.safeParse(payload);
  if (!parsedPaylaod)
    return res.status(411).json({ message: "Invalid payload" });
  await Todo.create({
    title: parsedPaylaod.title,
    description: parsedPaylaod.description,
    completed: false,
  });

  res.status(200).json({ message: "Todo created successfully" });
});

app.get("/todos", async (req, res) => {
  const id = req.query.id;

  const todos = await find({});

  res
    .status(200)
    .json({ message: "todos retrieved successfully", todsos: todos });
});

app.put("/completed", async (req, res) => {
  const paylaod = req.body;
  const parsedPaylaod = updateTodo.safeParse(paylaod);
  if (!parsedPaylaod)
    return res.status(411).json({ message: "Invalid payload" });

  const todo = await Todo.update({ _id: req.body.id }, { completed: true });
  
  res.status(200).json({ message: "updated successfully", todo: todo });
});

app.listen(3000, () => {
  console.log(connected);
});
