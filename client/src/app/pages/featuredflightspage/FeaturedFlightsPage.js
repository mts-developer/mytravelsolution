import React from "react";
import "./featuredflightspage.css";
import PageWrapper from "../../components/PageWrapper";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import ServiceEnquiry from "../../components/ServiceEnquiry"
import Slider from "../../components/Slider";
import Carousel from "../../components/Carousel";
import flights from "../../components/Flights";
import airlineLogos from "../../assets/images/logos/airlines";
import backgrounds from "../../assets/images/bg";
import { toTitleCase } from "../../utils";

class FeaturedFlightsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedRegion: "asia" };
  }

  regions = [
    "africa",
    "asia",
    "the caribbean",
    "central america",
    "europe",
    "north america",
    "oceania"
  ];

  handleRegion = region => e => {
    this.setState({
      selectedRegion: e.target.value
    });
  };

  filteredFlights = () => {
    let filteredByRegion = flights.filter(flight => {
      return flight.region === this.state.selectedRegion ? flight : null;
    });
    if (!(filteredByRegion.length < 1)) {
      return (
        <Carousel>
          {filteredByRegion.map((flight, i) => {
            return (
              <FeaturedFlightCard
                key={i}
                clickBookingEngine={this.props.clickBookingEngine}
                flight={flight}
              />
            );
          })}
        </Carousel>
      );
    } else {
      let selectedRegion = toTitleCase(this.state.selectedRegion);
      return (
        <div className="font--center">
          <p className="font--large bold padding-20">
            {`There are currently no specials for ${selectedRegion} at the moment.`}
          </p>
          <p>
            We are constantly updating our flights list, so please check again
            soon.
          </p>
        </div>
      );
    }
  };

  render() {
    const sliderLogos = Object.values(airlineLogos);

    return (
      <PageWrapper
        title="Airfares & Featured Flights"
        description="Find exclusive airfares to destinations all around the world"
        backgroundImage={backgrounds.featuredFlights_bg}
      >
        <div className="padding-20">
          <h2 className="font--large font--center bold">
            Choose from My Travel Solution's preferred airline partners
          </h2>
          <Slider logos={sliderLogos} component="flights" />
        </div>
        <ServiceEnquiry
          contactNumber="03 9314 6957"
          service="Airfares & Featured Flights"
        />
      </PageWrapper>
    );
  }
}

export default FeaturedFlightsPage;
