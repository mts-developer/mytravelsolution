import React from "react";
import "./tourspage.css";
import PageWrapper from "../../components/PageWrapper";
import backgrounds from "../../assets/images/bg";
import ServiceEnquiry from "../../components/ServiceEnquiry";

const ToursPage = props => {
  return (
    <PageWrapper
      title="Tours & Packaged Deals"
      description="Save for your next trip and discover our menu of low-cost holiday packages"
      backgroundImage={backgrounds.tours_bg}
    >
      <ServiceEnquiry
        contactNumber="03 9314 6957"
        service="Tours & Packaged Deals"
      />
    </PageWrapper>
  );
};

export default ToursPage;
