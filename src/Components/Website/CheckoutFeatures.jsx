import React from "react";
import Slider from "react-slick";
import cf from "../../assets/img/cf-11.svg";
import cf1 from "../../assets/img/cf-1.svg";
import cf2 from "../../assets/img/cf-2.svg";
import cf4 from "../../assets/img/cf-4.svg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    id: 1,
    image: cf4,
    title: "Inventory Management",
    description:
      "Eliminate repetitive tasks and reduce mistakes with booking reminders, directions, payment requests and more based on easy-to-create rules.",
    buttonColor: "bg-orange",
    cardColor: "bg-exxOrange",
    link: "/inventory-management",
  },
  {
    id: 2,
    image: cf2,
    title: "Checklists for Cleaning Operations",
    description:
      "Eliminate repetitive tasks and reduce mistakes with booking reminders, directions, payment requests and more based on easy-to-create rules.",
    buttonColor: "bg-yellow",
    cardColor: "bg-exxYellow",
    link: "/task-and-checklist",
  },
  {
    id: 3,
    image: cf1,
    title: "Smart Devices Integration",
    description:
      "Eliminate repetitive tasks and reduce mistakes with booking reminders, directions, payment requests and more based on easy-to-create rules.",
    buttonColor: "bg-dgreen",
    cardColor: "bg-exxGreen",
    link: "/smart-devices",
  },
  {
    id: 4,
    image: cf,
    title: "Unified Inbox",
    description:
      "A single destination for guest communication synched with your listing data across all channels.",
    buttonColor: "bg-blue",
    cardColor: "bg-exxBlue",
    link: "/unified-inbox",
  },
];

function CheckoutFeatures() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="commCards-sec py-5 bg-exxxSky">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">
          Check out these other features
        </h2>
        <Slider {...sliderSettings}>
          {features.map((feature) => (
            <div className="px-3" key={feature.id}>
              <div
                className={`d-flex flex-column align-items-stretch ${feature.cardColor} p-4 rounded-5 h-100 shadow-cus`}
              >
                <div
                  className={`${feature.buttonColor} d-flex justify-content-center mx-auto mx-sm-0 align-items-center p-3 rounded-3 coreF-card1 mb-4`}
                >
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="flex-grow-1 mb-5">
                  <h5 className="mb-0 text-center text-sm-start fixed-heading fw-semi">
                    {feature.title}
                  </h5>
                  <p className="mb-0 mt-1 text-center text-sm-start fixed-text">
                    {feature.description}
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <Link
                    to={feature.link}
                    className={`border-0 commCard-btn d-block text-decoration-none shadow text-white fw-semi ${feature.buttonColor} w-100`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CheckoutFeatures;
