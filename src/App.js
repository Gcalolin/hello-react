import React from 'react';
import './App.css';

function App() {
  const title = 'React 小书'
  return (
    <div className="App">
      <header className="App-header">
        {title} { 1+2 }
      </header>
    </div>
  );
}

export default App;
