import pool from "../config/db.js";

// Create
const createTodo = async (req, res) => {
  try {
    const { description, completed } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }
    const newTodo = await pool.query(
      "INSERT INTO todo (description, completed) VALUES ($1, $2) RETURNING * ",
      [description, completed || false],
    );
    res.status(201).json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error, please try again later",
    });
  }
};

// Get all
const getTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM TODO");
    res.status(200).json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error, please try again later",
    });
  }
};

//Update a Todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, completed } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }
    const updatedTodo = await pool.query(
      "update todo set description = $1, completed = $2 where todo_id = $3 returning *",
      [description, completed || false, id],
    );
    if (updatedTodo.rows.length === 0) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(201).json({
      message: "Todo updated successfully",
      todo: updatedTodo.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error, please try again later",
    });
  }
};

//Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1 RETURNING *",
      [id],
    );
    if (deletedTodo.rows.length === 0) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo was deleted!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error, please try again later",
    });
  }
};

export { createTodo, getTodos, updateTodo, deleteTodo };

//Notes:
// req.body is the data that the client (frontend) sends to your backend in the request body.

// VALUES ($1, $2): You don't manually put the values into the SQL string because using parameters like $1, $2 is safer and helps prevent SQL injection.

// RETURNING * : After inserting it, give me the entire newly created row.

// So [0] doesn't mean the first task in the database. It means: Give me the first row returned by this particular query.

// req.params is data that comes from the URL itself
