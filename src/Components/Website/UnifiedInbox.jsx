import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/img/commhero-pic.svg";
import effortless from "../../assets/img/effortless-pic.svg";
import FaqSection from "./FaqSection";
import GotbackSection from "./GotbackSection";
import BrandsSection from "./BrandsSection";
import GuestSection from "./GuestSection";
import dot from "../../assets/img/dot.png";
import filter from "../../assets/img/filtr.svg";
import document from "../../assets/img/docomnt.svg";
import text from "../../assets/img/text.svg";

import CheckoutFeatures from "./CheckoutFeatures";
import Sliderr from "./Sliderr";


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
    <section class="commhero-sec pt-5 bg-grey d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 ">
                    <div class="">
                        <h1 class="fw-bold">Let <span class="litblue">SimpliHost</span> Make Guest
                            Communication a Breeze</h1>
                        <p class="mb-0 comm-para">Automate your guest messaging and save time with pre-built responses,
                            custom templates, and personalized fields. Add emojis for a friendly touch
                            and ensure every guest feels special.</p>
                    </div>
                </div>
                <div class="col-6 d-lg-block d-none">
                    <div class="mb-5 mb-lg-0 ps-lg-5">
                    <img src={hero} alt="pic" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
    </section>
      <BrandsSection />
      <section class="effort-sec py-4 py-lg-5">
        <div class="container">
            <div class="text-center">
                <h2 class="fw-bold">Effortless Guest Messages, Just a Tap Away!</h2>
                <div>
                    <img src={effortless} alt="pic" class="img-fluid" />
                </div>
                <p class="mb-0 effort-para">SMS? You bet. Templates for quick replies? Absolutely. Emojis and
                    attachments? All checked! Our Unified Inbox pulls together
                    messages from Airbnb, Vrbo, Booking.com, direct bookings, and even WhatsApp into one seamless
                    stream. Designed with
                    insights from hundreds of vacation rental managers, this tool simplifies guest communication, making
                    it more efficient
                    and a lot more fun!</p>
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
        imgclass="dot-img"
      />
          <section class="unified-sec py-5 bg-litgrey">
        <div class="container">
            <div class="row">
                <h2 class="fw-bold text-center mb-5">Get to Know <span class="litblue">Simplihost</span> Unified Inbox
                </h2>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="bg-litgrey p-4 rounded-4 h-100 d-flex flex-column border border-5 border-white">
                        <div class="d-flex align-items-center">
                            <div
                                class="bg-blue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                                <img src={filter} alt="pic" class="" />
                            </div>
                            <h5 class="ms-3 fw-semi">Filter/Search Your Messages</h5>
                        </div>
                        <div class="">
                            <p class="mb-0">Need to track down a message? No problem! Filter
                                by date, guest name, and more to zero in on the
                                conversation you need. Easily spot all unread
                                messages and get cracking!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="bg-litgrey p-4 rounded-4 h-100 d-flex flex-column border border-5 border-white">
                        <div class="d-flex align-items-center">
                            <div
                                class="bg-blue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                                <img src={document} alt="pic" class="" />
                            </div>
                            <h5 class="ms-3 fw-semi">Pre-Built Templates </h5>
                        </div>
                        <div class="">
                            <p class="mb-0">Answer in a flash using our pre-built templates! No
                                need to hunt for details—canned fields pull in guest
                                info automatically. Save time and keep the
                                convo rolling!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="bg-litgrey p-4 rounded-4 h-100 d-flex flex-column border border-5 border-white">
                        <div class="d-flex align-items-center">
                            <div
                                class="bg-blue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                                <img src={text} alt="pic" class="" />
                            </div>
                            <h5 class="ms-3 fw-semi">Automated Guest Messaging</h5>
                        </div>
                        <div class="">
                            <p class="mb-0">Create automated guest messages triggered by
                                preset dates, times, or events like check-in, during
                                the stay, and check-out. Sit back and let the
                                magic happen!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <CheckoutFeatures/>
      <Sliderr />
      <FaqSection/>
      <GotbackSection />
    </div>
  );
}

export default UnifiedInbox;