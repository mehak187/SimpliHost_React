import React from "react";
import listingdetail from "../../assets/img/listingdetail-pic.svg";
import futnished from "../../assets/img/futnished-flower.svg";
import apartment1 from "../../assets/img/apartment1.svg";
import apartment2 from "../../assets/img/apartment2.svg";
import apartment3 from "../../assets/img/apartment3.svg";
import apartment4 from "../../assets/img/apartment-stair.svg";
import apartment5 from "../../assets/img/apartment5.svg";
import funishedPic1 from "../../assets/img/funished-pic1.svg";
import apartmentBathroom from "../../assets/img/apartment-bathroom.svg";
import apartmentSleep from "../../assets/img/apartment-sleep.svg";
import apartmentCar from "../../assets/img/apartment-car.svg";
import apartmentPaws from "../../assets/img/apartment-paws.svg";
import apartmentSquare from "../../assets/img/apartment-square.svg";

import pets from "../../assets/img/offered-pets.svg";
import emerge from "../../assets/img/offered-emerge.svg";
import balcony from "../../assets/img/offered-balcony.svg";
import washer from "../../assets/img/offered-washer.svg";
import wifi from "../../assets/img/offered-wifi.svg";
import airconditioner from "../../assets/img/offered-airconditionar.svg";
import tv from "../../assets/img/offered-tv.svg";
import kitchen from "../../assets/img/offered-kitchen.svg";

import cleaning from "../../assets/img/safety-cleaning.svg";
import discinfion from "../../assets/img/safety-discinfion.svg";
import smoke from "../../assets/img/safety-smoke.svg";
import fire from "../../assets/img/safety-fire.svg";

import reviewPerson from "../../assets/img/reviewdetail.svg";
import email from "../../assets/img/contact-email.svg";
import call from "../../assets/img/contact-call.svg";

