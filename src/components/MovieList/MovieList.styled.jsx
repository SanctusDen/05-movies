import { styled } from 'styled-components';

export const WrapperMovie = styled.div`
  display: flex;
  gap: 24px;
  font-size: 18px;
`;

export const WrapperMovieItem = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  a {
    text-decoration: line-through;
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      color: #3fc9ff;
      text-decoration: underline;
      transition: all 400ms ease-in-out;
    }
  }
`;
