import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/img/commhero-pic.svg";
import effortless from "../../assets/img/effortless-pic.svg";
import FaqSection from "./FaqSection";
import GotbackSection from "./GotbackSection";
import BrandsSection from "./BrandsSection";
import GuestSection from "./GuestSection";
import automationtic from "../../assets/img/automation-tic.svg";
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
                    <div class="mb-5 mb-lg-0">
                    <img src={hero} alt="pic" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
    </section>
      <BrandsSection />
      <section class="effort-sec py-5">
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
        imgSrc={automationtic}
      />
      <CheckoutFeatures/>
      <Sliderr />
      <FaqSection/>
      <GotbackSection />
    </div>
  );
}

export default UnifiedInbox;