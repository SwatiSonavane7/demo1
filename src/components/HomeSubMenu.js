import React, { createRef, useEffect, useState } from "react";
import "./HomeSubMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IcoMoon from "react-icomoon";
import "./BurgerMenu.css";
import { StickyContainer, Sticky } from "react-sticky";

function HomeSubMenu() {
  const [isSticky, setIsSticky] = useState("false");
  //const ref = React.createRef();

  window.addEventListener("scroll", () => {
    // let activeClass = "normal";
    // if (window.scrollY === 0) {
    //   activeClass = "top";
    // }
    // setIsSticky({ activeClass });
    if (window.scrollY === 0) {
      // alert("Scrolled");
      setIsSticky(isSticky);
    } else if (window.scrollY > 200) {
      setIsSticky(!isSticky);
    }
  });

  const [isActive, setActive] = useState("false");

  // useEffect(() => {
  //   const cachedRef = ref.current,
  //     observer = new IntersectionObserver(
  //       ([e]) => setIsSticky(e.intersectionRatio < 1),
  //       { threshold: [1] }
  //     );
  // });
  const showMenus = () => {
    // console.log("This is clicked");
    setActive(!isActive);
  };

  return (
    <div className="sub_menu_section">
      <div className="col-md-12">
        <StickyContainer>
          <Sticky>
            {({
              style,

              // the following are also available but unused in this example
              position = "sticky",
              // top = "0px",
              // isSticky = "true",
              // wasSticky = "true'",
              // distanceFromTop = "100",
              // distanceFromBottom = "0",
              // calculatedHeight = "100",
            }) => (
              <nav
                id="pageSubtitleBar"
                className={`subtitleBar ${
                  !isSticky ? "subtitleBar__sticky" : ""
                }`}
                aria-label="Secondary"
                style={style}
              >
                <div className="col col__col-sm-12 col__isSingleLine subtitleBar__wrapper fullbleed__1540">
                  <button
                    className="subtitleBar__small subtitleBar__button"
                    type="button"
                  >
                    JUMP TO SECTION
                    <i
                      onClick={showMenus}
                      class="icon-arrow-down"
                      aria-hidden="true"
                    ></i>
                  </button>

                  <div
                    className={`subtitleBar__container ${
                      !isActive ? "subtitleBar__container_active" : ""
                    }`}
                  >
                    <a href="/">
                      <img
                        src="https://www.condenast.com/images/conde-nast-logo-black.svg"
                        className="subtitleBar__logo"
                        alt="Condé Nast"
                      ></img>
                    </a>
                    <div className="subtitleBar__textContainer">
                      <a
                        className="subtitleBar__button subtitleBar__button--active"
                        href="#our-brands"
                      >
                        Brands
                      </a>
                      <a className="subtitleBar__button" href="#our-markets">
                        Markets
                      </a>
                      <a className="subtitleBar__button" href="#our-people2">
                        People
                      </a>
                      <a className="subtitleBar__button" href="#conde-code">
                        The Condé Code
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            )}
          </Sticky>
        </StickyContainer>
      </div>
    </div>
  );
}

export default HomeSubMenu;