import { FaHeart } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ListingDetails() {
  const furnishedItems = [
    { imgSrc: funishedPic1, altText: "Furnished", description: "3 Bedrooms" },
    {
      imgSrc: apartmentBathroom,
      altText: "Furnished",
      description: "3 Bathrooms",
    },
    { imgSrc: apartmentSleep, altText: "Furnished", description: "Sleeps 10" },
    {
      imgSrc: apartmentCar,
      altText: "Furnished",
      description: "3 Cars/2 Bikes",
    },
    { imgSrc: apartmentPaws, altText: "Furnished", description: "Pets" },
    {
      imgSrc: apartmentSquare,
      altText: "Furnished",
      description: "4000 sq ft",
    },
  ];
  const amenities = [
    { imgSrc: kitchen, altText: "Kitchen", description: "Kitchen" },
    {
      imgSrc: tv,
      altText: "Television",
      description: "Television with Netflix",
    },
    {
      imgSrc: airconditioner,
      altText: "Aircondition",
      description: "Air Conditioner",
    },
    { imgSrc: wifi, altText: "Wifi", description: "Free Wireless Internet" },
    { imgSrc: washer, altText: "Washer", description: "Washer" },
    { imgSrc: balcony, altText: "Balcony", description: "Balcony or Patio" },
    { imgSrc: emerge, altText: "Emerge", description: "Emerge Door Code" },
    { imgSrc: pets, altText: "Pets", description: "Pets Yes Allow" },
  ];
  const houseRules = [
    { label: "Pets", defaultChecked: false },
    { label: "Smoking", defaultChecked: true },
    { label: "Events/Parties", defaultChecked: false },
  ];
  const safetyAndHygiene = [
    { label: "Daily Cleaning", imgSrc: cleaning, altText: "Cleaning" },
    { label: "Fire Extinguishers", imgSrc: fire, altText: "Fire Extinguisher" },
    {
      label: "Disinfections and Sterilizations",
      imgSrc: discinfion,
      altText: "Disinfection",
    },
    { label: "Smoke Detectors", imgSrc: smoke, altText: "Smoke Detector" },
  ];
  const ratings = [
    { label: "Amenities", progress: 75, score: 5.0 },
    { label: "Hygiene", progress: 75, score: 5.0 },
    { label: "Communication", progress: 75, score: 5.0 },
    { label: "Location of Property", progress: 75, score: 5.0 },
    { label: "Value for Money", progress: 75, score: 5.0 },
  ];
  const reviews = [
    {
      name: "Aayush",
      location: "Pakistan",
      rating: 4.0,
      date: "January 2024",
      reviewPerson: reviewPerson,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Aayush",
      location: "Pakistan",
      rating: 4.0,
      date: "January 2024",
      reviewPerson: reviewPerson,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Aayush",
      location: "Pakistan",
      rating: 4.0,
      date: "January 2024",
      reviewPerson: reviewPerson,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Aayush",
      location: "Pakistan",
      rating: 4.0,
      date: "January 2024",
      reviewPerson: reviewPerson,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Aayush",
      location: "Pakistan",
      rating: 4.0,
      date: "January 2024",
      reviewPerson: reviewPerson,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="furnished-flower">
                <img src={futnished} alt="Flower" className="w-100" />
              </div>
              <div className="ms-3">
                <p className="mb-0 text-lgrey ">Listed By:</p>
                <p className="mb-0 text-lgrey fw-bold">John Doberman</p>
              </div>
              <div className="listingdeatil-size ms-3">
                <img src={listingdetail} alt="Apartment" />
              </div>
            </div>
            <div className="mt-4  mt-sm-0">
              <Link
                to="/listing-photos"
                type="button"
                className="listingshow-all-btn text-decoration-none"
              >
                Show all photos
              </Link>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-6 my-2">
                <img src={apartment1} alt="Apartment" className="rounded-4 w-100 h-100 object-cover" />
            </div>
            <div className="col-xl-6 ">
              <div className="row">
                <div className="col-md-6 my-2">
                    <img src={apartment3} alt="Apartment" className="rounded-4 w-100 h-300 object-cover" />
                </div>
                <div className="col-md-6 my-2">
                    <img src={apartment2} alt="Apartment" className="rounded-4 w-100 h-300 object-cover" />
                </div>
                <div className="col-md-6 my-2">
                    <img src={apartment4} alt="Apartment" className="rounded-4 w-100 h-300 object-cover" />
                </div>
                <div className="col-md-6 my-2">
                    <img src={apartment5} alt="Apartment" className="rounded-4 w-100 h-300 object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="d-flex align-items-center justify-content-between p-3 well-funished">
                <p className="mb-0 fw-bold fs-5 text-lgrey">
                  Well Furnished Apartment
                </p>
                <div className="d-flex align-items-center">
                  <FaHeart className="me-2 text-danger fs-4" />
                  <Link to="#">
                    <FaShareNodes className="me-2 text-black fs-4" />
                  </Link>
                  <i className="fa-solid fa-share-nodes fa-size "></i>
                </div>
              </div>
              <div className="row mt-3">
                {furnishedItems.map((item, index) => (
                  <div
                    className="col-xxl-4 col-lg-6 col-md-4 col-sm-6 my-2"
                    key={index}
                  >
                    <div className="funished-btn h-100 py-3 px-4 d-flex align-items-center">
                      <div className="funishedpic-size">
                        <img
                          src={item.imgSrc}
                          alt={item.altText}
                          className="w-100"
                        />
                      </div>
                      <p className="mb-0 ms-2 fw-bold text-lgrey">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="mb-0 fs-4 fw-semi mt-3 text-lgrey">
                  Apartment Description
                </h2>
                <p className="mb-0 mt-2 text-lgrey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-0 mt-2 text-lgrey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-0 mt-2 text-lgrey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-0 mt-2 text-lgrey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="mt-3">
                <h2 className="fw-semi fs-4 text-lgrey">Offered Amenities</h2>
                <div className="row">
                  {amenities.map((amenity, index) => (
                    <div
                      className="col-xl-6 col-lg-12 col-md-6 my-2"
                      key={index}
                    >
                      <div className="d-flex align-items-center">
                        <div className="offeredpic-size">
                          <img
                            src={amenity.imgSrc}
                            alt={amenity.altText}
                            className="w-100"
                          />
                        </div>
                        <p className="mb-0 fs-5 ms-3 text-lgrey">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="fw-semi fs-4 text-lgrey">House Rules</h2>
                <div className="row">
                  {houseRules.map((rule, index) => (
                    <div className="col-md-4 col-sm-6 my-2" key={index}>
                      <p className="mb-0 fs-5 fw-semi text-lgrey">
                        {rule.label}
                      </p>
                      <div className="d-flex my-2 align-items-center pe-3">
                        <label className="me-2">No</label>
                        <label className="switch me-2">
                          <input
                            type="checkbox"
                            readOnly
                            id={rule.label.replace(/\s+/g, "")}
                            checked={rule.defaultChecked}
                          />
                          <span className="slider round"></span>
                        </label>
                        <label className="me-2">Yes</label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="fw-semi text-lgrey fs-4 mb-0">
                  Safety and Hygiene
                </h2>
                <div className="row mt-3">
                  {safetyAndHygiene.map((item, index) => (
                    <div className="col-sm-6 my-2" key={index}>
                      <div className="d-flex align-items-center">
                        <div className="offeredpic-size">
                          <img
                            src={item.imgSrc}
                            alt={item.altText}
                            className="w-100"
                          />
                        </div>
                        <p className="mb-0 fs-6 ms-3 text-lgrey">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div className="border border-1 rounded-3 px-3 py-3">
                  <h2 className="fw-semi fs-5 text-lgrey mb-0">
                    Host Contact Information
                  </h2>
                  <div className="row">
                    <div className="col-md-6 col-xxl-5 mt-2">
                      <div className="d-flex align-items-center">
                        <div className="contactpic-size">
                          <img src={email} alt="contact" className="p-2" />
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 fw-semi text-lgrey">Email</p>
                          <p className="mb-0 fw-semi text-lgrey">
                            example@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xxl-5 mt-2">
                      <div className="d-flex align-items-center">
                        <div className="contactpic-size">
                          <img src={call} alt="Cell" className="p-2" />
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 fw-semi text-lgrey">Phone</p>
                          <p className="mb-0 fw-semi text-lgrey">+12345679</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="myy-shadow border border-1 rounded-3 p-2 mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.1837066589596!2d74.51258247624337!3d32.46777779972452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebf05050a257%3A0x65c6ed11df82a794!2sFabulous%20Technology%20Solutions!5e0!3m2!1sen!2s!4v1728309897887!5m2!1sen!2s"
                    width="600"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-3 w-100"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            </div>
            <div className=" mt-4">
              <div className="mt-4">
                <div className="d-flex align-items-center">
                  <h2 className="fw-semi fs-5 me-3 text-lgrey mb-0">Reviews</h2>
                  <div className="d-flex align-items-center">
                    <FaStar className="fa-yellow me-2 fs-5" />
                    <p className="mb-0">5.00</p>
                  </div>
                </div>
                <div className="row">
                  {ratings.map((item, index) => (
                    <div className="col-sm-6" key={index}>
                      <div className="d-flex flex-wrap align-items-center mt-3">
                        <div className="col-lg-4 col-12">
                          <p className="mb-0 fw-semi text-lgrey">
                            {item.label}
                          </p>
                        </div>
                        <div className="col-lg-8 col-12 d-flex align-items-center">
                          <div
                            className="progress h-100 w-100 me-2 me-lg-3"
                            role="progressbar"
                            aria-label={`${item.label} progress`}
                            aria-valuenow={item.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar py-1 custom-progress-bar"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <p className="mb-0 fw-semi text-lgrey">
                            {item.score.toFixed(1)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row mt-4">
                {reviews.map((review, index) => (
                  <div className="col-lg-4 col-md-6 my-3" key={index}>
                    <div className="review-main p-3 rounded-3">
                      <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="deatilreview-size">
                            <img
                              src={review.reviewPerson}
                              alt="Person Review"
                              className="w-100"
                            />
                          </div>
                          <div className="ms-2">
                            <p className="mb-0 fw-semi text-lgrey">
                              {review.name}
                            </p>
                            <p className="mb-0 text-lgrey">{review.location}</p>
                          </div>
                        </div>
                        <div className="d-flex mt-3 mt-sm-0">
                          <div>
                            {[...Array(5)].map((star, i) => (
                              <FaStar
                                key={i}
                                className={
                                  i < Math.floor(review.rating)
                                    ? "fa-yellow"
                                    : "fa-last"
                                }
                              />
                            ))}
                          </div>
                          <p className="mb-0 text-lgrey ms-3">
                            {review.rating}
                          </p>
                        </div>
                      </div>
                      <p className="mb-0 text-lgrey mt-2">{review.date}</p>
                      <p className="mb-0 text-lgrey mt-3">{review.review}</p>
                      <div className="mt-2">
                        <Link to="#" className="text-lgrey fw-semi">
                          See more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <Link to="#" className="deatilreview-btn text-decoration-none font-12">
                    Show All 100 Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingDetails;
