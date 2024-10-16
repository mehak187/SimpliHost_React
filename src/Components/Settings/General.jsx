import React from "react";
import company from "../../assets/img/company-logo.png";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
function General() {
  return (
    <div className="setting-bg rounded-3">
      <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
        General Settings
      </h2>
      <div className="mt-4 px-3 d-sm-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="detail-user-img2 me-2">
            <img src={company} alt="" className="rounded-circle w-100 me-2" />
          </div>
          <div>
            <p className="text-blue2 mb-0 fw-bold fs-6">Company Name</p>
          </div>
        </div>
        <Link
          to="#"
          className="rounded-3 text-black text-decoration-none px-3 py-2 edit-bg d-inline-block mt-3 mt-sm-0"
        >
          <IoPencil className=" me-2 fs-6" />
          <span className="small text-blue fw-semi">Edit General</span>
        </Link>
      </div>
      <div className="mt-3 py-3 px-3 rounded-3">
        <h3 className="fs-5  text-capitalize text-black fw-semi">
          Global Preferences
        </h3>
        <div className="py-3 border-bottom border-1">
          <h6 className="text-blue2 fw-bold fs-6">Preffered language</h6>
          <p className="fs-6 mb-0">Naseeb Zulfiqar</p>
        </div>
        <div className="py-3 border-bottom border-1">
          <h6 className="text-blue2 fw-bold fs-6">Preffered currency</h6>
          <p className="fs-6 mb-0">United States dollar</p>
        </div>
        <div className="py-3 border-bottom border-1">
          <h6 className="text-blue2 fw-bold fs-6">Time zone</h6>
          <p className="fs-6 mb-0">(GMT-05:00) Eastern Time (US & Canada)</p>
        </div>
        <div className="py-3 border-bottom border-1">
          <h6 className="text-blue2 fw-bold fs-6">Calendar Start of Week</h6>
          <p className="fs-6 mb-0">Sunday</p>
        </div>
        <div className="py-3 border-bottom border-1">
          <h6 className="text-blue2 fw-bold fs-6">
            Initial # of Listings to Display on Calendar
          </h6>
          <p className="fs-6 mb-0">20 Listings</p>
        </div>
      </div>
    </div>
  );
}

export default General;
