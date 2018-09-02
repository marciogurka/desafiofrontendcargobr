import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section class="section">
          <div class="container">
              <h1 class="title">
                Github
                </h1>
            </div>
        </section>
      </div>

    );
  }
}

export default App;
