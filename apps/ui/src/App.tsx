import { x, BigInteger } from '@project-name/commons';
import { Button } from 'components/Button';
import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

const App: React.FC = () => {
  const [n] = useState(x);
  const [m] = useState(BigInteger);

  useEffect(() => {
    console.log(n);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button color="pink">Number: {n}</Button>
        <Button>BigNumber: {String(m)}</Button>
      </header>
    </div>
  );
};

export default App;
