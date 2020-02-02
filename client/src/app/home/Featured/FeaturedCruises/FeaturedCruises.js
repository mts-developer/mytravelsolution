import React from "react";
import "./featuredcruises.css";
import CruiseCard from "../../../components/CruiseCard";
import LabelLinkButton from "../../../components/Buttons/LabelLinkButton";
import Carousel from "../../../components/Carousel";
import cruises from "../../../components/Cruises";

const FeaturedCruises = props => {
  const clickBookingEngine = props.clickBookingEngine;
  return (
    <div className="featuredcruises">
      <Carousel>
        {cruises.map((cruise, i) => {
          return (
            <CruiseCard
              key={i}
              cruise={cruise}
              clickBookingEngine={clickBookingEngine}
            />
          );
        })}
      </Carousel>
      <div className="center margin-y-20">
        <LabelLinkButton label="View More Cruises →" url={"cruises"} />
      </div>
    </div>
  );
};

export default FeaturedCruises;
