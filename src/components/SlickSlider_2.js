import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider_2.css";

function SlickSlider_2() {
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
      <div className="slider2">
        <Slider {...settings}>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/6MQZjhnQ9iHNhSZu1YUvuN/9d90bc65ed76ce82858ac5d8902b4d0f/HOME_PAGE_IMAGE_PAGE__germany_.jpg"></img>
          </div>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/jFJXQBE8QyaegWJLRc4aF/d6c320517e9446c6ff928dc7948119dd/COMMERCIAL_IMAGE_BLOCK_1__usa_.jpg"></img>
          </div>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/6MQZjhnQ9iHNhSZu1YUvuN/9d90bc65ed76ce82858ac5d8902b4d0f/HOME_PAGE_IMAGE_PAGE__germany_.jpg"></img>
          </div>
          <div>
            <img src="https://images.ctfassets.net/hbmwn5pbkdff/jFJXQBE8QyaegWJLRc4aF/d6c320517e9446c6ff928dc7948119dd/COMMERCIAL_IMAGE_BLOCK_1__usa_.jpg"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SlickSlider_2;
