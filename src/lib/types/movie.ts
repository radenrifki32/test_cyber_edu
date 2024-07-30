export type Genre = {
    id : number,
    name : string
}
export type MovieList = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids?: number[];
    genres? : Genre[]
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
  
export type MovieResponse = {
    page : number ,
    results : MovieList[],
    total_pages : number,
    total_results  : number
}

export type ParamsDiscover = {
    page : number,
    sortBy : "desc" | "asc"
}