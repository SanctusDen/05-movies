// import React from 'react';

// import { Loader } from 'components/Loader/Loader';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActor } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { movieId } = useParams();

  useEffect(() => {
    const details = async () => {
      setLoading(true);
      try {
        const cast = await fetchActor(movieId);
        setCast(cast);
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
      <h1>Cast of the movie!</h1>
      {cast &&
        cast.map(({ id, name, profile_path }) => (
          <div key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />

            <h2>{name}</h2>
          </div>
        ))}
    </Container>
  );
};

export default Cast;
