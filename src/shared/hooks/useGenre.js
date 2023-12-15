import { Genre } from "../services/genre-service";
import useGenres from "./useGenres";;;;

const useGenre = (genreId) => {
  const { data } = useGenres();
  return data?.results?.find((genre) => genre.id === genreId)?.name || null;
} 

export default useGenre;
