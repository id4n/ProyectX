import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <div className="header minWidth">
        <div className="language">
          <div class="btn" id="google_translate_element"></div>
        </div>
        <h1 className="title_name">MADEREXPO</h1>
        <nav className="navBar">
          <Link to="/">
            <a href="" class="navBar_item">Inicio</a>
          </Link>
          <Link to="/who">
            <a href="" class="navBar_item">Nuestras Operaciones</a>
          </Link>
          <Link to="/compromise">
            <a href="" class="navBar_item">Desarrollo Sostenible</a>
          </Link>
          <Link to="/product">
            <a href="" class="navBar_item">Nuestro Producto</a>
          </Link>
          <Link to="/relation">
            <a href="" class="navBar_item">Relacionate con nosotros</a>
          </Link>
          <Link to="/login">
            <a href="" class="navBar_item">Solicitudes</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
