// import React from 'react';

// import { Loader } from 'components/Loader/Loader';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActor } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState('');
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const details = async id => {
      setLoading(true);
      try {
        const { cast } = await fetchActor(id);
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
      {cast.map(({ id, name, profile_path }) => (
        <div key={id}>
          <img src={profile_path} alt={name} />
          <h2>{name}</h2>
        </div>
      ))}
    </Container>
  );
};

export default Cast;
