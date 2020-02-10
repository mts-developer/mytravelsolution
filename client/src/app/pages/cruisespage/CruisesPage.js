import React from "react";
import "./cruisespage.css";
import PageWrapper from "../../components/PageWrapper";
import backgrounds from "../../assets/images/bg";
import ServiceEnquiry from "../../components/ServiceEnquiry";

const CruisesPage = () => {
  return (
    <PageWrapper
      title="Cruises & Cruise Packages"
      description="Get onboard your next cruise holiday to your perfect getaway destinations"
      backgroundImage={backgrounds.cruises_bg}
    >
      <ServiceEnquiry
        contactNumber="03 9314 6957"
        service="Cruises & Cruise Packages"
      />
    </PageWrapper>
  );
};

export default CruisesPage;
