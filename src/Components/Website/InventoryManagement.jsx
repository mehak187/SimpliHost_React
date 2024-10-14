import React from "react";
import CommonHero from "./CommonHero";
import stock1 from "../../assets/img/stock1.svg";
import stock2 from "../../assets/img/stock2.png";
import effotlesshero from "../../assets/img/effotlesshero.svg";
import automationtic from "../../assets/img/automation-tic.svg";
import CommonMid from "./CommonMid";
import WhySimplihost from "./WhySimplihost";
import Sliderr from "./Sliderr";
import GuestSection from "./GuestSection";

function InventoryManagement() {
  const checklistItems = [
    "Real-Time Tracking",
    "Custom Alerts",
    "Detailed Reports",
    "Centralized Dashboard",
  ];
  return (
    <div>
      <CommonHero
        title="Effortless Inventory Management: Stay Stocked, Stay Sane"
        description="Tired of running out of essentials at the worst moments? 
                     Our inventory management system ensures you’re always in the know, so you never have to scramble for supplies again."
        imgSrc={effotlesshero}
        imgAlt="About Hero"
      />
      <CommonMid
        title="Streamline Your Stock: Simplify Inventory Management"
        description="Stay ahead of the game with our smart inventory management tools. Monitor stock levels in real-time to keep essentials flowing without a hitch. Custom alerts keep you informed about low supplies, and detailed reports help you make savvy decisions. With everything centralized in one easy-to-use dashboard, managing inventory has never been simpler—or more fun!"
        imgSrc1={stock1}
        imgAlt1="Image 1"
        imgSrc2={stock2}
        imgAlt2="Image 2"
      />
      <GuestSection
        title="Perks of Our Inventory Management"
        checklistItems={checklistItems}
        imgSrc={automationtic}
        description="Whether you’re keeping track of cleaning supplies, guest amenities, or maintenance tools, our inventory
                    management system ensures you’re always prepared. No more last-minute runs to the
                    store—just smooth, efficient, and stress-free inventory control."
      />
      <WhySimplihost />
      <Sliderr />
    </div>
  );
}

export default InventoryManagement;
