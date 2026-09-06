import { Router } from "express";
import pool from "../config/db.js";
import { createTodo } from "../controller/todo.controller.js";

// Notes: A router is basically a way to group related API routes.
const router = Router();

router.post("/", createTodo);

export default router;
