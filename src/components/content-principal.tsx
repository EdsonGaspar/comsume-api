import { useEffect, useState } from "react";
import { Cabecalho } from "./header";
interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
}
export function ConteudoPrincipal() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=511ad408")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <section className="bg-[#1f222a] text-white flex-1">
      <Cabecalho />
      <div className="griid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {movies.map((movie) => {
          return (
            <div key={movie.Title} className="bg-gray-800 p-4 rounded-lg">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{movie.Title}</h2>
              <p className="text-gray-400 mb-2">Year: {movie.Year}</p>
              <p className="text-gray-400 mb-2">Genre: {movie.Genre}</p>
              <p className="text-gray-400">Director: {movie.Director}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
