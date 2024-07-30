import { useNavigate } from "react-router-dom";
import { MovieList } from "../../lib/types/movie";
import "./Card.css";
interface MovieItemProps {
  movie: MovieList;
}
function Card({ movie }: Readonly<MovieItemProps>) {
  const navigate = useNavigate();
  const goToDetailMovie = (id: number) => {
    navigate(`/${id}`);
  };
  return (
    <div
      className="movie_card"
      id="tomb"
      onClick={() => goToDetailMovie(movie.id)}
    >
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            src={
              movie.poster_path === ""
                ? "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
                : `https://image.tmdb.org/t/p/original${movie.poster_path}`
            }
            alt="img-detail"
          />
          <h1>{movie.title}</h1>
          <h4>{movie.release_date}</h4>
          <span className="minutes">{movie.popularity}</span>
        </div>
        <div className="movie_desc">
          <p className="text">{movie.overview}</p>
        </div>
      </div>
      <div className="blur_back tomb_back"></div>
    </div>
  );
}
export default Card;
