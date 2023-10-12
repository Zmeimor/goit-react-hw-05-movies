import { useEffect, useState } from 'react';

import ListMovies from '../components/ListMovies/ListMovies';
import { getTrends } from '../Util/api';
import {Loader} from '../components/Loader/Loader';
const Home = () => {
const [trendes, setTrendes] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  

useEffect(() => {
  const abortController = new AbortController();
  const getMoviesList = async () => {
  try{
  setIsLoading(true);
  setIsError(null);
  const trendInfo = await getTrends({
  signal: abortController.signal,
  });
  setTrendes(trendInfo);
}  catch (error) {
  setIsError(error.message);
  } finally {
  setIsLoading (false);
  }
  };
  
  getMoviesList();
  return ()=>{
    abortController.abort();
  }
},[]
);
return (
  <>
  {isLoading && <Loader/>}
{isError && <p>Something went wrong...</p>}
{trendes &&  <h2>Trading today</h2> && <ListMovies list={trendes} />}
</>
);
}
export default Home;