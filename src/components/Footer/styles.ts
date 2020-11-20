import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 216px;
  background-color: #f6f6f6;

  position: absolute;

  justify-content: center;
  text-align: center;
  display: flex;

  p {
    color: #939ea4;
    height: 24px;
    left: 165px;
    top: 68px;

    position: absolute;
  }

  h5 {
    color: #37447e;
    font-weight: 900;
    font-size: 26px;
    line-height: 38px;

    width: 79px;
    height: 38px;
    top: 61px;

    position: absolute;
  }

  ul:first-of-type {
    height: 24px;
    left: 105px;
    top: 165px;

    position: absolute;
  }

  ul {
    height: 24px;
    left: 2090px;
    top: 165px;

    position: absolute;
  }

  li {
    display: inline;
    margin-left: 60px;
    color: #929ecc;

    a {
      text-decoration: none;
      color: inherit;

      svg {
        margin-left: 10px;
      }
    }
  }
`;

export const Rectangle = styled.div`
  width: calc(100vw - 260px);
  height: 1px;
  background: #cdd1d4;

  bottom: 85px;

  position: absolute;
`;
