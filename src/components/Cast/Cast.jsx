import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Loader} from '../Loader/Loader';
import { CastStyled } from './Cast.styled';

import { getCast } from '../../Util/api';
import Poster from '../Poster';

function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const getAktors = async () => {
    try{

    getCast(id)?.then(setCasts);
  } 
   catch (error) {
    setIsError(error.message);
    }
     finally {
      console.log('test')
    setIsLoading (false);
    }
    };
    getAktors();
    return ()=>{
      abortController.abort();
    }
  }, [id]);

  return (
    <CastStyled>
             {isLoading && <Loader/>}

 {isError && <p>Something went wrong...</p>}  
 </CastStyled>,

{ casts } && (
  <CastStyled>
        <h2>Cast:</h2>
        <ul>
          {casts?.length === 0 ? (
            <p>We don't have any casts for this movies</p>
          ) : (
            casts?.map(({ profile_path, name, character, cast_id }) => (
              <li className="thumb-cast" key={cast_id}>
                <p>Character: {character || 'none'}</p>
                <p>Name: {name || 'none'}</p>
                <Poster width={100} url={profile_path} alt={name}></Poster>

                <br />
              </li>
            ))
          )}
        </ul>
        </CastStyled>
  
    )
  
  );

}



export default Cast;
