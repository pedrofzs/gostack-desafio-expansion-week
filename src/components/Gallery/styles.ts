import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  position: relative;
  display: flex;
  top: 100px;
`;

export const ImagesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 20px;

  h2 {
    justify-content: center;
    align-items: center;
    display: flex;

    font-size: 60px;
    color: #003e7f;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
    list-style-type: none;

    li {
      position: relative;

      img {
        padding: 10px;
        opacity: 1;
        width: 100%;
        height: auto;
        display: block;
        backface-visibility: hidden;
      }

      div {
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
          to right,
          #667db6,
          #0082c8,
          #0082c8,
          #667db6
        );

        span {
          color: #fff;
          font-size: 24px;
        }
      }

      &:hover img {
        opacity: 0.3;
      }

      &:hover div {
        opacity: 0.6;
      }
    }
  }
`;
