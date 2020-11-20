import React from 'react';

import img1 from '../../assets/gallery-img-1.jpg';
import img2 from '../../assets/gallery-img-2.jpg';
import img3 from '../../assets/gallery-img-3.jpg';
import img4 from '../../assets/gallery-img-4.jpg';
import img5 from '../../assets/gallery-img-5.jpg';
import img6 from '../../assets/gallery-img-6.jpg';
import { Container, ImagesContainer } from './styles';

const Gallery: React.FC = () => {
  return (
    <Container>
      <ImagesContainer>
        <h2>Galeria</h2>
        <ul>
          <li>
            <a
              href="https://henriquebastos.net/conheca-e-domine-4-soft-skills-essenciais-para-desenvolvedores/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img1} alt="Imagem 1" />
              <div>
                <span>4 Soft Skills por Henrique Bastos</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://blog.fcamara.com.br/times-integrados-trabalham-melhor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img2} alt="Imagem 2" />
              <div>
                <span>Comunicação no trabalho melhora os times</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://blog.fcamara.com.br/programador-4-0-conheca-as-habilidades-do-profissional-de-ti-do-futuro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img3} alt="Imagem 3" />
              <div>
                <span>Programador 4.0</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/mobicareofficial/lista-11-livros-para-iniciantes-em-programa%C3%A7%C3%A3o-48f1f69d76db"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img4} alt="Imagem 4" />
              <div>
                <span>11 livros para iniciantes em programação</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://blog.solides.com.br/conheca-soft-skills-para-desenvolver/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img5} alt="Imagem 5" />
              <div>
                <span>15 Soft Skills por Sólides</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://hackernoon.com/10-soft-skills-every-developer-needs-66f0cdcfd3f7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img6} alt="Imagem 6" />
              <div>
                <span>10 Soft Skills por HackerNoon</span>
              </div>
            </a>
          </li>
        </ul>
      </ImagesContainer>
    </Container>
  );
};

export default Gallery;
