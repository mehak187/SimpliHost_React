import React from "react";

function GuestSection({ title, checklistItems, description, imgSrc, imgclass }) {
  return (
    <section className="guest-sec py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-xxl-8 col-lg-10 col-md-11 ">
          <h2 className="fw-bold text-center">{title}</h2>
          </div>
        </div>
        <div className="row mt-4 bg-exgreen p-4 rounded-4 justify-content-center">
          <div className="col-lg-11 col-xl-9">
            <div className="row">
              {checklistItems.map((item, index) => (
                <div key={index} className="col-lg-4 col-sm-6 my-2">
                  <div className="d-flex align-items-center justify-content-start">
                    <div className="me-3">
                    <img src={imgSrc} alt="icon" className={`d-flex align-items-center ${imgclass}`} />
                    </div>
                    <p className="mb-0 litblue fw-semi">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mb-0 guest-para mt-5 text-center">{description}</p>
      </div>
    </section>
  );
}

export default GuestSection;
