import React from 'react';

import { Container } from './styles';
import goStackIcon from '../../assets/gostack-icon.png';

const Header: React.FC = () => {
  return (
    <Container>
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
          <a href="#">Contato</a>
        </li>
      </ul>
      <h5>GoStack</h5>
    </Container>
  );
};

export default Header;
