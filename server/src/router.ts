import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// // declaration de la route welcome :
// import type { RequestHandler } from "express";
// const sayCoucou: RequestHandler = (req, res) => {
//   res.send("Hello, Wild series");
// };
//Ajout de la route: http://localhost:4000/coucou
import { sayCoucou } from "./say/sayAction";
router.get("/coucou", sayCoucou);

//challenge 3:Crée la route GET /api/programs dans le fichier server/src/router.ts.
//Crée une page /programs dans ton application côté client.
//La page doit fetcher la route GET /api/programs de ton server et afficher les séries.
// import { Router } from "express";
import programActions from "./modules/item/program/programActions";
// const router2 = Router();
//route get/api/program
router.get("/api/program", programActions.browse);
//http://localhost:3001/api/program
//http://localhost:4000/api/program
//quete 4: ajouter la route des categories
import categoryAction from "./modules/category/categoryAction";
router.get("/api/categories", categoryAction.browse); //http://localhost:4000/api/categories
router.get("/api/categories/:id", categoryAction.read); //http://localhost:4000/api/categories/2  ok

export default router;
