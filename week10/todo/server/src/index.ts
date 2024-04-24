import express from "express";
import dotEnv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import todoRoutes from "./routes/todo.routes";

const dotEnvConfig = dotEnv.config();

const port = process.env.PORT || 3000;


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(authRoutes)
app.use(todoRoutes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
