import React from "react";
import CommonHero from "./CommonHero";
import madness1 from "../../assets/img/invoice-p1.svg";
import invoice from "../../assets/img/invoice-p1.png";
import sChargehero from "../../assets/img/sChargehero.svg";
import automationtic from "../../assets/img/automation-tic.svg";
import CommonMid from "./CommonMid";
import WhySimplihost from "./WhySimplihost";
import Sliderr from "./Sliderr";
import GuestSection from "./GuestSection";

function Supercharge() {
  const checklistItems = [
    "Easy Invoicing",
    "Controlled Access",
    "Transparent Financial Reports",
    "Streamlined Communication",
    "Simple Owner Dashboards",
    "Expense Tracking",
  ];
  return (
    <div>
      <CommonHero
        title="Supercharge Your Co-Hosting Game!"
        description="Unlock the power of co-hosting with SimpliHost! Manage multiple properties and owners effortlessly, create invoices, share financial reports, and let property owners see their calendars—all in one place."
        imgSrc={sChargehero}
        imgAlt="About Hero"
      />
      <CommonMid
        title="Share Smartly, Invoice Easily and Keep It Simple!"
        description="Effortlessly handle co-hosting duties with our intuitive platform. Generate invoices, share detailed financial reports, and provide property owners with easy access to their calendars. Plus, control exactly how much information owners can see—nothing more, nothing less. It’s never been easier to manage multiple properties and keep everyone in the loop!"
        imgSrc1={madness1}
        imgAlt1="Image 1"
        imgSrc2={invoice}
        imgAlt2="Image 2"
      />
      <GuestSection
        title="The Joy of Co-Hosting with Us!"
        checklistItems={checklistItems}
        imgSrc={automationtic}
        description="With SimpliHost, co-hosting is a breeze. Generate invoices quickly and accurately, share transparent financial reports, and give property owners easy access to their calendars. Streamline communication and enhance collaboration, making property management efficient and hassle-free. Co-hosting has never been this easy or fun!"
      />
      <WhySimplihost />
      <Sliderr />
    </div>
  );
}

export default Supercharge;
