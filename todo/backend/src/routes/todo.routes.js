import { Router } from "express";
import pool from "../config/db.js";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controller/todo.controller.js";

// Notes: A router is basically a way to group related API routes.
const router = Router();

// Create
router.post("/", createTodo);

// Get all
router.get("/", getTodos);

//Update a todo
router.put("/:id", updateTodo);

//Delete a todo
router.delete("/:id", deleteTodo);

export default router;

// Notes:
