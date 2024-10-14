import React from "react";
import cf from "../../assets/img/cf-11.svg";
import cf1 from "../../assets/img/cf-1.svg";
import cf2 from "../../assets/img/cf-2.svg";
import cf4 from "../../assets/img/cf-4.svg";

function CheckoutFeatures() {
  return (
    <section className="commCards-sec py-5 bg-exxxSky">
      <div className="container">
        <div className="row">
          <h2 className="fw-bold text-center mb-5">
            Check out these other features
          </h2>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="bg-exxBlue p-4 rounded-5 h-100 d-flex flex-column">
              <div className="bg-blue d-flex justify-content-center align-items-center p-3 rounded-3 coreF-card1 mb-4">
                <img src={cf} alt="pic" className="" />
              </div>
              <div className="mb-5">
                <h5 className="mb-3 fw-semi">Unified Inbox</h5>
                <p className="mb-0">
                  A single destination for guest communication synched with your
                  listing data across all channels.
                </p>
              </div>
              <div className="text-center mt-auto">
                <button
                  type="button"
                  className="border-0 commCard-btn bg-blue w-100"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="bg-exxGreen p-4 rounded-5 h-100 d-flex flex-column">
              <div className="bg-dgreen d-flex justify-content-center align-items-center p-3 rounded-3 coreF-card1 mb-4">
                <img src={cf1} alt="pic" className="" />
              </div>
              <div className="mb-5">
                <h5 className="mb-3 fw-semi">Smart Devices Integration</h5>
                <p className="mb-0">
                  Eliminate repetitive tasks and reduce mistakes with booking
                  reminders, directions, payment requests and more based on
                  easy-to-create rules..
                </p>
              </div>
              <div className="text-center mt-auto">
                <button
                  type="button"
                  className="border-0 commCard-btn bg-dgreen w-100"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="bg-exxYellow p-4 rounded-5 h-100 d-flex flex-column">
              <div className="bg-yellow d-flex justify-content-center align-items-center p-3 rounded-3 coreF-card1 mb-4">
                <img src={cf2} alt="pic" className="" />
              </div>
              <div className="mb-5">
                <h5 className="mb-3 fw-semi">
                  Checklists for Cleaning Operations
                </h5>
                <p className="mb-0">
                  Eliminate repetitive tasks and reduce mistakes with booking
                  reminders, directions, payment requests and more based on
                  easy-to-create rules.
                </p>
              </div>
              <div className="text-center mt-auto">
                <button
                  type="button"
                  className="border-0 commCard-btn bg-yellow w-100"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="bg-exxOrange p-4 rounded-5 h-100 d-flex flex-column">
              <div className="bg-orange d-flex justify-content-center align-items-center p-3 rounded-3 coreF-card1 mb-4">
                <img src={cf4} alt="pic" className="" />
              </div>
              <div className="mb-5">
                <h5 className="mb-3 fw-semi">Inventory Management</h5>
                <p className="mb-0">
                  Eliminate repetitive tasks and reduce mistakes with booking
                  reminders, directions, payment requests and more based on
                  easy-to-create rules.
                </p>
              </div>
              <div className="text-center mt-auto">
                <button
                  type="button"
                  className="border-0 commCard-btn bg-orange w-100"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutFeatures;
