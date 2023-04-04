import React from 'react';
import './App.css';
import { Greet } from './pages/Greet';
import { LoggedIn } from './state/LoggedIn';
import Status from './state/Status';

function App() {
  return (
    <div className="App">
     <Greet name={"Richard"} age={43} />
     <LoggedIn />
     <Status status={'error'} />
    </div>
  );
}

export default App;
