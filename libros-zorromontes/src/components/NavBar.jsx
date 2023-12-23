import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" ><img className="logo" src="/public/img/logo-zorromontes3.jpeg" alt="" /></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos/libros">Libros</Link></li>
            <li><Link className="menu-link" to="/productos/cafe">Cafecitos</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar