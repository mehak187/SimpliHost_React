import React from "react";
import userDetails from "../../assets/img/user-details.png";
import name from "../../assets/img/name.png";
import phone from "../../assets/img/phone.png";
import email from "../../assets/img/email.png";
import platform from "../../assets/img/platform.png";
import mailing from "../../assets/img/mailing.png";
import balance from "../../assets/img/balance.png";
import terms from "../../assets/img/tems.png";
import { Link } from "react-router-dom";
import { IoMail, IoPencil } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function AddNewInvoice() {
  return (
    <section>
      <div className="row align-items-center justify-content-between">
        <div className="col-5 detail-bg p-5 rounded-4">
          <h5 className="fw-semi">Invoice #1001</h5>
          <div className="d-flex align-items-center mt-5 justify-content-between">
            <div>
              <p className="mb-0">Invoice Date:</p>
              <p className="mb-0 fw-semi">Saturday, August 31, 2024 </p>
            </div>
            <div>
              <p className="mb-0">Property Owner:</p>
              <p className="mb-0 fw-semi">Owner Name Here</p>
            </div>
          </div>
        </div>
        <div className="col-4 detail-bg p-4 rounded-4">
          <div className="d-flex align-items-center">
            <div className="comimg">
              <img src={platform} alt="platform" className="w-100" />
            </div>
            <p className="mb-0 fw-semi">Company Name here</p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <FaLocationDot className="inicons"/>
            <p className="mb-0 fw-semi">companylocationhere</p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <FaPhoneAlt className="inicons"/>
            <p className="mb-0 fw-semi">16086205151</p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <IoMail className="inicons"/>
            <p className="mb-0 fw-semi">asmintkdest.co</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddNewInvoice;
