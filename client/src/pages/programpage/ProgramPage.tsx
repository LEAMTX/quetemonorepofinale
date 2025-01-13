import { useEffect } from "react";
import { useState } from "react";

//typage:
type Program = {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
};
const ProgramPage = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    //fetch données depuis la route api côté serveur.
    fetch("http://localhost:4000/api/program")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("erreur lors du fetch", error));
  }, []);

  return (
    <div>
      <section>
        <h1>liste des programmes</h1>
        <ul>
          {" "}
          {programs.length > 0 &&
            programs.map((program: Program) => (
              <li key={program.id}>
                <h2>{program.title}</h2>
                <img src={program.poster} alt={program.title} width="200" />
                <p>{program.synopsis}</p>
                <p>
                  {" "}
                  Pays: {program.country} Année:{program.year}
                </p>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};
export default ProgramPage;
