import React from "react";
import LinkButton from "./components/Buttons/LinkButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import { ThemeProvider } from "@material-ui/styles";
import mtsTheme from "./themes/mtsTheme";
import AdminPage from "./pages/adminpage";
import Home from "./home";
import Dialog from "./components/Dialog";
import FeaturedFlightsPage from "./pages/featuredflightspage";
import HotelsPage from "./pages/hotelspage";
import RentalsPage from "./pages/rentalspage";
import CruisesPage from "./pages/cruisespage";
import ToursPage from "./pages/tourspage";
import InsurancePage from "./pages/insurancepage";
import RailPage from "./pages/railpage";
import PageNotFound from "./pages/pagenotfound";
import TermsAndConditionsPage from "./pages/static/termsandconditionspage";
import PrivacyPolicyPage from "./pages/static/privacypolicypage";
import AboutUsPage from "./pages/static/aboutuspage";
import ScrollToTop from "./components/ScrollToTop";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openBookingEngine: false };
  }

  componentDidMount() {
    // this.setTimeout(5);
  }

  clickBookingEngine = e => {
    e.preventDefault();
    this.setState({
      openBookingEngine: !this.state.openBookingEngine
    });
  };

  toggleBookingEngine = () => {
    return (
      <Dialog
        action={this.clickBookingEngine}
        open={this.state.openBookingEngine}
      >
        <div
          className="font--center center padding-20 bold"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p style={{ paddingBottom: "20px" }}>
            For all bookings and enquiries, please call our office on 03 9314
            6957.
          </p>
          <LinkButton
            label="Call Us Now"
            width="90px"
            url={`tel:0393146957`}
            external
            color="primary"
          />
        </div>
      </Dialog>
    );
  };

  render() {
    const { toggleBookingEngine, clickBookingEngine } = this;

    return (
      <Router>
        <ScrollToTop>
          <div>
            {toggleBookingEngine()}
            <ThemeProvider theme={mtsTheme}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home {...props} clickBookingEngine={clickBookingEngine} />
                  )}
                />
                <Route path="/admin" component={AdminPage} />
                <Route
                  path="/featured-flights"
                  render={props => (
                    <FeaturedFlightsPage
                      {...props}
                      clickBookingEngine={clickBookingEngine}
                    />
                  )}
                />
                <Route path="/hotels" component={HotelsPage} />
                <Route path="/rentals" component={RentalsPage} />
                <Route
                  path="/cruises"
                  render={props => (
                    <CruisesPage
                      {...props}
                      clickBookingEngine={clickBookingEngine}
                    />
                  )}
                />
                <Route
                  path="/tours"
                  render={props => (
                    <ToursPage
                      {...props}
                      clickBookingEngine={clickBookingEngine}
                    />
                  )}
                />
                <Route path="/insurance" component={InsurancePage} />
                <Route path="/rail" component={RailPage} />
                {/* Static Pages */}
                <Route
                  path="/termsandconditions"
                  component={TermsAndConditionsPage}
                />
                <Route path="/privacypolicy" component={PrivacyPolicyPage} />
                <Route path="/aboutus" component={AboutUsPage} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </ThemeProvider>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
