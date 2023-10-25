import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const details = async id => {
      setLoading(true);
      try {
        const { reviews } = await fetchReviews(id);
        setReviews(reviews);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details();
  }, [movieId]);

  return (
    <Container>
      {loading && <Loader />}
      <h1>Reviews of the movie!</h1>
      {reviews.map(({ id, author, content }) => (
        <div key={id}>
          <h2>{author}</h2>
          <p>{content}</p>
        </div>
      ))}
    </Container>
  );
};

export default Reviews;
