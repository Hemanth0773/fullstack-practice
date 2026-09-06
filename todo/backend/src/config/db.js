import { Pool } from "pg";

//Notes: Pool = a manager that handles and reuses database connections for your application.a collection of reusable PostgreSQL database connections.
const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "todoDb",
});

export default pool;
