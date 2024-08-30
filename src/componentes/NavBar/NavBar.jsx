import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center contenedor-img'>
            <img src="am-logo.png" alt="Logo" className='logo' />
            <h1 className='ms-2 title'>Amapola Home</h1>
          </div>
          <ul className='navbar-nav flex-grow-1 d-flex justify-content-center mb-0'>
            <li className='nav-item'>
              <a href="#" className='nav-link font'>Inicio</a>
            </li>
            <li className='nav-item dropdown'>
              <a href="#" className='nav-link font' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className='dropdown-menu' aria-labelledby="navbarDropdown">
                <li><a className='dropdown-item' href="#">Baño</a></li>
                <li><a className='dropdown-item' href="#">Cocina</a></li>
                <li><a className='dropdown-item' href="#">Mesa</a></li>
                <li><a className='dropdown-item' href="#">Decoración</a></li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link font'>Contacto</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link font'>Sucursales</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

