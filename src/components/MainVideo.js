import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test from "../jsons/test.json";
import "./MainVideo.css";

function MainVideo() {
  return (
    <div className="main_video">
      <video
        class="videoBlock__player"
        width="100%"
        height="100%"
        muted="true"
        autoplay="true"
        playsinline=""
        controls="true"
        src={test.main_video}
        type="video/mp4"
        track
        kind="captions"
        video="[object Object]"
        optionalvideo="[object Object]"
      ></video>
    </div>
  );
}

export default MainVideo;
