import React from "react";
import heroimg from "../../assets/img/hero-img.svg";
import feature1 from "../../assets/img/feature1.svg";
import smartdevice from "../../assets/img/smartdevice.svg";
import task from "../../assets/img/task.svg";
import automatedguest from "../../assets/img/automatedguest.svg";
import maintance from "../../assets/img/maintance.svg";
import inventery from "../../assets/img/inventery.svg";
import automation from "../../assets/img/automation.svg";
import directbooking from "../../assets/img/directbooking.svg";
import featureproperty from "../../assets/img/featureproperty.png";
import guestmessage from "../../assets/img/guestmessage.svg";
import cleaningtourner from "../../assets/img/cleaningtourner.svg";
import maintanceitem from "../../assets/img/maintanceitem.svg";
import smartdevice2 from "../../assets/img/smartdevice2.svg";
import WhySimplihost from "./WhySimplihost";
import Sliderr from "./Sliderr";

function Home() {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div>
              <h1 className="fw-bold hero-text">
                <span className="green-color">Simplify</span> Your Rental Game!
                All-In-One, from Messaging to Sparkling Homes!
              </h1>
              <p className="mb-0 hero-text">
                Say goodbye to chaos and hello to simplicity! With SimpliHost,
                managing guests, cleaners, maintenance, and everything in
                between is a breeze. Seamlessly automate your rental operations
                and get back to doing what you love!{" "}
              </p>
              <button type="button" className="hero-btn fw-semi mt-3">
                Try for free
              </button>
              <p className="mb-0 mt-3">
                Try SimpliHost for free for 30 days. No credit card required.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-0 mt-lg-0">
            <div className="hero-main-pic">
              <img src={heroimg} alt="hero-pic" className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <section className="feature py-5">
        <div className="container">
          <div className="row">
            <h3 className="blue-color fw-bold text-center">Features</h3>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img src={feature1} alt="feature1" className="p-3 w-100" />
                </div>
                <p className="mb-0 fs-5 fw-semi text-center mt-3">
                  Unified Inbox
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img
                    src={smartdevice}
                    alt="Smart-device"
                    className="p-3 w-100"
                  />
                </div>
                <p className="mb-0 fs-5 fw-semi mt-3 text-center">
                  Smart Devices Integration
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img src={task} alt="Task" className="p-3 w-100" />
                </div>
                <p className="mb-0 fs-5 fw-semi mt-3 text-center">
                  Tasks and Checklists
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img
                    src={automatedguest}
                    alt="Automation"
                    className="p-3 w-100"
                  />
                </div>
                <p className="mb-0 fs-5 fw-semi mt-3 text-center">
                  Automated Guest Messaging
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img src={maintance} alt="feature1" className="p-3 w-100" />
                </div>
                <p className="mb-0 fs-5 fw-semi mt-3 text-center">
                  Maintenance Tracking
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img
                    src={inventery}
                    alt="Smart-device"
                    className="p-3 w-100"
                  />
                </div>
                <p className="mb-0 fs-5 fw-semi mt-3 text-center">
                  Inventory Management
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img src={automation} alt="Task" className="p-3 w-100" />
                </div>
                <p className="mb-0 fs-5 fw-semi mt-3 text-center">
                  Automations
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mt-sm-5">
              <div className="featurecard-main p-3 d-flex flex-column align-items-center rounded-4 h-100">
                <div className="featurecard-img">
                  <img
                    src={directbooking}
                    alt="Automation"
                    className="p-3 w-100"
                  />
                </div>
                <p className="mb-0 fs-5 fw-semi mt-3 text-center">
                  Direct Booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature2 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-md-6 mx-auto">
              <div>
                <img
                  src={featureproperty}
                  alt="Propety"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-7 mt-3 mt-xl-0">
              <div className="row">
                <div className="col-xl-5 col-sm-6">
                  <div className="featurecard-main2 d-flex align-items-center  py-2 px-3 rounded-4 h-100">
                    <div className="featurecard-img2">
                      <img src={guestmessage} className="w-100 p-2" />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Guest Messaging</p>
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 mt-3 mt-sm-0">
                  <div className="featurecard-main2 d-flex align-items-center py-2 px-3 rounded-4 h-100">
                    <div className="featurecard-img2">
                      <img src={cleaningtourner} className="w-100 p-2" />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Cleaning Turnovers</p>
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 mt-sm-5 mt-3 ms-0 ms-xl-4">
                  <div className="featurecard-main2 d-flex align-items-center py-2 px-3 rounded-4 h-100">
                    <div className="featurecard-img2">
                      <img src={maintanceitem} className="w-100 p-2" />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Maintenance Items</p>
                  </div>
                </div>
                <div className="col-xl-5 col-sm-6 mt-sm-5 mt-3">
                  <div className="featurecard-main2 d-flex align-items-center py-2 px-3 rounded-4 h-100">
                    <div className="featurecard-img2">
                      <img src={smartdevice2} className="w-100 p-2" />
                    </div>
                    <p className="mb-0 ms-2 fw-semi fs-5">Smart Devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <h4 className="blue-color fw-bold fs-4">Pricing Made Simple</h4>
              <p className="mb-0 black-color fs-5 mt-3">
                One simple plan for all your needs!
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-decoration-none more-btn px-5 py-2 fw-semi"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-xl-7 mt-4 mt-xl-4">
              <div className="row align-items-end">
                <div className="col-md-6 d-flex flex-column mt-3 mt-md-0">
                  <div className="simplified-price p-5 flex-grow-1 d-flex flex-column">
                    <h5 className="fw-bold white-color mt-4">
                      Simplified Pricing
                    </h5>
                    <p className="mb-0 white-color mt-4">
                      Why buy multiple systems when you can have it all-in-one?
                      Our plan gives you everything you need, hassle-free
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="text-decoration-none simplified-btn d-block text-center fw-semi"
                      >
                        Get Your Price
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column mt-3 mt-md-0">
                  <div className="full-feature p-5 flex-grow-1 d-flex flex-column">
                    <h5 className="fw-bold blue-color mt-4">Full Features</h5>
                    <p className="mb-0 blue-color mt-4">
                      No more juggling add-ons! Get the best of all our features
                      right from the start. It's all included!
                    </p>
                    <div className=" mt-auto">
                      <a
                        href="#"
                        className="text-decoration-none fullyfeature-btn d-block text-center fw-semi"
                      >
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhySimplihost/>
      <Sliderr/>
    </>
  );
}

export default Home;