import React from "react";
import CommonHero from "./CommonHero";
import contact from "../../assets/img/contact.png";
import Line from "../../assets/img/Line.svg";
import chat from "../../assets/img/chat.svg";
import mail from "../../assets/img/mail.svg";
import phone from "../../assets/img/phone-call.svg";

function ContactUs() {
  return (
    <div>
      <CommonHero
        title="Still Have Questions? We got you!"
        description="Select one of the options below to get in touch."
        imgSrc={contact}
        imgAlt="About Hero"
      />
      <section className="guest-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-4 d-none d-sm-block">
              <div>
                <img src={Line} alt="pic" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-4">
              <h2 className="fw-semi text-center">Contact Us</h2>
            </div>
            <div className="col-4 d-none d-sm-block">
              <div>
                <img src={Line} alt="pic" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row mt-5 bg-exgreen p-4 rounded-4">
            <div className="col-12">
              <h4 className="fw-bold">How can we help you?</h4>
              <div className="d-md-flex flex-row justify-content-between align-items-center bg-white p-4 rounded-4 mt-5">
                <div className="d-flex align-items-center">
                  <div className="bg-yellow p-3 rounded-4 coreF-card1 d-flex align-items-center justify-content-center">
                    <img src={chat} alt="pic" className="w-100" />
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-0 fw-bold">Live chat</h5>
                    <p className="mb-0">Quickest way to get in touch!</p>
                  </div>
                </div>
                <div className="mt-4 mt-md-0">
                  <button type="button" className="explore-btn fw-semi">
                    Start Chat
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center bg-white p-4 rounded-4 mt-5">
                    <div className="bg-yellow p-3 rounded-4 coreF-card1 d-flex align-items-center justify-content-center">
                      <img src={mail} alt="pic" className="w-100" />
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0 fw-bold">Email us</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center bg-white p-4 rounded-4 mt-5">
                    <div className="bg-yellow p-3 rounded-4 coreF-card1 d-flex align-items-center justify-content-center">
                      <img
                        src={phone}
                        alt="pic"
                        className="w-100"
                      />
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
