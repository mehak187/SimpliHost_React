import React from "react";

function CommonHero({ title, description, imgSrc, imgAlt }) {
  return (
    <section className="commhero-sec py-5 bg-grey d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="">
              <h1 className="fw-bold">{title}</h1>
              <p className="mb-0 comm-para">{description}</p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 d-lg-block d-none">
            <div className="mb-5 mb-lg-0">
              <img src={imgSrc} alt={imgAlt} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonHero;
