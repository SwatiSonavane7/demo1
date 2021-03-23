import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test from "../jsons/test.json";
import IcoMoon from "react-icomoon";
import "./BurgerMenu.css";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

function BurgerMenu() {
  const [state, setState] = useState({ collapse1: false, collapseID: "" });

  const toggleCollapse = (collapseID) => () => {
    setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  const toggleSingleCollapse = (collapseId) => {
    setState({
      ...state,
      [collapseId]: !state[collapseId],
    });
  };

  return (
    <div className="collapse_menu">
      <div className="burger_menu">
        <Router>
          <MDBContainer isOpen={state.collapse1}>
            <div className="col-lg-offset-12 col-lg-12">
              <MDBNavbar>
                <MDBContainer>
                  <MDBHamburgerToggler
                    color="#383737"
                    id="hamburger1"
                    onClick={() => toggleSingleCollapse("collapse1")}
                  />
                  <MDBCollapse isOpen={state.collapse1} navbar>
                    <a href={test.url}>
                      <img
                        src={test.logo_white}
                        className="header__logo"
                        alt="Condé Nast"
                      ></img>
                    </a>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#">{test.menu[0]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[1]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[2]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[3]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[4]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[5]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[6]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[7]}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">{test.menu[8]}</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                    <div className="social_sharing">
                      <h5>CONNECT WITH US</h5>
                    </div>

                    <div class="social_menus">
                      <ul class="list burgerMenuOverlay__footer__social-links">
                        <li class="burgerMenuOverlay__footer__social-links-item">
                          <a
                            class="burgerMenuOverlay__footer__social-link"
                            href={test.social[0]}
                            aria-label="Twitter"
                          >
                            <i class="icon-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="burgerMenuOverlay__footer__social-links-item">
                          <a
                            class="burgerMenuOverlay__footer__social-link"
                            href={test.social[1]}
                            aria-label="Instagram"
                          >
                            <i class="icon-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="burgerMenuOverlay__footer__social-links-item">
                          <a
                            class="burgerMenuOverlay__footer__social-link"
                            href={test.social[2]}
                            aria-label="Linkedin"
                          >
                            <i class="icon-linkedin2" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            </div>
          </MDBContainer>
        </Router>
      </div>
    </div>
  );
}

export default BurgerMenu;
