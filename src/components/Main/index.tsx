import React from 'react';
import { Popup } from 'reactjs-popup';
import { FiBookmark } from 'react-icons/fi';
import ReactPlayer from 'react-player';

import {
  Container,
  Content,
  ModalVideoContainer,
  SkillsContainer,
  TextContainer,
} from './styles';
import commImg from '../../assets/comm-img.png';
import conferenceImg from '../../assets/conference-img.svg';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <h1>Desenvolvedor(a)</h1>
          <br />
          <h2>Developer | Desarrolador | Entwickler | Sviluppatore</h2>
          <span>de-sen-vol-ve-dor | s.m.</span>
          <ul>
            <li>1. Que desenvolve ou desembrulha.</li>
            <li>2. Que faz evoluir.</li>
          </ul>
          <img src={commImg} alt="Work" />
          <p>
            Ser desenvolvedor envolve muito mais do que apenas o tempo sentado
            na cadeira codando. É necessário analisar e entender as demandas do
            cliente e o negócio em si, de forma que o produto final impacte de
            maneira positiva na sociedade.
            <br />
            Para que o produto tenha a relevância necessária, o desenvolvedor
            deve possuir habilidades não-técnicas, conforme explicado no vídeo
            abaixo sobre a soft skill mais importante para essa carreira.
          </p>
          <Popup modal trigger={<button type="button">Assista!</button>}>
            <ModalVideoContainer>
              <ReactPlayer
                width="800px"
                height="600px"
                controls
                url="https://youtu.be/29jRESutBOk"
              />
            </ModalVideoContainer>
          </Popup>
        </TextContainer>
        <SkillsContainer>
          <h2>Comunicação</h2>
          <img src={conferenceImg} alt="Conference" />
          <p>
            Talvez a soft skill mais importante para qualquer profissão, mas,
            especialmente para um programador. Engraçado pensar que aquele cara
            que fica em um quarto escuro, vendo linhas e linhas de códigos
            coloridos sob a tela preta hoje é muito longe do que se espera de um
            programador de verdade.
            <br />
            <br />
            Um desenvolvedor pode saber todas as funcionalidades técnicas,
            linguagens e frameworks, mas isso tudo não vai gerar frutos se ele
            não souber se comunicar para o seguinte:
            <ul>
              <li>
                <FiBookmark size={18} />
                Ouvir e entender a demanda do cliente
              </li>
              <li>
                <FiBookmark size={18} />
                Trabalhar em equipe com eficiência
              </li>
              <li>
                <FiBookmark size={18} />
                Opinar sobre a capacidade e maleabilidade do sistema
              </li>
              <li>
                <FiBookmark size={18} />
                Negociar prazos, datas e entregas
              </li>
              <li>
                <FiBookmark size={18} />
                Convencer que talvez o melhor caminho, não seja o que o cliente
                está esperando
              </li>
            </ul>
          </p>
        </SkillsContainer>
      </Content>
    </Container>
  );
};

export default Main;
