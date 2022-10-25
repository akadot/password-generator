import React from 'react';
import "./styles/home.css"

function App() {
  return (
    <div className="container">
      <h1>Password Generator</h1>
      <section className="options">
        <button>Random</button>
        <button>Encrypted</button>
      </section>
      <section className="content">
        <p>1sad123SD</p>
        <label htmlFor="numbers">Numbers</label>
        <input type="checkbox" name="" id="numbers" />
        <label htmlFor="upper">Upper Case</label>
        <input type="checkbox" name="" id="upper" />
        <label htmlFor="symbols">Symbols</label>
        <input type="checkbox" name="" id="symbols" />
        <button>Generate</button>
      </section>
    </div>
  );
}

export default App;
