import React from "react";
import GotbackSection from "./GotbackSection";
import Sliderr from "./Sliderr";
import BrandsSection from "./BrandsSection";
import { Link } from "react-router-dom";
import PricingSlider from "./PricingSlider";
import imglogo1 from "../../assets/img/logo-p1.svg";
import imglogo2 from "../../assets/img/logo-p2.svg";
import imglogo3 from "../../assets/img/logo-p3.svg";
import imglogo4 from "../../assets/img/logo-p4.svg";
import imglogo5 from "../../assets/img/logo-p5.svg";
import imglogo6 from "../../assets/img/logo-p6.svg";
import imglogo7 from "../../assets/img/logo-p7.svg";
import imglogo8 from "../../assets/img/logo-8.svg";
import imglogo9 from "../../assets/img/logo-p9.svg";

function SimplePrice() {
  const logoImages = [
    imglogo1,
    imglogo2,
    imglogo3,
    imglogo4,
    imglogo5,
    imglogo6,
    imglogo7,
    imglogo8,
    imglogo9,
  ];
  return (
    <div>
      <section className="commhero-sec pt-5 bg-grey d-flex align-items-center">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="text-center">
              <h1 className="fw-bold">All Features, One Simple Price!</h1>
              <p className="mb-0 comm-para">
                You take care of the guests, we take care of the rest!
              </p>
            </div>
            <div className="buttonbg mt-5">
              <Link className="bluelink text-white">Monthly</Link>
              <Link className="whitelink text-black">Annual <span>Save 20%</span></Link>
            </div>
          </div>
        </div>
      </section>
      <PricingSlider/>
      <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-10 logoImg-main">
            <h3 class="mb-4 litblue fw-bold">
              Get More Done with Our Awesome Integrations!
            </h3>
            <div className="row justify-content-center">
              {logoImages.map((logo, index) => (
                <div
                  key={index}
                  className={`col-lg-2 col-md-3 col-sm-4 mb-3 ${
                    index === 5 ? "ms-lg-5 ms-0" : ""
                  }`}
                >
                  <div className="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img
                      src={logo}
                      alt={`logo-${index + 1}`}
                      className="logo-imgs"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Link
                to="#"
                type="button"
                class="border-0 text-white opacity-hover text-decoration-none explore-btn mt-2"
              >
                Explore the Full List
              </Link>
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
                          data-bs-toggle="modal"
              data-bs-target="#signupModal"
                        className="text-decoration-none pointer text-white fullyfeature-btn d-block text-center fw-semi"
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
      <Sliderr />
      <GotbackSection />
    </div>
  );
}

export default SimplePrice;
