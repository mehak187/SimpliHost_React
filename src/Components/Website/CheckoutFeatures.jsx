import React from "react";
import cf from "../../assets/img/cf-11.svg";
import cf1 from "../../assets/img/cf-1.svg";
import cf2 from "../../assets/img/cf-2.svg";
import cf4 from "../../assets/img/cf-4.svg";

const features = [
  {
    id: 1,
    image: cf,
    title: "Unified Inbox",
    description: "A single destination for guest communication synched with your listing data across all channels.",
    buttonColor: "bg-blue",
    cardColor: "bg-exxBlue",
  },
  {
    id: 2,
    image: cf1,
    title: "Smart Devices Integration",
    description: "Eliminate repetitive tasks and reduce mistakes with booking reminders, directions, payment requests and more based on easy-to-create rules.",
    buttonColor: "bg-dgreen",
    cardColor: "bg-exxGreen",
  },
  {
    id: 3,
    image: cf2,
    title: "Checklists for Cleaning Operations",
    description: "Eliminate repetitive tasks and reduce mistakes with booking reminders, directions, payment requests and more based on easy-to-create rules.",
    buttonColor: "bg-yellow",
    cardColor: "bg-exxYellow",
  },
  {
    id: 4,
    image: cf4,
    title: "Inventory Management",
    description: "Eliminate repetitive tasks and reduce mistakes with booking reminders, directions, payment requests and more based on easy-to-create rules.",
    buttonColor: "bg-orange",
    cardColor: "bg-exxOrange",
  },
];

function CheckoutFeatures() {
  return (
    <section className="commCards-sec py-5 bg-exxxSky">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Check out these other features</h2>
        <div className="row">
          {features.map((feature) => (
            <div className="col-lg-3 col-sm-6 mb-4" key={feature.id}>
              <div className={`${feature.cardColor} p-4 rounded-5 h-100 d-flex flex-column`}>
                <div className={`${feature.buttonColor} d-flex justify-content-center mx-auto mx-sm-0 align-items-center p-3 rounded-3 coreF-card1 mb-4`}>
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="mb-5">
                  <h5 className="mb-3 text-center text-sm-start fw-semi">{feature.title}</h5>
                  <p className="mb-0 text-center text-sm-start">{feature.description}</p>
                </div>
                <div className="text-center mt-auto">
                  <button type="button" className={`border-0 commCard-btn ${feature.buttonColor} w-100`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CheckoutFeatures;
