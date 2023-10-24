const { styled } = require('styled-components');

export const ListHome = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  li {
    width: 200px;
    text-align: center;
    list-style: none;
  }
  li > a {
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      color: #3fc9ff;
      transition: all 400ms ease-in-out;
    }
  }
`;
