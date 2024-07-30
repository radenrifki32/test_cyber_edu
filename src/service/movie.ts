import api from "../api/axios";
import { MovieList, MovieResponse, ParamsDiscover } from "../lib/types/movie";

export interface MovieService {
getDataAllMovie({page,sortBy} : ParamsDiscover): Promise<MovieResponse> 
getMovieDetail(id : string) : Promise<MovieList>
}
export class MovieServiceImplement  implements MovieService {
    async getDataAllMovie({page,sortBy} : ParamsDiscover): Promise<MovieResponse> {
        const response = await api.get(`discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.${sortBy}`)
         return response.data
      }
      async getMovieDetail( id : string): Promise<MovieList> {
          const response = await api.get(`https://api.themoviedb.org/3/movie/${id}`)
          return response.data
      }
}