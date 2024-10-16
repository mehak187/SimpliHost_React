import React from "react";

function CommonMid({ title, description, imgSrc1, imgSrc2, imgAlt1, imgAlt2 }) {
  return (
    <section className="effort-sec py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center col-sm-9 col-md-8 col-lg-7">
            <h2 className="fw-bold">{title}</h2>
            <div>
              <img src={imgSrc1} alt={imgAlt1} className="img-fluid" />
            </div>
            <div>
              <img src={imgSrc2} alt={imgAlt2} className="img-fluid" />
            </div>
          </div>
          <div className="text-center col-sm-11 col-md-10 col-lg-9">
            <p className="mb-0 effort-para mt-5">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommonMid;
