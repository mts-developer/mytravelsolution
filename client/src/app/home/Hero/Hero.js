import React from "react";
import "./hero.css";
import Header from "../../components/Header";
import ActionButton from "../../components/Buttons/ActionButton";
import Angle from "../../components/Angle";
import colors from "../../themes/colors";
import videos from "../../assets/videos";

const Hero = props => {
  const clickBookingEngine = props.clickBookingEngine;

  return (
    <div className="hero">
      <video className="herovideo" autoPlay muted loop>
        <source src={videos.clouds_mp4} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="hero-container padding-20">
        <Header />
        <div className="responsive-width">
          <div className="margin-top-20">
            <h1 className="white font--title bold font-shadow margin-none">
              Your travel journey begins with us
            </h1>
          </div>
          <div className="column padding-top-20">
            <ActionButton
              action={e => clickBookingEngine(e)}
              label="Book Your Flight Now"
              width="160px"
            />
          </div>
        </div>
      </div>
      <Angle fill={colors.offWhite} />
    </div>
  );
};

export default Hero;
