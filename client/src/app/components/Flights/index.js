import featureImages from "../../assets/images/feature_images";
import logos from "../../assets/images/logos/airlines";

// https://www.world-airport-codes.com
// https://www.iata.org/publications/Pages/code-search.aspx

const flights = [
  {
    expiry: null,
    name: "Cebu Pacific Sale",
    featuredImage: featureImages.philippines_1,
    airline: {
      airlineName: "Cebu Pacific",
      airlineCode: "5J",
      airlineImage: logos.cebu_pacific_logo
    },
    region: "asia",
    origin: "Melbourne",
    destination: "Manila",
    returnFlight: true,
    price: 469,
    travelPeriods: [
      {
        from: "2020-02-01",
        to: "2020-06-01"
      }
    ],
    remarks: ["Subject to availability", "Black out periods apply"]
  },
  {
    expiry: "2019-06-08",
    name: "Qantas Sale",
    featuredImage: featureImages.philippines_2,
    airline: {
      airlineName: "Qantas",
      airlineCode: "QF",
      airlineImage: logos.qantas_logo
    },
    region: "asia",
    origin: "Melbourne",
    destination: "Manila",
    returnFlight: true,
    price: 719,
    travelPeriods: [
      {
        from: "2020-02-01",
        to: "2020-08-01"
      }
    ],
    remarks: ["Subject to availability", "Black out periods apply"]
  }
];

export default flights;
