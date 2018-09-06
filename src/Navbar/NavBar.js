import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <h1 className="has-text-weight-bold is-size-4-tablet text-header">Desafio Front-end CargoBR</h1>
            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <a className="navbar-item" href="https://github.com/marciogurka/desafiofrontendcargobr">
              <span className="icon">
                <i className="fas fa-code"></i>
              </span>
              <span>Check the source code</span>
            </a>
          </div>
        </nav>
    );
  }
}

// Add a listener to trigger the mobile burger navbar open/close
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

export default Navbar;
