import React from "react";
import CommonHero from "./CommonHero";
import stuffpic1 from "../../assets/img/stuffpic1.svg";
import stuffpic2 from "../../assets/img/stuffpic2.svg";
import aroundcircle from "../../assets/img/conquregero.svg";
import automationtic from "../../assets/img/automation-tic.svg";
import CommonMid from "./CommonMid";
import WhySimplihost from "./WhySimplihost";
import Sliderr from "./Sliderr";
import GuestSection from "./GuestSection";

function TaskandChecklist() {
  const checklistItems = [
    "Detailed Analytics",
    "Smart Automation",
    "Team Collaboration",
    "Task Prioritization",
    "Instant Notifications",
    "Mobile-Optimized",
  ];
  return (
    <div>
      <CommonHero
        title="Conquer Your Tasks with Smart Checklists"
        description="Managing a vacation rental has never been easier! With SimpliHost, every task is organized, every checklist is clear, and every operation runs smoothly."
        imgSrc={aroundcircle}
        imgAlt="About Hero"
      />
      <CommonMid
        title="Automate Away the Boring Stuff!"
        description="With our tools, managing your vacation rental is a total breeze. Whip up detailed checklists for cleaning and inspections, and watch every task get checked off with flair. Maintenance and admin tasks? No sweat! Assign and track them easily, and enjoy that sweet peace of mind knowing everything’s under control."
        imgSrc1={stuffpic1}
        imgAlt1="Image 1"
        imgSrc2={stuffpic2}
        imgAlt2="Image 2"
      />
      <GuestSection
        title="Why You'll Love Our Tasks and Checklists"
        checklistItems={checklistItems}
        imgSrc={automationtic}
        description="Our task and checklist system is your secret weapon to streamline operations, zap errors, and save tons of time. From sparkling clean properties to hassle-free maintenance, our tools keep you organized and efficient. Supercharge your workflow, keep your team in sync, and wow your guests with the ultimate hosting experience!"
      />
      <WhySimplihost />
      <Sliderr />
    </div>
  );
}

export default TaskandChecklist;
