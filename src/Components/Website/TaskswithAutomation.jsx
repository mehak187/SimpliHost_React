import React from "react";
import CommonHero from "./CommonHero";
import smoot from "../../assets/img/smoot-p1.svg";
import smooth from "../../assets/img/smooth-p2.svg";
import goodb from "../../assets/img/goodb-hero.svg";
import automationtic from "../../assets/img/automation-tic.svg";
import CommonMid from "./CommonMid";
import WhySimplihost from "./WhySimplihost";
import Sliderr from "./Sliderr";
import GuestSection from "./GuestSection";
import FaqSection from "./FaqSection";
import CheckoutFeatures from "./CheckoutFeatures";
import GotbackSection from "./GotbackSection";

function TaskswithAutomation() {
  const checklistItems = [
    "Time Saving",
    "Reduced Errors",
    "Increased Efficiency",
    "Consistent Communication",
    "Scheduling Flexibility",
    "Customizable Automations",
  ];
  return (
    <div>
      <CommonHero
        title="Say Goodbye to Manual Tasks with Automation!"
        description="Transform rental management into a breeze with our fantastic automation tools! From lightning-fast guest messaging to effortless task assignments and checklists, we’ve got everything you need to keep things running smoothly!"
        imgSrc={goodb}
        imgAlt="About Hero"
      />
      <CommonMid
        title="Smooth Sailing with Automated Awesomeness"
        description="Automate everything from guest messaging to task assignments and checklists. Say goodbye to manual entries and missed tasks—hello, effortless efficiency! Let automation take the wheel, so you can kick back and wow your guests with an exceptional experience."
        imgSrc1={smoot}
        imgAlt1="Image 1"
        imgSrc2={smooth}
        imgAlt2="Image 2"
      />
      <GuestSection
        title="Why Automation Will Knock Your Socks Off!"
        checklistItems={checklistItems}
        imgSrc={automationtic}
        imgclass="tic-img"
        description="With our Property Management Platform and the many vacation rental partners we are integrated with, you can automate messaging, guest vetting, insurance cleaning, pricing, reviews, task management and more. Our Open API makes your options virtually endless, meaning you can automate even the smallest part of your day-to-day operations.This means you can reclaim a huge percentage of your time and instead, focus on growth."
      />
      <WhySimplihost />
      <Sliderr />
      <FaqSection/>
      <CheckoutFeatures/>
      <GotbackSection/>
    </div>
  );
}

export default TaskswithAutomation;
