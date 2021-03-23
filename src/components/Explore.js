import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test from "../jsons/test.json";
import "./Explore.css";

function Explore() {
  return (
    <div className="explore_section" id="conde-code">
      <div className="container">
        <div className="row"></div>

        <div className="container">
          <div className="row">
            <div class="col-md-3 col__col-lg-3 col__col-xl-3"></div>
            <div class="col-md-6 col__col-lg-6 col__col-xl-6">
              <h1 class="subtitle__title">The Condé Code</h1>
              <div class="formatMarkdown copy-block__copy">
                <p>{test.explore_text}</p>
              </div>
              <div class="copy-block__buttonsContainer">
                <a
                  class="genericButton"
                  href={test.explore_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="genericButton__text">
                    Explore The Condé Code
                    <span class="ourTeamsButton__arrow">⟶</span>
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-3 col__col-lg-3 col__col-xl-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
