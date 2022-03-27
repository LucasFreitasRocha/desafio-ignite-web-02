import { useEffect, useState } from "react";
import {  ContetProps, Movie} from "../@types/types";
import { api } from "../services/api";
import { HeaderContent } from "./HeaderContent";
import { MovieCard } from "./MovieCard";

export function Content({genre, selectedGenreId}: ContetProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    
  }, [selectedGenreId]);
  return (
    <div className="container">
      <HeaderContent genre={genre} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )

}