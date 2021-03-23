import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import test from "../jsons/test.json";
import "./Header.css";

function Header() {
  return (
    <div className="main_header">
      <div className="container">
        <div className="row">
          <div className="logo_section">
            <div className="col-lg-offset-12 col-lg-12">
              <a href={test.url}>
                <img
                  src={test.logo}
                  className="header__logo"
                  alt="Condé Nast"
                ></img>
              </a>
            </div>
          </div>
          <div className="menus_section">
            <div className="col-lg-offset-12 col-lg-12">
              <nav className="nav">
                <ul className="navigation">
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[0]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[1]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[2]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[3]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[4]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[5]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[6]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[7]}
                    </a>
                  </li>
                  <li className="navigation__container">
                    <a className="navigation__text" href="#">
                      {test.menu[8]}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
