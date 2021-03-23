import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider_1.css";

function SlickSlider_1() {
  const [mQuery, setMQuery] = React.useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 400px)");
    mediaQuery.addListener(setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery);
    // const screen = mQuery.matches
  }, []);

  const screen = mQuery.matches;

  //console.log(screen, "yes above 768");

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="new_slider">
      <div className="slider1">
        <Slider {...settings}>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/472oVIieJFSXwT6OYqiNMj/4a017d08daffc9badd449da1defc255b/home_our-markets_50-50_16-9_left.jpg?w=2000"></img>
          </div>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/0QS4yJuaGz1DvI4vYb213/fac7e330d36148a4940b9c57ba3e592f/brand_summary_wired_large.jpg?w=2000"></img>
          </div>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/472oVIieJFSXwT6OYqiNMj/4a017d08daffc9badd449da1defc255b/home_our-markets_50-50_16-9_left.jpg?w=2000"></img>
          </div>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/0QS4yJuaGz1DvI4vYb213/fac7e330d36148a4940b9c57ba3e592f/brand_summary_wired_large.jpg?w=2000"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SlickSlider_1;
