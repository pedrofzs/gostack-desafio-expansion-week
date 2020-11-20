import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  display: flex;

  overflow: auto;
  text-align: center;
  background: #f6f6f6;

  img {
    margin-top: 10px;
    width: 5%;
  }

  ul {
    list-style-type: none;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-left: 165px;

    li {
      float: left;
      transition: background-color 0.2s;

      margin-right: 30px;

      a {
        display: block;
        color: #505f98;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;
        margin-right: 20px;

        &:hover {
          background: ${shade(0.1, '#f6f6f6')};
        }
      }
    }
  }

  h5 {
    color: #37447e;
    font-weight: 900;
    font-size: 26px;
    line-height: 38px;
    margin-left: 1240px;

    width: 79px;
    height: 38px;

    position: absolute;
  }
`;
