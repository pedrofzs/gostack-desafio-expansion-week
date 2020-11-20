import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  position: relative;

  top: 100px;
`;

export const TextContainer = styled.div`
  width: 600px;
  height: 421px;
  margin-left: 160px;

  position: relative;

  button {
    position: absolute;

    margin-top: 50px;
    margin-left: 155px;
    height: 36px;
    width: 189px;

    font-weight: 500;
    font-size: 16px;

    border-radius: 10px;
    background: #003e7f;

    color: #ffc521;

    transition: 0.2s;

    &:hover {
      background: #e8f5ff;
      color: #003e7f;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 66px;
    letter-spacing: 1px;
    color: #003e7f;
  }

  h2 {
    font-style: italic;
    color: #ffb86c;
    margin-bottom: 10px;
  }

  span {
    color: #003e7f;
  }

  ul {
    margin-top: 10px;
    list-style-type: none;
    font-size: 20px;
  }

  p {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: #003e7f;

    text-align: justify;
    text-justify: inter-word;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  max-width: 700px;
  margin-top: 20px;
  margin-left: 10px;

  img {
    width: 125%;
    margin-left: 1000px;
    top: 0;
    position: absolute;
  }
`;

export const SkillsContainer = styled.div`
  width: 100vw;
  height: 750px;
  margin-top: 300px;
  background: #f6f6f6;

  display: flex;
  text-align: left;
  justify-content: left;

  position: relative;

  h2 {
    margin-top: 70px;
    margin-left: 1550px;
    font-size: 60px;
    color: #6b63ff;

    position: absolute;
  }

  p {
    width: 600px;
    height: 170px;
    margin-top: 160px;
    margin-left: 1450px;
    color: #2f2e41;

    font-size: 20px;
    line-height: 22px;

    position: absolute;

    text-align: justify;
    text-justify: inter-word;

    ul {
      margin-top: 15px;
      margin-left: 15px;
      font-size: 20px;
      line-height: 26px;

      list-style-type: none;
      position: absolute;

      svg {
        margin-right: 5px;
        color: #6b63ff;
      }

      li {
        margin-bottom: 5px;
      }
    }
  }

  img {
    position: absolute;

    margin-top: 110px;
    margin-left: 250px;
    width: 30%;
  }
`;

export const ModalVideoContainer = styled.div`
  position: relative;

  justify-content: center;
  align-items: center;
  display: flex;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
