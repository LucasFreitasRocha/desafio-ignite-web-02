import { useEffect, useState } from "react";
import { Genre, SidebarProps } from "../@types/types";
import { api } from "../services/api";
import { Button } from "./Button";

export function SideBar({selectedGenreId,handleClickButton} : SidebarProps) {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}