import React from "react";
import "./termsandconditionspage.css";
import PageWrapper from "../../../components/PageWrapper";
import backgrounds from "../../../assets/images/bg";

const TermsAndConditionsPage = () => {
  return (
    <PageWrapper
      title="Terms & Conditions"
      backgroundImage={backgrounds.home_bg}
    >
      <div className="column responsive-width padding-20">
        <p className="margin-bottom-20">
          Please read the following terms and conditions carefully. You must not
          make any booking unless you understand and agree with the following
          terms and conditions. References to “us”, “we” and/or “our” in these
          booking terms and conditions shall mean CHRISTOSCENT PTY LTD. Where
          bookings of travel products are made on your behalf through 2C The
          World Travel and Cruise; My Travel Solution, Asia Travel Solution; and
          Philippine Travel Solution references to “us”, “we”, and/or “our” in
          these booking terms and conditions shall also mean and include
          CHRISTOSCENT PTY LTD trading as 2C The World Travel and Cruise; My
          Travel Solution, Asia Travel Solution; and Philippine Travel Solution.
        </p>
        <p className="margin-bottom-20">
          These terms and conditions apply to bookings you make with us via
          phone, as well as online bookings you make on our website.
        </p>
        <p className="margin-bottom-20">
          We will rely on the authority of the person making the booking to act
          on behalf of any other traveller on the booking and that person will
          bind all such travellers to these terms and conditions.
        </p>
        <h3 className="bold">Passports & Visas</h3>
        <p className="margin-bottom-20">
          All travellers must have a valid passport for international travel and
          many countries require at least 6 months validity from the date of
          return and some countries require a machine-readable passport. When
          assisting with an international travel booking, we will assume that
          all travellers on the booking have a valid Australian passport. If
          this is not the case, you must let us know. It is important that you
          ensure that you have valid passports, visas and re-entry permits which
          meet the requirements of immigration and other government authorities.
          Any fines, penalties, payments or expenditures incurred as a result of
          such documents not meeting the requirements of those authorities will
          be your sole responsibility (except to the extent caused by fault on
          our part). If you need information regarding visas, passports and
          other travel document requirements for your trip, please contact us.
          We can provide you with general information on visa and passport
          requirements that apply to international travel bookings you make with
          us. For more specific information, you can contact an external visa
          provider such as Visa Link directly. We do not warrant the accuracy of
          information provided by any external service and accept no liability
          for any loss or damage which you may suffer in reliance on it (except
          to the extent caused by fault on our part).
        </p>
        <p className="margin-bottom-20">
          <strong>If you are travelling to the United States</strong> please see{" "}
          <a
            className="inline-flex"
            href="https://esta.cbp.dhs.gov"
            target="blank"
          >
            https://esta.cbp.dhs.gov
          </a>{" "}
          for important information regarding compulsory pre-registration for
          their visa waiver program (“ESTA”). Australian passport holders will
          not be able to enter the United States without a valid ESTA (or visa).
          Please note, you may not meet the eligibility requirements of ESTA and
          may be required to obtain a visa.
        </p>
        <p className="margin-bottom-20">
          <strong>If you are travelling to Canada</strong> please see{" "}
          <a
            className="inline-flex"
            href="http://www.cic.gc.ca/english/visit/eta.asp"
            target="blank"
          >
            https://esta.cbp.dhs.gov
          </a>{" "}
          for important information regarding compulsory electronic travel
          authorization for visa-exempt foreign nationals (“ETA”). Australian
          passport holders will not be able to enter Canada without a valid ETA
          (or visa) from 15 March 2016. Please note, you may not meet the
          eligibility requirements of ETA and may be required to obtain a visa
          or permit.
        </p>
        <h3 className="bold">Travel Insurance</h3>
        <p className="margin-bottom-20">
          We strongly recommend that you take out appropriate travel insurance
          to cover your travel arrangements. Travel insurance is also strongly
          recommended by the Department of Foreign Affairs and Trade for all
          overseas travel. We are an authorised representative of Cover-More
          Insurance Services Pty Ltd (ABN 95 003 114 145, AFSL 241713)
          ("Cover-More") and receive financial and non-financial benefits when
          you buy travel insurance products through us. We and Cover-More are
          authorised to provide you with general advice about, and arrange,
          travel insurance products on behalf of the insurer, Zurich Australian
          Insurance Limited (ABN 13 000 296 640, AFSL 232507)
        </p>
        <h3 className="bold">Travel Advice</h3>
        <p className="margin-bottom-20">
          We recommend that you contact the Department of Foreign Affairs and
          Trade or visit their website at www.smartraveller.gov.au for general
          travel advice, as well as specific advice (including safety alert
          levels) relating to the destination you wish to visit. You can also
          register your travel plans with DFAT, so that you may be more easily
          contacted in an emergency.
        </p>
        <h3 className="bold">Health</h3>
        <p className="margin-bottom-20">
          You must ensure that you are aware of any health requirements and
          recommended precautions relevant to your travel and ensure that you
          carry all necessary vaccination documentation. In some cases, failure
          to present required vaccination documentation (e.g. proof of Yellow
          Fever vaccination) may deny you entry into a country. We recommend
          that you consult with your local doctor, travel medical service or
          specialist vaccination clinic before commencing your travel. General
          health advice for the destination you wish to visit is also available
          from DFAT (see{" "}
          <a
            className="inline-flex"
            href="https://www.smartraveller.gov.au"
            target="blank"
          >
            smartraveller.gov.au
          </a>
          ).
        </p>
        <h3 className="bold">Prices</h3>
        <p className="margin-bottom-20">
          All prices are subject to availability and can be withdrawn or varied
          without notice. The price is only guaranteed once paid for in full by
          you. Please note that prices quoted are subject to change. Price
          changes may occur by reason of matters outside our control which
          increase the cost of the product or service. Such factors include
          adverse currency fluctuations, fuel surcharges, taxes and airfare
          increases. Please contact us for up-to-date prices.
        </p>
        <h3 className="bold">Our Change and Cancellation Fees</h3>
        <p className="margin-bottom-20">
          Subject to your refund and remedy rights under the Australian Consumer
          Law, the following change and cancellation fees apply to all bookings:
        </p>
        <ul>
          <li>
            Changes to Domestic bookings will incur a fee of $50 per passenger
            per booking in addition to supplier fees.
          </li>
          <li>
            Cancellations to Domestic bookings will incur a fee of $50 per
            passenger per booking in addition to supplier fees.
          </li>
          <li>
            Changes to International bookings will incur a fee of $130 per
            passenger per booking in addition to supplier fees.
          </li>
          <li>
            Cancellations to International bookings will incur a fee of $200 per
            passenger per booking in addition to supplier fees.
          </li>
          <li>
            Name corrections will incur a fee of $50 per name correction in
            addition to supplier fees.
          </li>
          <li>
            If you wish to change or cancel flights booked online, you must
            contact our office directly.
          </li>
        </ul>
        <h3 className="bold">Supplier Change and Cancellation Fees</h3>
        <p className="margin-bottom-20">
          Cancelled bookings may also incur supplier fees, which can be up to
          100% of the cost of the booking, regardless of whether travel has
          commenced. Supplier fees may also apply where a booking is changed and
          when tickets or documents are re-issued. Where we incur any liability
          for a supplier cancellation fee for any booking which you change or
          cancel, you agree to indemnify us for the amount of that fee. Where
          you seek a refund for a cancelled booking for which payment has been
          made to the supplier, we will not provide a refund to you until we
          receive the funds from that supplier. The refund processing time could
          take approximately 6-8 weeks before we can refund the money back to
          the client.
        </p>
        <h3 className="bold">Payments by Credit Card</h3>
        <p className="margin-bottom-20">
          By selecting Credit Card as a means of payment{" "}
          <strong>
            you confirm your agreement to the following conditions
          </strong>
          . If you make any payment by Credit or debit Card a third party
          supplier fee may apply. If for any reason any travel service provider,
          including airlines, does not provide the services and or flights,
          which you have booked and paid for, Including but not limited to the
          grounding or insolvency of the Airline or travel provider, the
          liability is against that provider, and not against{" "}
          <strong>
            2C The World Travel and Cruise; My Travel Solution, Asia Travel
            Solution; and Philippine Travel Solution
          </strong>
          . Please look carefully to check if the price is quoted in Australian
          dollars (AUD). Most hotels and tours and services may be quoted in the
          local currency. If you are in doubt or uncertain please enquire before
          booking. If the price is quoted in a currency other than AUD your
          credit card may be charged in that currency and will be converted to
          AUD at the prevailing rate by your bank that may also charge a
          conversion fee, or may be converted by us using the prevailing selling
          rate on that day. For your convenience, some international low-cost
          carrier's prices have been converted to AUD. The amount charged to
          your card may vary due to currency fluctuations at the time the ticket
          is issued. All fares quoted and charged to you are based on fares
          provided to us at the time of quote or ticketing. In the event that
          the airline should impose a higher fare that was paid either before or
          after actual travel or any other reason whatsoever, including but not
          limited to, no show, you agree and authorize us to charge your credit
          card with the additional amount charged to us by the airline or
          provider, and not to dispute this charge with your bank. You
          understand that we act solely as agent for you with the airline and
          are not the travel provider. Any dispute you may have is between you
          and the airline, we will assist you with any such dispute to the best
          of our ability by providing all documentation relating to this booking
          we may have.
        </p>
        <p className="margin-bottom-20">
          Payments by Credit Card and Debit Card: (Effective as of 01 January
          2020)
        </p>
        <p className="margin-bottom-20">Credit card surcharges of:</p>
        <p className="margin-bottom-20">1.50% for Visa Credit Card</p>
        <p className="margin-bottom-20">1.50% for Visa Debit Card</p>
        <p className="margin-bottom-20">1.50% for MasterCard Credit Card</p>
        <p className="margin-bottom-20">1.50% for MasterCard Debit Card</p>
        <p className="margin-bottom-20">3.00% for American Express</p>
        <p className="margin-bottom-20">
          You authorise us to charge all fees incurred by you in relation to the
          services provided to the credit card or debit card designated by you.
          If payment is not received from the card issuer or its agents for any
          reason, you agree to pay us all amounts due immediately on demand.
        </p>
        <h3 className="bold">Taxes</h3>
        <p className="margin-bottom-20">
          Airline taxes are subject to change and are confirmed at the time your
          airline ticket is issued. There may also be a local tax charged at
          some airports.
        </p>
        <h3 className="bold">Service Guarantees</h3>
        <p className="margin-bottom-20">
          Our booking and advisory services come with a guarantee that:
        </p>
        <ul>
          <li>they will be provided with due care and skill;</li>
          <li>they will be reasonably fit for the specified purpose; </li>
          <li>
            they can reasonably be expected to achieve the desired result; and
          </li>
          <li>they will be provided within a reasonable time.</li>
        </ul>
        <p className="margin-bottom-20">
          If we fail to meet any of these guarantees, you have rights under the
          Australian Consumer Law.
        </p>
        <h3 className="bold">Agency</h3>
        <p className="margin-bottom-20">
          We act as an agent for, and sell various travel related products as
          agent on behalf of, numerous transport, accommodation and other
          service providers, such as airlines, coach, rail and cruise line
          operators, as well as all of our wholesalers. Any services we provide
          to you are collateral to that agency relationship. Our obligation to
          you is to (and you expressly authorise us to) make travel bookings on
          your behalf and to arrange relevant contracts between you and travel
          service providers. We exercise care in the selection of reputable
          service providers, but we are not ourselves a provider of travel
          services and have no control over, or liability for, the services
          provided by third parties. All bookings are made on your behalf
          subject to the terms and conditions, including conditions of carriage
          and limitations of liability, imposed by these service providers. We
          can provide you with copies of the relevant service provider terms and
          conditions on request. Your legal rights in connection with the
          provision of travel services are against the specific provider and,
          except to the extent a problem is caused by fault on our part, are not
          against us. Specifically, if for any reason (excluding fault on our
          part) any travel service provider is unable to provide the services
          for which you have contracted, your rights are against that provider
          and not against us.
        </p>
        <h3 className="bold">Liability</h3>
        <p className="margin-bottom-20">
          To the extent permitted by law, neither{" "}
          <strong>CHRISTOSCENT PTY LTD</strong> nor any of its related bodies
          corporate, directors, employees or agents accept any liability in
          contract, tort or otherwise for any injury, damage, loss (including
          consequential loss), delay, additional expense or inconvenience caused
          directly or indirectly by the acts, omissions or default, whether
          negligent or otherwise, of third party providers over whom we have no
          direct control, force majeure or any other event which is beyond our
          control or which is not preventable by reasonable diligence on our
          part. Our liability will also be limited to the extent that any
          relevant international conventions, for example the Montreal
          Convention in respect of travel by air, the Athens Convention in
          respect of travel by sea, the Berne Convention in respect of travel by
          rail and the Paris Convention in respect of the provision of
          accommodation, limit the amount of compensation which can be claimed
          for death, injury, or delay to passengers and loss, damage and delay
          to luggage. Under circumstances where our liability cannot be excluded
          and where liability may be lawfully limited, such liability is limited
          to the remedies required of us under applicable law (including the
          Australian Consumer Law). This liability clause is subject to your
          rights under the Australian Consumer Law and nothing in these terms
          and conditions is intended to limit any rights you may have under the
          Competition and Consumer Act 2010 (Cth).
        </p>
        <h3 className="bold">Special Requirements</h3>
        <p className="margin-bottom-20">
          Please contact us, regarding any special requirements you may have for
          your travel arrangements such as special meal and seating requests,
          room type or disabled access.
        </p>
        <h3 className="bold">Frequent Flyer</h3>
        <p className="margin-bottom-20">
          When booking, please insert frequent flyer membership details (or
          other applicable loyalty program details) in the space provided for
          inclusion in your booking. Please check your frequent flyer program
          (or other applicable loyalty program) for the specific terms of your
          membership. We cannot guarantee that the supplier will credit you with
          points for your booking.
        </p>
        <h3 className="bold">Travel Documents</h3>
        <p className="margin-bottom-20">
          Travel documents include (without limitation) airline tickets, hotel
          vouchers, tour vouchers or any other document (whether in electronic
          form or otherwise) used to confirm an arrangement with a service
          provider. Travel documents may be subject to certain conditions and/or
          restrictions including (without limitation) being non-refundable,
          non-date-changeable and subject to cancellation and/or amendment fees.
          Travel documents cannot be transferred to another person to use. All
          airline tickets must be issued in the name of the passport/photo
          identity holder. An incorrect name on a booking may result in an
          inability to use that booking and the booking being cancelled. Please
          review your travel documentation carefully and advise us immediately
          of any errors in names, dates or timings. You should print out and
          retain your travel documents as provided to you by the website (or in
          a follow up email we send you).
        </p>
        <h3 className="bold">Schedule Changes</h3>
        <p className="margin-bottom-20">
          We recommend that you contact the airline or our office to confirm
          your scheduled departure time 72 hours prior to your flight.
        </p>
        <h3 className="bold">Privacy Policy</h3>
        <p className="margin-bottom-20">
          We are committed to protecting your personal information and agree to
          handle your personal information in accordance with our Privacy
          Policy, which is available online at{" "}
          <a
            className="inline-flex"
            href="https://www.mytravelsolution.com.au/privacypolicy"
            target="blank"
          >
            www.mytravelsolution.com.au/privacypolicy
          </a>
          . By providing personal information to us, you agree that our Privacy
          Policy will apply to how we handle your personal information and you
          consent to us collecting, using and disclosing your personal
          information as detailed in our Privacy Policy. In particular, you
          agree that in certain circumstances (such as where you request us to
          book international travel for you), we are permitted to disclose your
          personal information to overseas recipients. Such recipients may
          include the overseas travel service providers (e.g. airlines,
          accommodation or tour providers) with whom you make a booking. These
          travel service providers will in most cases receive your personal
          information in the country in which they will provide the services to
          you or in which their business is based. We may also disclose your
          personal information to our overseas related entities and to service
          providers who perform services for us within and outside of Australia.
          Generally, we will only disclose your personal information to these
          persons in connection with facilitation of your travel booking and/or
          to enable the performance of administrative and technical services by
          them on our behalf. Where we disclose your personal information to any
          person (including any overseas recipients), you agree that we will not
          be required to ensure that person’s compliance with Australian privacy
          laws or otherwise be accountable for how they handle your personal
          information. When used above, “disclose” includes to transfer, share,
          send, or otherwise make available or accessible to another person or
          entity.
        </p>
        <h3 className="bold">Monies Not Held On Trust</h3>
        <p className="margin-bottom-20">
          All monies paid by you to us will be the property of{" "}
          <strong>CHRISTOSCENT PTY LTD</strong> and will be a debt due and
          payable to the travel service provider once the services to which the
          money relates have been provided (except for monies paid for flights
          with an IATA airline, which might be held on trust for that IATA
          airline). You agree and acknowledge that such monies will not be held
          by us on trust for and on behalf of you and we may hold such monies in
          any account as we see fit, including with our own and/or other
          customer monies.
        </p>
        <h3 className="bold">Governing Law</h3>
        <p className="margin-bottom-20">
          If any dispute arises between you and us, the laws of Australia will
          apply. You irrevocably and unconditionally submit to the exclusive
          jurisdiction of the courts of Australia, and waive any right that you
          may have to object to an action being brought in those courts.
        </p>
        <h3 className="bold">Acknowledgement</h3>
        <p className="margin-bottom-20">
          You acknowledge that you are 18 years of age or older and that you
          understand and agree with the above Booking Terms and Conditions and
          our Privacy Policy.
        </p>
      </div>
    </PageWrapper>
  );
};

export default TermsAndConditionsPage;
