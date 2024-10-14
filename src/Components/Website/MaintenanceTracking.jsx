import React from "react";
import CommonHero from "./CommonHero";
import madness1 from "../../assets/img/madness1.svg";
import madness2 from "../../assets/img/madness2.svg";
import propertyhero from "../../assets/img/propertyhero.svg";
import automationtic from "../../assets/img/automation-tic.svg";
import CommonMid from "./CommonMid";
import WhySimplihost from "./WhySimplihost";
import Sliderr from "./Sliderr";
import GuestSection from "./GuestSection";

function MaintenanceTracking() {
  const checklistItems = [
    "Preventive Maintenance",
    "Real-Time Reporting",
    "Custom Alerts",
    "Detailed Checklists",
    "Automated Task Scheduling",
    "Equipment Info Tracker",
  ];
  return (
    <div>
      <CommonHero
        title="Keep Your Properties in Tip-Top Shape with Maintenance Tracking"
        description="Effortlessly handle all your maintenance tasks, from routine check-ups to major repairs. Track from hot tub cleanings to A/C tune-ups, ensuring nothing slips through the cracks. Stay organized and ahead of the game with detailed reports and custom alerts."
        imgSrc={propertyhero}
        imgAlt="About Hero"
      />
      <CommonMid
        title="Maintenance Without the Madness"
        description="Streamline your property management with our advanced maintenance tracking. Automate scheduling, create checklists, and track service dates for crucial tasks. Get real-time reports and alerts for overdue maintenance, keeping your properties in pristine condition with ease."
        imgSrc1={madness1}
        imgAlt1="Image 1"
        imgSrc2={madness2}
        imgAlt2="Image 2"
      />
      <GuestSection
        title="Stay Ahead with Smart Maintenance!"
        checklistItems={checklistItems}
        imgSrc={automationtic}
        description="Managing property maintenance can be a headache, but not with our Maintenance Tracking feature. Whether it's draining and cleaning the hot tub, changing air filters, or ensuring the gutters are clean, our system keeps you on track. With automated tasks and detailed checklists, you’ll never miss a beat. Real-time reports and custom alerts ensure you stay ahead of maintenance issues, preventing problems before they arise. Simplify your life and keep your properties in pristine condition effortlessly!"
      />
      <WhySimplihost />
      <Sliderr />
    </div>
  );
}

export default MaintenanceTracking;
