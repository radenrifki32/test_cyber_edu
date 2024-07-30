import { useEffect, useState } from "react";
import { MovieServiceImplement } from "../service/movie";
import { MovieList } from "../lib/types/movie";
import "../App.css";
import Header from "../component/header";
import Card from "../component/card/Card";
import Pagination from "../component/pagination/pagination";
import { useLocation } from "react-router-dom";
import Spinner from "../component/spinner";

const movieService = new MovieServiceImplement();
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
function Home() {
    const query = useQuery();
  const [dataMovies, setDataMovies] = useState<MovieList[]>([]);
  const [page, setPage] = useState<number>(parseInt(query.get('page') ?? '1', 10));
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const getAllDataMovie = async () => {
    setIsLoading(true)
    try {
        const response = await movieService.getDataAllMovie({
            page: page,
            sortBy: "desc",
          });
          setDataMovies(response.results);
          setTotalPages(response.total_pages)     
    } catch (error) {
        console.log(error)
    }finally {
        setIsLoading(false)
    }
   
  };


  useEffect(() => {
    getAllDataMovie();
  }, [page]);
  useEffect(() => {
    const newPage = parseInt(query.get('page') ?? '1', 10);
    if (newPage !== page) {
      setPage(newPage);
    }
  }, [query]);

  if(isLoading) {
    return (
        <div className="container-spinner" role="status">
        <Spinner/>
        </div>
    )
  }
  
  return (
    <div className="container">
     <Header/>
    <div className="container-main">
        {dataMovies.map((movie : MovieList)=> (
            <div key={movie.id} className="container-card">
                <Card  movie={movie}/>
            </div>
        ))}
    </div>
    <Pagination currentPage={page} totalPages={totalPages}  />
    </div>
  );
}

export default Home;
