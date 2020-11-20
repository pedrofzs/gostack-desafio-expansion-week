import React from 'react';

import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Main from './components/Main';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Header />
    <Main />
    <Gallery />
    <Footer />
    <GlobalStyle />
  </>
);

export default App;
