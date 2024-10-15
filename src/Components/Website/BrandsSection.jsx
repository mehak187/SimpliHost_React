import React from "react";
import { Link } from "react-router-dom";
import imglogo1 from "../../assets/img/logo-p1.svg";
import imglogo2 from "../../assets/img/logo-p2.svg";
import imglogo3 from "../../assets/img/logo-p3.svg";
import imglogo4 from "../../assets/img/logo-p4.svg";
import imglogo5 from "../../assets/img/logo-p5.svg";
import imglogo6 from "../../assets/img/logo-p6.svg";
import imglogo7 from "../../assets/img/logo-p7.svg";
import imglogo8 from "../../assets/img/logo-8.svg";
import imglogo9 from "../../assets/img/logo-p9.svg";

function BrandsSection() {
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
    <section class="logoPics-sec py-5">
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
  );
}

export default BrandsSection;
