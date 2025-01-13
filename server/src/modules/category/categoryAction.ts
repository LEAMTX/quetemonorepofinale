// Some data to make the trick
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

// Action to get all categories
const browse: RequestHandler = (req, res) => {
  res.json(categories);
};
const read: RequestHandler = (req, res) => {
  const id = Number.parseInt(req.params.id); //api/categories/1=req.params.id, je souhaite récupérer le 1 chaine de caractère(string)  et le convertir en un nombre entier
  //comparer l'id convertir en number à l'id des categories avec la methode .find
  // elle parcours chaque element du tableau= ici nommé categorieselement et callback celui qui correspond.
  const category = categories.find(
    (categorieselement) => categorieselement.id === id,
  );
  //error si c'est mal réalisé:
  if (category) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};
// Export them to import them somewhere else
export default { browse, read };
