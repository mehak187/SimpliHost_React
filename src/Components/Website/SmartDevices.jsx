import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/img/climatehero.svg";
import platform1 from "../../assets/img/platform1.svg";
import platform2 from "../../assets/img/platform2.svg";
import FaqSection from "./FaqSection";
import GotbackSection from "./GotbackSection";
import BrandsSection from "./BrandsSection";
import GuestSection from "./GuestSection";
import automationtic from "../../assets/img/automation-tic.svg";
import CheckoutFeatures from "./CheckoutFeatures";
import Sliderr from "./Sliderr";

function SmartDevices() {
  const checklistItems = [
    "Hassle-Free Check-Ins",
    "Scheduled Access",
    "Guest Safety",
    "Customizable Comfort",
    "24/7 Access Control",
    "Energy Efficiency",
  ];

  return (
    <div>
      <section class="commhero-sec pt-5 bg-grey d-flex align-items-center">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="">
                <h1 class="fw-bold">
                  Keys are Out, Comfort is In: Smart Access & Climate Control!
                </h1>
                <p class="mb-0 comm-para">
                  Welcome to the future of property management with SimpliHost,
                  where smart locks and thermostats are just the beginning! Get
                  ready to impress your guests and streamline your operations—
                  <span class="litblue fw-semi">
                    all with a touch of a button.
                  </span>
                </p>
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
            <h2 class="fw-bold">
              One <span class="litblue">SimpliHost</span> platform. Amazing A
              world of possibilities.
            </h2>
            <div>
              <img src={platform1} alt="pic" class="img-fluid" />
            </div>
            <div>
              <img src={platform2} alt="pic" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <GuestSection
        title="Unlock a World of Benefits 
with Our Smart Automation!"
        description="At SimpliHost, we pack a punch with our ever-growing lineup of over 100 smart devices. From unlocking doors without a key to setting the perfect cozy vibe before your guests arrive, we’ve got it all covered. Why juggle when you can automate? Dive into our world of smart locks and thermostats where managing your properties is as easy as pie. Get ready to scale, grow, and impress with every click. With SimpliHost, you’re not just managing properties—you’re mastering the art of smart hosting!"
        checklistItems={checklistItems}
        imgSrc={automationtic}
      />
      <CheckoutFeatures />
      <Sliderr />
      <FaqSection />
      <GotbackSection />
    </div>
  );
}

export default SmartDevices;
