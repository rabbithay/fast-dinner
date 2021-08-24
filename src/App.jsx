import React from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import GlobalStyles from './utils/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <BottomBar />
    </>
  );
}

export default App;
