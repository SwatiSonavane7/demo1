import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test from "../jsons/test.json";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-offset-12 col-lg-12 logo_section">
            <a href={test.url}>
              <img
                src={test.footer.footer_logo}
                className="footer__logo"
                alt="Condé Nast"
              ></img>
            </a>
          </div>
        </div>
        <div class="footer__address-icons">
          <div class="footer__addresses">
            <div class="footer__address">
              <p class="footer__address-text">
                {test.footer.column1_address_line1}
              </p>
              <p class="footer__address-text">
                {test.footer.column1_address_line2}
              </p>
              <p class="footer__address-text">
                {" "}
                {test.footer.column1_address_line3}
              </p>
              <p class="footer__address-text">
                <a
                  class="footer__address-link"
                  href={test.footer.column1_map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in maps
                </a>
              </p>
              <p class="footer__telephone-text">
                Telephone: {test.footer.column1_telephone}
              </p>
              <p class="footer__address-text">
                Email:
                <a
                  class="footer__address-link"
                  href={test.footer.column2_email_link}
                >
                  {test.footer.column2_email}
                </a>
              </p>
            </div>
            <div class="footer__address">
              <p class="footer__address-text">
                {test.footer.column2_address_line1}
              </p>
              <p class="footer__address-text">
                {test.footer.column2_address_line2}
              </p>
              <p class="footer__address-text">
                {test.footer.column2_address_line3}
              </p>
              <p class="footer__address-text">
                <a
                  class="footer__address-link"
                  href={test.footer.column2_map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in maps
                </a>
              </p>
              <p class="footer__telephone-text">
                Telephone:{test.footer.column2_telephone}
              </p>
              <p class="footer__address-text">
                Email:
                <a
                  class="footer__address-link"
                  href={test.footer.column2_email_link}
                >
                  {test.footer.column2_email}
                </a>
              </p>
            </div>
          </div>
          <div class="footer__icons">
            <ul class="footer__social-links-list">
              <li class="footer__social-links">
                <a
                  class="footer__social-links-item"
                  href={test.footer.footer_social[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i class="icon-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li class="footer__social-links">
                <a
                  class="footer__social-links-item"
                  href={test.footer.footer_social[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i class="icon-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li class="footer__social-links">
                <a
                  class="footer__social-links-item"
                  href={test.footer.footer_social[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <i class="icon-linkedin2" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__navigation">
          <ul class="footer__navigation__list">
            <li class="footer__navigation__container">
              <a class="footer__navigation__text" href="#">
                {test.footer.footer_links[0]}
              </a>
            </li>
            <li class="footer__navigation__container">
              <a class="footer__navigation__text" href="#">
                {test.footer.footer_links[1]}
              </a>
            </li>
            <li class="footer__navigation__container">
              <a
                class="footer__navigation__text"
                href="/modern-slavery-policy-statement"
              >
                {test.footer.footer_links[2]}
              </a>
            </li>
            <li class="footer__navigation__container">
              <a class="footer__navigation__text" href="#">
                {test.footer.footer_links[3]}
              </a>
            </li>
            <li class="footer__navigation__container">
              <a class="footer__navigation__text" href="#">
                {test.footer.footer_links[4]}
              </a>
            </li>
            <li class="footer__navigation__container">
              <a
                class="footer__navigation__text"
                href="/advertising-terms-conditions/#termsandconditions"
              >
                {test.footer.footer_links[5]}
              </a>
            </li>
            <li class="footer__navigation__container">
              <button
                id="ot-sdk-btn"
                class="ot-sdk-show-settings footer__navigation__text footer__cookie-preferences"
              >
                {test.footer.footer_links[6]}
              </button>
            </li>
          </ul>
        </div>
        <p class="footer__copyright">
          Copyright {test.footer.copyright_year} Condé Nast. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
