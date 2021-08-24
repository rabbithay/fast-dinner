import React from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import GlobalStyles from './utils/GlobalStyles';
import Menu from './menu/index';

function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Menu />
      <BottomBar />
    </>
  );
}

export default App;
