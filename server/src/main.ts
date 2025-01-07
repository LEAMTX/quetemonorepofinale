// Load environment variables from .env file
import "dotenv/config";
// import type { RequestHandler } from "express";
// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";
import router from "./router";
// Get the port from the environment variables
const port = process.env.APP_PORT || 4000;
app.use(router); //middleware pour utiliser le router sur le port 4000 entre autres

// Start the server and listen on the specified port
//ajout pour challenge 2:
// const sayCoucou: RequestHandler = (req, res) => {
//   res.send("Hello, Wild series");
// };
// //Ajout de la route: http://localhost:4000/coucou
// app.get("/coucou", sayCoucou);

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
