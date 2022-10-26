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
        
        <section className='display'>
          <p>1sad123SD</p>
        </section>

        <section className='inputs'>
          <p>
            <input type="checkbox" name="" id="numbers" />
            <label htmlFor="numbers">Numbers</label>
          </p>
          
          <p>
            <input type="checkbox" name="" id="upper" />
            <label htmlFor="upper">Upper Case</label>
          </p>

          <p>
            <input type="checkbox" name="" id="symbols" />
            <label htmlFor="symbols">Symbols</label>
          </p>
        </section>
        <button>Generate</button>
      </section>
    </div>
  );
}

export default App;
