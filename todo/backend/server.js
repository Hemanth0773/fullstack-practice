import app from "./src/app.js";

const PORT = 5000;

app.listen(PORT, () => {
  try {
    console.log(`Server is running successfully at port ${PORT}`);
  } catch (error) {
    console.error("Server unable to connect ");
  }
});
