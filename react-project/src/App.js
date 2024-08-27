
import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import NameList from './NameList';

function App() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  return (
    <div className="App">
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Counter />
      <NameList names={names} />
    </div>
  );
}

export default App;
