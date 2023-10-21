import { styled } from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  font-size: 16px;
  display: flex;
  background-color: #000;

  nav {
    display: flex;
    gap: 20px;

    margin-left: auto;
    margin-right: auto;
  }
  nav > a {
    color: #fff;
    text-decoration: none;

    font-weight: 400;
    font-size: 16px;
    &:hover,
    &:focus,
    &:active {
      color: #3fc9ff;
    }
  }

  span {
    font-weight: 600;
    font-size: 20px;
    color: #fff;
  }
`;
