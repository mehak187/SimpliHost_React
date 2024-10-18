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
  return (
    <div>
      <section className="top mt-5">
        <div className="container">
          <div className="d-sm-flex d-row justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="furnished-flower">
                <img src={futnished} alt="Flower" className="w-100" />
              </div>
              <div className="ms-3">
                <p className="mb-0 light-black">Listed By:</p>
                <p className="mb-0  fw-bold">John Doberman</p>
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
        </div>
      </section>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="furnushedapartment-size2 h-100">
                <img src={apartment1} alt="Apartment" class="rounded-4" />
              </div>
            </div>
            <div class="col-xl-6 mt-4 mt-xl-0">
              <div class="row">
                <div class="col-md-6">
                  <div class="furnushedapartment-size2 h-100">
                    <img src={apartment3} alt="Apartment" class="rounded-4" />
                  </div>
                </div>
                <div class="col-md-6 mt-4 mt-md-0">
                  <div class="furnushedapartment-size2 h-100">
                    <img src={apartment2} alt="Apartment" class="rounded-4" />
                  </div>
                </div>
                <div class="col-md-6 mt-4">
                  <div class="furnushedapartment-size2 h-100">
                    <img src={apartment4} alt="Apartment" class="rounded-4" />
                  </div>
                </div>
                <div class="col-md-6 mt-4">
                  <div class="furnushedapartment-size2 h-100">
                    <img src={apartment5} alt="Apartment" class="rounded-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-6">
              <div class="d-flex align-items-center justify-content-between p-3 well-funished">
                <p class="mb-0 fw-bold fs-5 text-lgrey">Well Furnished Apartment</p>
                <div className="d-flex align-items-center">
                  <FaHeart className="me-2 text-danger fs-4"/>
                  <Link to="#">
                    <FaShareNodes className="me-2 text-black fs-4"/>
                  </Link>
                  <i class="fa-solid fa-share-nodes fa-size "></i>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-4 col-sm-6">
                  <div class="funished-btn h-100 py-3 px-4 d-flex align-items-center">
                    <div class="funishedpic-size">
                      <img src={funishedPic1} alt="Funished" class="w-100" />
                    </div>
                    <p class="mb-0 ms-2 fw-bold">3 Bedrooms</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 mt-4 mt-sm-0">
                  <div class="funished-btn h-100 py-3 px-4 d-flex align-items-center">
                    <div class="funishedpic-size">
                      <img
                        src={apartmentBathroom}
                        alt="Funished"
                        class="w-100"
                      />
                    </div>
                    <p class="mb-0 ms-2 fw-bold">3 Bathrooms</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 mt-4 mt-md-0">
                  <div class="funished-btn h-100 py-3 px-4 d-flex align-items-center">
                    <div class="funishedpic-size">
                      <img src={apartmentSleep} alt="Funished" class="w-100" />
                    </div>
                    <p class="mb-0 ms-2 fw-bold">Sleeps 10</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 mt-4">
                  <div class="funished-btn h-100 py-3 px-4 d-flex align-items-center">
                    <div class="funishedpic-size">
                      <img src={apartmentCar} alt="Funished" class="w-100" />
                    </div>
                    <p class="mb-0 ms-2 fw-bold">3 Cars/2 Bikes</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 mt-4">
                  <div class="funished-btn h-100 py-3 px-4 d-flex align-items-center">
                    <div class="funishedpic-size">
                      <img src={apartmentPaws} alt="Funished" class="w-100" />
                    </div>
                    <p class="mb-0 ms-2 fw-bold">Pets</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 mt-4">
                  <div class="funished-btn h-100 py-3 px-4 d-flex align-items-center">
                    <div class="funishedpic-size">
                      <img src={apartmentSquare} alt="Funished" class="w-100" />
                    </div>
                    <p class="mb-0 ms-2 fw-bold">4000 sq ft</p>
                  </div>
                </div>
              </div>
              <p class="mb-0 fs-4 fw-semi mt-3 black-color">Apartment Description</p>
              <p class="mb-0 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p class="mb-0 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p class="mb-0 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p class="mb-0 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div class="row mt-3">
                <p class="fw-semi fs-4 text-lgrey">Offered Amenities</p>
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={kitchen} alt="Kitchen" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Kitchen</p>
                  </div>
                </div>
                <div class="col-sm-6 mt-4 mt-sm-0">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={tv} alt="Kitchen" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Television with Netflix</p>
                  </div>
                </div>
                <div class="col-sm-6  mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img
                        src={airconditioner}
                        alt="Aircondition"
                        class="w-100"
                      />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Air Conditioner</p>
                  </div>
                </div>
                <div class="col-sm-6  mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={wifi} alt="Wifi" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Free Wireless Internet</p>
                  </div>
                </div>
                <div class="col-sm-6  mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={washer} alt="Washer" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Washer</p>
                  </div>
                </div>
                <div class="col-sm-6  mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={balcony} alt="Balcony" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Balcony or Patio</p>
                  </div>
                </div>
                <div class="col-sm-6  mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={emerge} alt="Emerge" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Emerge Door Code</p>
                  </div>
                </div>
                <div class="col-sm-6  mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={pets} alt="pets" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Pets Yes Allow</p>
                  </div>
                </div>
                <p class="fw-semi fs-4 mt-4 text-lgrey">House Rules</p>
                <div class="col-md-4 col-sm-6">
                  <p class="mb-0 fs-5 fw-semi">Pets</p>
                  <div className="d-flex my-2 align-items-center pe-3 ">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials"  />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 mt-4 mt-sm-0">
                  <p class="mb-0 fs-5 fw-semi">Smoking</p>
                  <div className="d-flex my-2 align-items-center pe-3 ">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials"  defaultChecked/>
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 mt-4 mt-md-0">
                  <p class="mb-0 fs-5 fw-semi">Events/Parties</p>
                  <div className="d-flex my-2 align-items-center pe-3 ">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials"  />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                </div>
                <p class="fw-semi text-lgrey fs-4 mt-4 mb-0">Safety and Hygiene</p>
                <div className="row mt-4">
                <div class="col-sm-6 ">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={cleaning} alt="Kitchen" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Daily Cleaning</p>
                  </div>
                </div>
                <div class="col-sm-6 mt-4 mt-sm-0">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={fire} alt="Kitchen" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Fire Extinguishers</p>
                  </div>
                </div>
                <div class="col-sm-6 mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={discinfion} alt="Aircondition" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">
                      Disinfections and Sterilizations
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 mt-4">
                  <div class="d-flex align-items-center">
                    <div class="offeredpic-size">
                      <img src={smoke} alt="Wifi" class="w-100" />
                    </div>
                    <p class="mb-0 fs-5 ms-3">Smoke Detectors</p>
                  </div>
                </div>
                </div>
                <div class="col-12  mt-4">
                  <div class="row">
                    <div cl>
                      <p class="fw-semi fs-4 text-lgrey">Safety and Hygiene</p>
                      <div class="col-5 mt-2">
                        <div class="d-flex align-items-center">
                          <div class="contactpic-size">
                            <img src={email} alt="contact" class="w-100 p-2" />
                          </div>
                          <div class="ms-3">
                            <p class="mb-0 fw-semi">Email</p>
                            <p class="mb-0 fw-semi">example@gmail.com</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-5 mt-2">
                        <div class="d-flex align-items-center">
                          <div class="contactpic-size">
                            <img src={call} alt="Cell" class="w-100 p-2" />
                          </div>
                          <div class="ms-3">
                            <p class="mb-0 fw-semi">Phone</p>
                            <p class="mb-0 fw-semi">+12345679</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="myy-shadow p-2 mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.1837066589596!2d74.51258247624337!3d32.46777779972452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebf05050a257%3A0x65c6ed11df82a794!2sFabulous%20Technology%20Solutions!5e0!3m2!1sen!2s!4v1728309897887!5m2!1sen!2s"
                      width="600"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="w-100"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <p>js</p>
            </div>
            <div class="col-8">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex align-items-center mt-3">
                    <p className="mb-0 fw-semi">Amenities</p>
                    <div
                      className="progress w-75 mx-3"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar custom-progress-bar"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="mb-0 fw-semi">5.0</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex align-items-center mt-3">
                    <p className="mb-0 fw-semi">Hygiene</p>
                    <div
                      className="progress w-75 mx-3"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar custom-progress-bar"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="mb-0 fw-semi">5.0</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex align-items-center mt-3">
                    <p className="mb-0 fw-semi">Communication</p>
                    <div
                      className="progress w-75 mx-3"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar custom-progress-bar"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="mb-0 fw-semi">5.0</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex align-items-center mt-3">
                    <p className="mb-0 fw-semi">Location of Property</p>
                    <div
                      className="progress w-75 mx-3"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar custom-progress-bar"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="mb-0 fw-semi">5.0</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex align-items-center mt-3">
                    <p className="mb-0 fw-semi">Value for Money</p>
                    <div
                      className="progress w-75 mx-3"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar custom-progress-bar"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="mb-0 fw-semi">5.0</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-10 mt-4">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="review-main p-2 rounded-3">
                    <div class="d-sm-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <div class="deatilreview-size">
                          <img
                            src={reviewPerson}
                            alt="Person Review"
                            class="w-100"
                          />
                        </div>
                        <div class="ms-2">
                          <p class="mb-0 fw-semi">Aayush</p>
                          <p class="mb-0 light-black">Pakistan</p>
                        </div>
                      </div>
                      <div class="d-flex mt-3 mt-sm-0">
                        <div>
                          <FaStar className="fa-yellow"/>
                          <FaStar className="fa-yellow"/>
                          <FaStar className="fa-yellow"/>
                          <FaStar className="fa-yellow"/>
                          <FaStar className="fa-last"/>
                        </div>
                        <p class="mb-0 light-black ms-3">4.0</p>
                      </div>
                    </div>
                    <p class="mb-0 light-black mt-2">January 2024</p>
                    <p class="mb-0 light-black mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div class="mt-2">
                      <a href="#" class="black-color  fw-semi">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="mt-4 ">
                  <button type="button" class="deatilreview-btn font-12">
                    Show All 100 Reviews
                  </button>
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
