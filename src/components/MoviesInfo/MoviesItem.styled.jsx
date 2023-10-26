import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LinkBtnBack = styled(Link)`
  width: 90px;
  display: flex;
  justify-content: center;
  height: 10px;
  padding: 10px 12px;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  background-color: inherit;
  color: #fff;
  border-radius: 50px;
  border: 2px solid #3fc9ff;
  box-shadow: 2px 2px 10px 0px #3fc9ff, 2px 2px 10px 0px #3fc9ff;

  &:hover,
  &:focus,
  &:active {
    transition: all 400ms ease-in-out;
    background-color: #3fc9ff;
    color: #000;
    border: 2px solid #3fc9ff;
    box-shadow: 2px 2px 10px 0px #3fc9ff, 2px 2px 10px 0px #3fc9ff;
  }
`;

export const MovieItemWrapper = styled.div`
  color: #fff;
`;

export const GenresItem = styled.li`
  list-style: none;
`;
