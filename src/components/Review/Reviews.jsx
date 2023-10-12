import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Loader} from '../Loader/Loader';
import { ReviewStyled } from './Reviews.styled';
import { getReview } from '../../Util/api';

function Reviews() {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getRewiews = async () => {
    try{

    getReview(id)?.then(setReview);
  }  catch (error) {
    setIsError(error.message);
    } finally {
    setIsLoading (false);
    }
    };
    getRewiews();
    return ()=>{
      abortController.abort();
    }
  }, [id]);

  return (
    <ReviewStyled>
      {isLoading && <Loader/>}
{isError && <p>Something went wrong...</p>}
      <h3>Reviews:</h3>
      <ul>
        {review?.length === 0 ? (
          <p>We don't have any reviews for this movies</p>
        ) : (
          review?.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p> {content}</p>

              <br />
              <br />
            </li>
          ))
        )}
      </ul>
    </ReviewStyled>
  );
}

export default Reviews;
