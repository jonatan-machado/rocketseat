// imports externos
import React, { Fragment } from 'react';

// imports internos
import Main from './pages/Main';
import GlobalStyle from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
