import React from "react";
import { Link } from "react-router-dom";

function PricingMadeSimple() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <h4 className="blue-color fw-bold fs-4">Pricing Made Simple</h4>
            <p className="mb-0 black-color fs-5 mt-3">
              One simple plan for all your needs!
            </p>
            <div className="mt-4">
              <Link
                to="/pricing"
                className="text-decoration-none more-btn px-5 py-2 fw-semi"
              >
                Learn More
              </Link>
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
                    <Link
                      to="/pricing"
                      className="text-decoration-none simplified-btn d-block text-center fw-semi"
                    >
                      Get Your Price
                    </Link>
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
                    <Link
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                      className="text-decoration-none text-white fullyfeature-btn d-block text-center fw-semi"
                    >
                      Sign Up Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingMadeSimple;
