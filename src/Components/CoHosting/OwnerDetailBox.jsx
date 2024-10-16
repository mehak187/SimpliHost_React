import React from "react";
import { FaEye } from "react-icons/fa";
import userDetails from "../../assets/img/user-details.png";
import name from "../../assets/img/name.png";
import phone from "../../assets/img/phone.png";
import email from "../../assets/img/email.png";
import company from "../../assets/img/company.png";
import mailing from "../../assets/img/mailing.png";
import balance from "../../assets/img/balance.png";
import terms from "../../assets/img/tems.png";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";

function OwnerDetailBox() {
  return (
    <div className="d-flex flex-column flex-lg-row detail-bg px-3 py-3 rounded-4">
      <div className="detail-user-img me-2 mx-3 mx-sm-0">
        <img src={userDetails} alt="" className="w-100 rounded-4" />
      </div>
      <div className="w-100">
        <div className="w-100 mt-3 mt-sm-0 mb-3 d-flex justify-content-end px-2">
          <Link
            to="#"
            className="rounded-3 text-black text-decoration-none px-3 py-2 edit-bg"
          >
            <span className="small me-2">Edit info</span>
            <IoPencil className=" fs-6" />
          </Link>
        </div>
        <div className="row px-3">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">First Name</h6>
            <div className="d-flex align-items-center">
              <img src={name} alt="name" className="detail-icon me-2" />
              <span className="small">Naseeb Zulfiqar</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Last Name</h6>
            <div className="d-flex align-items-center">
              <img src={name} alt="name" className="detail-icon me-2" />
              <span className="small">Designer</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Phone Number</h6>
            <div className="d-flex align-items-center">
              <img src={phone} alt="phone" className="detail-icon me-2" />
              <span className="small">+21 315 909 909</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Email</h6>
            <div className="d-flex align-items-center">
              <img src={email} alt="email" className="detail-icon me-2" />
              <span className="small">client@gmail.com</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Company</h6>
            <div className="d-flex align-items-center">
              <img src={company} alt="name" className="detail-icon me-2" />
              <span className="small">Company name here</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Mailing Address</h6>
            <div className="d-flex align-items-center">
              <img src={mailing} alt="mailing" className="detail-icon me-2" />
              <span className="small">Mailing Address</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Mailing City</h6>
            <div className="d-flex align-items-center">
              <img src={mailing} alt="mailing" className="detail-icon me-2" />
              <span className="small">Mailing Address</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Mailing Zip</h6>
            <div className="d-flex align-items-center">
              <img src={mailing} alt="mailing" className="detail-icon me-2" />
              <span className="small">54000</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Terms</h6>
            <div className="d-flex align-items-center">
              <img src={terms} alt="terms" className="detail-icon me-2" />
              <span className="small">Agrees</span>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-blue2 fw-bold fs-6">Outstanding Balance</h6>
            <div className="d-flex align-items-center">
              <img src={balance} alt="balance" className="detail-icon me-2" />
              <span className="small">2,300.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDetailBox;
