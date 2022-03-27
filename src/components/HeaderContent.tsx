import {  GenreResponseProps } from "../@types/types";

export function HeaderContent({genre} : GenreResponseProps) {


  return (
    <header>
      <span className="category">Categoria:<span> {genre.title}</span></span>
    </header>
  )
}