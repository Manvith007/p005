import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const BASEURL = import.meta.env.BASE_URL;

    return (
      <>
        <header>
          <div className="logo">Grid Demo</div>
        </header>

        <section>
          {[...Array(9)].map((_, index) => (
            <div className="card" key={index}>
              <img src={`${BASEURL}${index + 1}.jpeg`} alt={`Image ${index + 1}`} />
              <label>Image {String(index + 1).padStart(2, '0')}</label>
            </div>
          ))}
        </section>

        <footer>
          © 2025. All rights reserved.
        </footer>
      </>
    );
  }
}

export default App;
