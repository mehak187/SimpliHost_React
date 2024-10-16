import React from "react";
import user from "../../assets/img/user-details.png";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import name from "../../assets/img/name.png";
import phone from "../../assets/img/phone.png";
import email from "../../assets/img/email.png";
import company from "../../assets/img/company.png";
import mailing from "../../assets/img/mailing.png";
import balance from "../../assets/img/balance.png";
import terms from "../../assets/img/tems.png";
function ProfileInformation() {
  return (
    <div>
      <h2 className="fs-6 mb-0 text-capitalize text-blue2 fw-bold mt-3 mt-sm-0">
        About your profile
      </h2>
      <div className="mt-3 px-3 py-3 border border-1 rounded-3 d-lg-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="detail-user-img2 me-2">
            <img src={user} alt="" className="rounded-circle w-100 me-2" />
          </div>
          <div>
            <p className="text-blue2 fw-bold fs-6 mb-1">Beth full name here</p>
            <p className="text-black fw-semi small mb-0">Role here</p>
          </div>
        </div>
        <Link
          to="#"
          className="rounded-3 text-black text-decoration-none px-3 py-2 edit-bg d-inline-block mt-3 mt-lg-0"
        >
          <IoPencil className=" me-2 fs-6" />
          <span className="small text-blue fw-semi">Edit info</span>
        </Link>
      </div>
      <div className="mt-3 py-3 border border-1 rounded-3">
        <h3 className="fs-6 px-3 text-capitalize text-blue2 fw-bold">
          Personal Information
        </h3>
        <div className="col-xxl-10">
          <div className="row px-3 mt-3">
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">First Name</h6>
              <div className="d-flex align-items-center">
                <img src={name} alt="name" className="detail-icon me-2" />
                <span className="small">Naseeb Zulfiqar</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Last Name</h6>
              <div className="d-flex align-items-center">
                <img src={name} alt="name" className="detail-icon me-2" />
                <span className="small">Designer</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Phone Number</h6>
              <div className="d-flex align-items-center">
                <img src={phone} alt="phone" className="detail-icon me-2" />
                <span className="small">+21 315 909 909</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Email</h6>
              <div className="d-flex align-items-center">
                <img src={email} alt="email" className="detail-icon me-2" />
                <span className="small">client@gmail.com</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Company</h6>
              <div className="d-flex align-items-center">
                <img src={company} alt="name" className="detail-icon me-2" />
                <span className="small">Company name here</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Mailing Address</h6>
              <div className="d-flex align-items-center">
                <img src={mailing} alt="mailing" className="detail-icon me-2" />
                <span className="small">Mailing Address</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Mailing City</h6>
              <div className="d-flex align-items-center">
                <img src={mailing} alt="mailing" className="detail-icon me-2" />
                <span className="small">Mailing Address</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Mailing Zip</h6>
              <div className="d-flex align-items-center">
                <img src={mailing} alt="mailing" className="detail-icon me-2" />
                <span className="small">54000</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Terms</h6>
              <div className="d-flex align-items-center">
                <img src={terms} alt="terms" className="detail-icon me-2" />
                <span className="small">Agrees</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-4">
              <h6 className="text-blue2 fw-bold fs-6">Outstanding Balance</h6>
              <div className="d-flex align-items-center">
                <img src={balance} alt="balance" className="detail-icon me-2" />
                <span className="small">2,300.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;
