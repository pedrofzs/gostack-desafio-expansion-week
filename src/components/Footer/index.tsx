import React from 'react';
import { ImFacebook, ImLinkedin, ImGithub, ImInstagram } from 'react-icons/im';
import { FaWhatsapp } from 'react-icons/fa';

import { Container, Rectangle } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>© 2020 Pedro Stefano - Bootcamp</p>
      <h5>GoStack</h5>
      <Rectangle />
      <ul>
        <li>
          <a href="#">Desenvolvedor</a>
        </li>
        <li>
          <a href="#">Soft Skill</a>
        </li>
        <li>
          <a href="#">Galeria</a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=21979276688"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
            <FaWhatsapp size={16} color="#929ecc" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://pt-br.facebook.com/pedro.stefano.33"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook size={16} color="#929ecc" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pedro-stefano-ba941b167/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin size={16} color="#929ecc" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pedrofzs"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub size={16} color="#929ecc" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/pedro.stefano/"
            target="_blank"
            rel="noreferrer"
          >
            <ImInstagram size={16} color="#929ecc" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Footer;
