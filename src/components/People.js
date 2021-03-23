import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test from "../jsons/test.json";
import "./People.css";

function People() {
  return (
    <div className="explore_section" id="our-people2">
      <div className="container">
        <div className="row"></div>

        <div className="container">
          <div className="row">
            <div class="col-md-3 col__col-lg-3 col__col-xl-3"></div>
            <div class="col-md-6 col__col-lg-6 col__col-xl-6">
              <h1 class="subtitle__title"> Our People</h1>
              <div class="formatMarkdown copy-block__copy">
                <p>{test.people_text}</p>
              </div>
              <div class="copy-block__buttonsContainer">
                <a
                  class="genericButton"
                  href={test.people_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="genericButton__text">
                    Join one of our teams{" "}
                    <span class="ourTeamsButton__no-arrow">⟶</span>
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

export default People;
