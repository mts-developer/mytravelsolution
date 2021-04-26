import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Hero from "./Hero";
import Featured from "./Featured";
import FeaturedFlights from "./Featured/FeaturedFlights";
import Services from "./Services";
import Visa from "./Visa";
import Footer from "../components/Footer";
import ActionButton from "../components/Buttons/ActionButton";
import Subscribe from "../components/Subscribe";
import Dialog from "../components/Dialog";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openSubscribe: false };
  }

  clickSubscribe = e => {
    e.preventDefault();
    this.setState({
      openSubscribe: !this.state.openSubscribe
    });
  };

  toggleSubscribeDialog = () => {
    return (
      <Dialog action={this.clickSubscribe} open={this.state.openSubscribe}>
        <div className="center padding-20">
          <Subscribe />
        </div>
      </Dialog>
    );
  };

  showSubscribe = () => {
    this.setState({
      openSubscribe: true
    });
  };

  setTimeout = seconds => {
    setTimeout(() => this.showSubscribe(), seconds * 1000);
  };

  render() {
    const { clickBookingEngine } = this.props;

    return (
      <div className="home">
        {this.toggleSubscribeDialog()}
        <section className="hero-section">
          <Hero clickBookingEngine={clickBookingEngine} />
        </section>
        <section className="featured-section">
          <Featured
            bottomPadding="padding-bottom-50"
            title="Featured Flights"
            description="Coming soon to My Travel Solution"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/featured-flights">
                <ActionButton label="Enquire Now" url />
              </Link>
            </span>
          </Featured>
        </section>
        <section className="services-section">
          <Services />
        </section>
        <section className="featured-section">
          <Featured
            topPadding="padding-top-50"
            bottomPadding="padding-bottom-50"
            title="Featured Cruises"
            description="Coming soon to My Travel Solution"
          >
            <span style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/cruises">
                <ActionButton label="Enquire Now" url />
              </Link>
            </span>
          </Featured>
        </section>
        <section className="visa-section">
          <Visa />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Home;
