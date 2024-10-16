import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/img/commhero-pic.svg";
import effortless from "../../assets/img/effortless-pic.svg";
import FaqSection from "../../Components/Website/FaqSection";
import GotbackSection from "../../Components/Website/GotbackSection";
import BrandsSection from "../../Components/Website/BrandsSection";
import GuestSection from "../../Components/Website/GuestSection";
import dot from "../../assets/img/dot.png";
import filter from "../../assets/img/filtr.svg";
import document from "../../assets/img/docomnt.svg";
import text from "../../assets/img/text.svg";

import CheckoutFeatures from "../../Components/Website/CheckoutFeatures";
import Sliderr from "../../Components/Website/Sliderr";

function UnifiedInbox() {
  const checklistItems = [
    "One Fully Synced Inbox",
    "Canned Messages",
    "Pre-Built Templates",
    "Customizable Responses",
    "Auto-Filled Information",
    "Quicker Response Time",
  ];

  return (
    <div>
      <section className="commhero-sec pt-5 bg-grey d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <div className="">
                <h1 className="fw-bold">
                  Let <span className="litblue">SimpliHost</span> Make Guest
                  Communication a Breeze
                </h1>
                <p className="mb-0 comm-para">
                  Automate your guest messaging and save time with pre-built
                  responses, custom templates, and personalized fields. Add
                  emojis for a friendly touch and ensure every guest feels
                  special.
                </p>
              </div>
            </div>
            <div className="col-6 d-lg-block d-none">
              <div className="mb-5 mb-lg-0 ps-lg-5">
                <img src={hero} alt="pic" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandsSection />
      <section className="effort-sec py-4 py-lg-5">
        <div className="container">
          <div className="text-center">
            <h2 className="fw-bold">
              Effortless Guest Messages, Just a Tap Away!
            </h2>
            <div>
              <img src={effortless} alt="pic" className="img-fluid" />
            </div>
            <p className="mb-0 effort-para">
              SMS? You bet. Templates for quick replies? Absolutely. Emojis and
              attachments? All checked! Our Unified Inbox pulls together
              messages from Airbnb, Vrbo, Booking.com, direct bookings, and even
              WhatsApp into one seamless stream. Designed with insights from
              hundreds of vacation rental managers, this tool simplifies guest
              communication, making it more efficient and a lot more fun!
            </p>
          </div>
        </div>
      </section>
      <GuestSection
        title="Why Our Guest Messaging Rocks!"
        description="Keep the conversation flowing with your guests without the  hassle of switching between different OTAs like Airbnb, Vrbo, 
and Booking.com. Chat via SMS, WhatsApp, email, or direct  messaging—all from one place. Plus, set up pre-written templates 
and automatic triggers to ensure you never miss a beat. SimpliHost  makes every interaction smoother and smarter!"
        checklistItems={checklistItems}
        imgSrc={dot}
        imgclassName="dot-img"
      />
      <section className="unified-sec py-5 bg-litgrey">
        <div className="container">
          <div className="row">
            <h2 className="fw-bold text-center mb-5">
              Get to Know <span className="litblue">Simplihost</span> Unified
              Inbox
            </h2>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-litgrey p-4 rounded-4 h-100 d-flex flex-column border border-5 border-white">
                <div className="d-flex align-items-center">
                  <div className="bg-blue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                    <img src={filter} alt="pic" className="" />
                  </div>
                  <h5 className="ms-3 fw-semi">Filter/Search Your Messages</h5>
                </div>
                <div className="">
                  <p className="mb-0">
                    Need to track down a message? No problem! Filter by date,
                    guest name, and more to zero in on the conversation you
                    need. Easily spot all unread messages and get cracking!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-litgrey p-4 rounded-4 h-100 d-flex flex-column border border-5 border-white">
                <div className="d-flex align-items-center">
                  <div className="bg-blue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                    <img src={document} alt="pic" className="" />
                  </div>
                  <h5 className="ms-3 fw-semi">Pre-Built Templates </h5>
                </div>
                <div className="">
                  <p className="mb-0">
                    Answer in a flash using our pre-built templates! No need to
                    hunt for details—canned fields pull in guest info
                    automatically. Save time and keep the convo rolling!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-litgrey p-4 rounded-4 h-100 d-flex flex-column border border-5 border-white">
                <div className="d-flex align-items-center">
                  <div className="bg-blue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                    <img src={text} alt="pic" className="" />
                  </div>
                  <h5 className="ms-3 fw-semi">Automated Guest Messaging</h5>
                </div>
                <div className="">
                  <p className="mb-0">
                    Create automated guest messages triggered by preset dates,
                    times, or events like check-in, during the stay, and
                    check-out. Sit back and let the magic happen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CheckoutFeatures />
      <Sliderr />
      <FaqSection />
      <GotbackSection />
    </div>
  );
}

export default UnifiedInbox;
