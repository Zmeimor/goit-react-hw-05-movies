import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {Loader} from '../components/Loader/Loader';
import ListMovies from '../components/ListMovies/ListMovies';
import { getMovies } from '../Util/api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [query, setQuery] = useSearchParams();

  
  useEffect(() => {
    const abortController = new AbortController();
  const getMovie = async () => {
  try{
    const strQuery = query.get('query');
    if (strQuery) getMovies(strQuery).then(setMovies);
    if (!strQuery) {
      setMovies(null);
      setQuery({});
    }
  }  catch (error) {
    setIsError(error.message);
    } finally {
    setIsLoading (false);
    }
    };
    getMovie();
    return ()=>{
      abortController.abort();
    }
  }, [query, setQuery]);

  function onSearch(e) {
    e.preventDefault();
    setQuery({
      query: e.currentTarget.elements.q.value,
    });
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSearch}>
      <div>Movies</div>
      {isLoading && <Loader/>}
{isError && <p>Something went wrong...</p>}
{movies &&  <ListMovies list={movies} />}
      <label>
        <input name="q" type="text" />
      </label>
      <button type="submit">Search</button>
      {movies?.length > 0 && (
        <>
          <h2>List movies</h2>
          <ListMovies list={movies} />
        </>
      )}
    </form>
  );
};

export default Movies;