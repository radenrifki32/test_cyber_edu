import { useParams } from "react-router-dom";
import { MovieServiceImplement } from "../../service/movie";
import { useEffect, useState } from "react";
import { Genre, MovieList } from "../../lib/types/movie";
import "./movieDetail.css";
import Spinner from "../../component/spinner";

const movieService = new MovieServiceImplement();
function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [detailMovie, setDetailMovie] = useState<MovieList>();
  const getDetailMovieById = async () => {
    setIsLoading(true)
    try {
        const response = await movieService.getMovieDetail(id as string);
        setDetailMovie(response)     
    } catch (error) {
        console.log(error)
    }finally {
        setIsLoading(false)
    }
   ;
  };
  useEffect(() => {
    getDetailMovieById();
  }, []);
  if(isLoading) {
    return (
        <div className="container-spinner" role="status">
        <Spinner/>
        </div>
    )
  }
  return (
    <div className="container-detail">
      <div className="detail-movie">
        <div className="container-image">
          <img
            src={`https://image.tmdb.org/t/p/w500${detailMovie?.poster_path}`}
            alt={`imge=${detailMovie?.id}`}
          />
        </div>
        <div className="container-content">
          <h1>{detailMovie?.original_title}</h1>
          <p>{detailMovie?.overview}</p>
          <div className="container-genre">
            {detailMovie?.genres?.map((item: Genre) => (
              <div key={item.id} className="genre">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
