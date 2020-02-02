import React from "react";
import "./featuredflightcard.css";
import LabelActionButton from "../Buttons/LabelActionButton";
import {
  toTitleCase,
  commaFormatNumbers,
  dateFormatLongMonthDay,
  dateFormatShortDayMonth,
  dateFormatShortMonthDayYear,
  pluraliseString
} from "../../utils";

const FeaturedFlightCard = props => {
  const { clickBookingEngine, flight } = props;

  const expiry =
    flight.expiry !== null ? dateFormatLongMonthDay(flight.expiry) : null;
  const name = toTitleCase(flight.name);
  const featuredImage = flight.featuredImage;
  const airline = flight.airline;
  const origin = flight.origin;
  const destination = flight.destination;
  var returnFlight =
    flight.returnFlight === true
      ? // eslint-disable-next-line
        (returnFlight = "Return")
      : // eslint-disable-next-line
        (returnFlight = "");
  const price = commaFormatNumbers(flight.price);
  const travelPeriods = flight.travelPeriods;
  const remarks = flight.remarks;

  const image = {
    backgroundImage: `url(${featuredImage})`,
    backgroundPosition: "center"
  };

  return (
    <div className="featuredflightcard column center card-shadow">
      {expiry !== null ? (
        <div className="featuredflightcard-expiry center">
          <h2 className="font--medium white bold">
            {`Offer valid until ${expiry}`}
          </h2>
        </div>
      ) : null}
      <div className="featuredflightcard-title font--center center middle">
        <h2 className="font--large white bold">{name}</h2>
      </div>
      <div className="featuredflightcard-top full-width" style={image} />
      <div className="featuredflightcard-bottom full-width">
        <div className="padding-20">
          <div className="center">
            <img
              className="logo--small margin-20"
              src={airline.airlineImage}
              alt={airline.airlineName}
            />
          </div>
          <div className="featuredflightcard-grid grid-columns-2 full-width">
            <div>
              <p className="font--large primary-color bold">{`${origin} to`}</p>
              <p className="font--large primary-color bold">{`${destination} ${returnFlight}`}</p>
              <br />

              <div className="row margin-top-5">
                <p className="font--small bold">from</p>
                <p className="font--header bold margin-x-5">{`$${price}*`}</p>
              </div>
            </div>
            <div>
              <p className="font--medium bold">
                {pluraliseString("Travel Period", travelPeriods)}
              </p>
              {travelPeriods.map((travelPeriod, i) => {
                return (
                  <p key={i} className="font--small font--no-wrap padding-y-5">
                    {`${dateFormatShortDayMonth(
                      travelPeriod.from
                    )} - ${dateFormatShortMonthDayYear(travelPeriod.to)}`}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="featuredflightcard-remarks padding-top-20">
            {remarks.map((remark, i) => {
              return (
                <p key={i} className="font--small light-grey padding-y-5">
                  {`- ${remark}`}
                </p>
              );
            })}
          </div>
          <div className="space-between row middle">
            <p className="font--small light-grey bold">* Conditions Apply</p>
            <LabelActionButton
              label="Book Now"
              onClick={e => clickBookingEngine(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFlightCard;
