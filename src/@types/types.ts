export type ContetProps = {
  genre: Genre,
  selectedGenreId: number
}
export type SidebarProps = {
  selectedGenreId: number,
  handleClickButton: (id: number) => void
}

export type Genre = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export type Movie = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
