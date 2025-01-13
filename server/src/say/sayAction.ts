// declaration de la route welcome :
import type { RequestHandler } from "express";
export const sayCoucou: RequestHandler = (req, res) => {
  res.send("Hello, Wild series");
};
