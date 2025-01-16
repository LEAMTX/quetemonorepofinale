import programRepository from "./programRepository";

// Declare the actions
import type { RequestHandler } from "express";

// Action to get all categories
const browse: RequestHandler = async (req, res) => {
  const ProgramFromDB = await programRepository.readAll();

  res.json(ProgramFromDB);
};

// Export them to import them somewhere else
export default { browse };
