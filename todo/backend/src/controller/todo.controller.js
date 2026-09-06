import pool from "../config/db.js";

const createTodo = async (req, res) => {
  try {
    const { description, completed } = req.body;
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

export { createTodo };
//Notes:
// req.body is the data that the client (frontend) sends to your backend in the request body.

// VALUES ($1, $2): You don't manually put the values into the SQL string because using parameters like $1, $2 is safer and helps prevent SQL injection.

// RETURNING * : After inserting it, give me the entire newly created row.

// So [0] doesn't mean the first task in the database. It means: Give me the first row returned by this particular query.
