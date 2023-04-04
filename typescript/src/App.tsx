import React from 'react';
import './App.css';
import { Greet } from './pages/Greet';
import { LoggedIn } from './state/LoggedIn';
import Status from './state/Status';
import Fetch from './pages/Fetch';

function App() {
  return (
    <div className="App">
     <Greet name={"Richard"} age={43} />
     <LoggedIn />
     <Status status={'error'} />
     <Fetch />
    </div>
  );
}

export default App;
