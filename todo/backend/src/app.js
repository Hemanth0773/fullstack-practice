import express from "express";
import cors from "cors";
import todoRouter from "./routes/todo.routes.js";

// Notes: It creates an Express application and stores it in the variable app. "Create my backend server using Express, and call it app."
const app = express();

//Notes: When a request contains JSON data, parse it and put that data inside req.body.
app.use(express.json());

//Notes:Allow requests coming from other origins.
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend API is running successfully",
  });
});

app.use("/api/todos", todoRouter);

export default app;
