import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

interface Filme {
  title: string;
}

export function App() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  const getFilmes = async () => {
    try {
      const apiKey = "d91b065f22292daff0378d0221890f9b";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      );

      const data = response.data;

      console.log(data);

      setFilmes(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return <div>{filmes.map((filme: Filme) => <p key={filme.title}>{filme.title}</p>)}</div>;
}
