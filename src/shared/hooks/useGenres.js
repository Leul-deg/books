import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genre-service";

function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export default useGenres;
