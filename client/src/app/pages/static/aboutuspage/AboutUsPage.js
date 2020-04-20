import React from "react";
import "./aboutuspage.css";
import PageWrapper from "../../../components/PageWrapper";
import backgrounds from "../../../assets/images/bg";

const AboutUsPage = () => {
  return (
    <PageWrapper title="About Us" backgroundImage={backgrounds.home_bg}>
      <div className="column responsive-width padding-20">
        <h3>
          The owner of CHRISTOSCENT PTY LTD, Trading as: 2C The World Travel and
          Cruise; My Travel Solution, Asia Travel Solution; and Philippine
          Travel Solution, has had 18 years of experience working in a Travel
          Agency in Australia. He started as a Senior Consultant for 5 years and
          the subsequent 11 years of service as Retail Manager with the same
          Travel Agency. This solid experience enabled him to cultivate contacts
          as well as gain expertise in efficiently managing numerous travel
          arrangements. He has consistently been the Top No. 1 sales contributor
          for more than 10 years.
        </h3>
        <h3 className="bold">Products/Services</h3>
        <p className="margin-bottom-20">
          CHRISTOSCENT PTY LTD, Trading as: 2C The World Travel and Cruise; My
          Travel Solution, Asia Travel Solution; and Philippine Travel Solution,
          is a full-service agency and sells standard travel agency goods and
          services, including air fares, holiday package tours, cruises, travel
          insurance and trains & car hires. CPL provides to individual and group
          travel for leisure and corporate clients. Services and products
          provided by CPL include travel consultation, pre-arranged tours,
          custom packages like cruise ship trips, reservations for lodging,
          rental cars, rail passages, etc. and travel insurance.
        </p>
        <h3 className="bold">Vision Statement</h3>
        <p className="margin-bottom-20">
          We exist to deliver total satisfaction to Australian travellers by
          providing easy travel arrangements, enjoyable cruises & trips and
          offering insurance coverage.
        </p>
        <p className="margin-bottom-20">
          We shall continue to be one of the leading travel agencies who will
          provide optimum products and maintain high quality services.
        </p>
        <p className="margin-bottom-20">
          CHRISTOSCENT PTY LTD, Trading as: 2C The World Travel and Cruise; My
          Travel Solution, Asia Travel Solution; and Philippine Travel Solution
          owner and employees are travel enthusiasts and highly experienced
          travel industry professionals who can provide consistent & excellent
          customer service to new and old-time travellers.
        </p>
        <h3 className="bold">Goals & Objectives</h3>
        <p className="margin-bottom-20">
          To establish the company as a reliable and customer centred travel
          agency.
        </p>
        <p className="margin-bottom-20">
          As a responsible travel agent, we strive to continuously uphold and
          broaden our reputation by providing our valued customers with high
          quality products and services.
        </p>
        <p className="margin-bottom-20">
          Our mission and objective is to provide paramount travel experience
          that connect with clients and enrich those connections to deliver the
          results our clients have come to expect.
        </p>
      </div>
    </PageWrapper>
  );
};

export default AboutUsPage;
