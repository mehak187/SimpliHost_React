import React from "react";
import GotbackSection from "../../Components/Website/GotbackSection";
import Sliderr from "../../Components/Website/Sliderr";
import { Link } from "react-router-dom";
import PricingSlider from "../../Components/Website/PricingSlider";
import imglogo1 from "../../assets/img/logo-p1.svg";
import imglogo2 from "../../assets/img/logo-p2.svg";
import imglogo3 from "../../assets/img/logo-p3.svg";
import imglogo4 from "../../assets/img/logo-p4.svg";
import imglogo5 from "../../assets/img/logo-p5.svg";
import imglogo6 from "../../assets/img/logo-p6.svg";
import imglogo7 from "../../assets/img/logo-p7.svg";
import imglogo8 from "../../assets/img/logo-8.svg";
import imglogo9 from "../../assets/img/logo-p9.svg";
import PricingMadeSimple from "../../Components/Website/PricingMadeSimple";


function Pricing() {
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
              <h1 className="fw-bold">All Features,<br></br> One Simple Price!</h1>
              <p className="mb-0 comm-para">
                You take care of the guests, we take care of the rest!
              </p>
            </div>
            <ul className="nav nav-pills mb-3 buttonbg flex-column flex-sm-row mt-5" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active bg-transparent border-0 w-100" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><Link className="bluelink d-block text-white">Monthly</Link></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link bg-transparent border-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><Link className="whitelink text-black">
                  Annual <span>Save 20%</span>
                </Link></button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        <PricingSlider />
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
        <PricingSlider />
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 logoImg-main">
              <h3 className="mb-4 litblue fw-bold">
                Get More Done with Our Awesome Integrations!
              </h3>
              <div className="row justify-content-center">
                {logoImages.map((logo, index) => (
                  <div
                    key={index}
                    className={`col-lg-2 col-md-3 col-sm-4 mb-3 ${index === 5 ? "ms-lg-5 ms-0" : ""
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
                  className="border-0 text-white opacity-hover text-decoration-none explore-btn mt-2"
                >
                  Explore the Full List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingMadeSimple />
      <Sliderr />
      <GotbackSection />
    </div>
  );
}

export default Pricing;
