import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid d-flex justify-content-between align-items-center'>
          <div className="header-left">
            <img src="amapola-logo.png" alt="Logo" className='logo' />
          </div>
          <div className="navbar-nav-wrapper">
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link font'>Inicio</NavLink>
              </li>
              <li className='nav-item dropdown'>
                <NavLink to='/' className='nav-link font' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</NavLink>
                <ul className='dropdown-menu' aria-labelledby="navbarDropdown">
                  <li><NavLink to='/categoria/habitacion' className='dropdown-item'>Habitacion</NavLink></li>
                  <li><NavLink to='/categoria/cocina' className='dropdown-item'>Cocina</NavLink></li>
                  <li><NavLink to='/categoria/baño' className='dropdown-item'>Baño</NavLink></li>
                  <li><NavLink to='/categoria/decoracion' className='dropdown-item'>Decoracion</NavLink></li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link font'>Contacto</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link font'>Sucursales</NavLink>
              </li>
            </ul>
          </div>
          <div className="header-right">
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
}


export default NavBar;

