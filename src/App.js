import React from 'react';
import { createBrowserHistory } from 'history';
import './App.css';
import Routes from './Routes';

function App() {
  const history = createBrowserHistory();
  return (
    <>
     <Routes history={history} />
    </>
  );
}

export default App;
