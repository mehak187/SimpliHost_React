import React from "react";
import { Link } from "react-router-dom";
import contact from "../../assets/img/contact.png";
import Line from "../../assets/img/Line.svg";
import chat from "../../assets/img/chat.svg";
import mail from "../../assets/img/mail.svg";
import phone from "../../assets/img/phone-call.svg";

function ContactUs() {
  return (
    <div>
      <section className="commhero-sec py-5 pt-lg-5 pb-lg-0 bg-grey d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="">
                <h1 className="fw-bold">Still Have Questions? We got you!</h1>
                <p className="mb-0 comm-para">
                  Select one of the options below to get in touch.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1 d-lg-block d-none">
              <div className="mb-5 mb-lg-0">
                <img src={contact} alt="About Hero" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="guest-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-4 d-none d-sm-block">
              <div>
                <img src={Line} alt="pic" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-4">
              <h2 className="fw-semi text-center mb-0">Contact Us</h2>
            </div>
            <div className="col-4 d-none d-sm-block">
              <div>
                <img src={Line} alt="pic" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row mt-4 bg-exgreen px-3 px-sm-4 py-5 rounded-4">
            <div className="col-12">
              <h4 className="fw-bold mb-0">How can we help you?</h4>
              <div className="d-md-flex flex-row justify-content-between align-items-center bg-white p-4 rounded-4 mt-4">
                <div className="d-flex align-items-center">
                  <div className="bg-yellow p-3 rounded-4 coreF-card1 d-flex align-items-center justify-content-center">
                    <img src={chat} alt="pic" className="" />
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0 fw-bold">Live chat</h5>
                    <p className="mb-0">Quickest way to get in touch!</p>
                  </div>
                </div>
                <div className="mt-4 mt-md-0">
                  <Link
                    to="#"
                    type="button"
                    className="explore-btn text-white opacity-hover fw-semi text-decoration-none"
                  >
                    Start Chat
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center bg-white p-4 rounded-4 mt-4">
                    <div className="bg-yellow p-3 rounded-4 coreF-card1 d-flex align-items-center justify-content-center">
                      <img src={mail} alt="pic" className="" />
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Email us</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center bg-white p-4 rounded-4 mt-4">
                    <div className="bg-yellow p-3 rounded-4 coreF-card1 d-flex align-items-center justify-content-center">
                      <img src={phone} alt="pic" className="" />
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Request a call</h5>
                      <p className="mb-0">Billing issues only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
