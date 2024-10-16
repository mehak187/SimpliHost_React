import React from "react";
import jazzp1 from "../../assets/img/jazzp1.svg";
import jazzp2 from "../../assets/img/jaazp2.png";
import CommonHero from "../../Components/Website/CommonHero";
import bookinghero from "../../assets/img/bookinghero.svg";
import automationtic from "../../assets/img/automation-tic.svg";
import CommonMid from "../../Components/Website/CommonMid";
import WhySimplihost from "../../Components/Website/WhySimplihost";
import Sliderr from "../../Components/Website/Sliderr";
import GuestSection from "../../Components/Website/GuestSection";
import FaqSection from "../../Components/Website/FaqSection";
import CheckoutFeatures from "../../Components/Website/CheckoutFeatures";
import GotbackSection from "../../Components/Website/GotbackSection";

function BookDirect() {
  const checklistItems = [
    "Higher Profits",
    "Customizable Widgets",
    "Full Control over Bookings",
    "Guest Screening",
    "Seamless Integration",
    "Increase Guest Loyalty",
  ];
  return (
    <div>
      <CommonHero
        title="Score More Bookings,Book Direct!"
        description="With our nifty widgets and website builder, you can say goodbye to commission fees and hello to stronger guest relationships. Everything you need, all in one place—easy peasy!"
        imgSrc={bookinghero}
        imgAlt="About Hero"
      />
      <CommonMid
        title="Get a Spiffy New Website or Jazz Up Your Old One!"
        description="Simplihost comes with a built-in, ready-to-go direct booking site. It's fully customizable—just add your  branding and start booking guests without those pesky platform fees. No coding required!  Already have a fabulous website? No problem! Sync it with our platform using our handy embeddable widget.  Plus, our system keeps your calendars perfectly in sync with all OTAs."
        imgSrc1={jazzp1}
        imgAlt1="Image 1"
        imgSrc2={jazzp2}
        imgAlt2="Image 2"
      />
      <GuestSection
        title="Why SimpliHost Direct Bookings Will Wow You!"
        checklistItems={checklistItems}
        imgSrc={automationtic}
        imgclassName="tic-img"
        description="Direct booking with SimpliHost means more money in your  pocket—no more sharing hard-earned profits with third parties! Build stronger, direct relationships with your guests and showcase  your brand without any distractions. Enjoy the freedom to set  your own cancellation and refund policies, offer discount coupons  to guests, and gain valuable insights from guest interactions.  Plus, get paid faster and boost guest loyalty with personalized  offers. It's all about more control, better data, and keeping  every penny you earn!"
      />
      <WhySimplihost />
      <Sliderr />
      <FaqSection/>
      <CheckoutFeatures/>
      <GotbackSection/>
    </div>
  );
}

export default BookDirect;
