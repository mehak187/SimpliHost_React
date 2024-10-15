import React from "react";
import { Link } from "react-router-dom";
import globe from "../../assets/img/globe.svg";
import seting from "../../assets/img/seting.svg";
import suitcase from "../../assets/img/suitcase.svg";
import heart from "../../assets/img/heart.svg";
import cf11 from "../../assets/img/cf-11.svg";
import cf1 from "../../assets/img/cf-1.svg";
import cf2 from "../../assets/img/cf-2.svg";
import cf4 from "../../assets/img/cf-4.svg";
import cf5 from "../../assets/img/cf-5.svg";
import cf6 from "../../assets/img/cf-6.svg";
import cf7 from "../../assets/img/cf-7.svg";
import cf8 from "../../assets/img/cf-8.svg";
import support1 from "../../assets/img/msg-pic.svg";
import support2 from "../../assets/img/cut-heart.svg";
import support3 from "../../assets/img/handuser.svg";
import FaqSection from "./FaqSection";
import GotbackSection from "./GotbackSection";
import WhySimplihost from "./WhySimplihost";
import BrandsSection from "./BrandsSection";

function Feature() {
  const FeatureCard = (props) => {
    return (
      <div class="col-lg-3 col-md-4 col-sm-6  mb-4">
        <div class="bg-grey p-4 rounded-5 h-100 d-flex flex-column">
          <div class="bg-yellow d-flex justify-content-center align-items-center p-3 rounded-3 coreF-card1 mb-4">
            <img src={props.img} alt="pic" class="" />
          </div>
          <div class="mb-5">
            <h5 class="mb-3 fw-semi text-capitalize">{props.name}</h5>
            <p class="mb-0">{props.des}</p>
          </div>
          <div class="text-center mt-auto">
            <Link
              to={props.link}
              class="w-100 d-block text-white opacity-hover text-decoration-none border-0 explore-btn w-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const potentials = [
    {
      title: "Easy to Use",
      description:
        "All your bookings, one easy view. Add, cancel, or adjust bookings in just a few clicks!",
    },
    {
      title: "Efficient",
      description:
        "Automate the routine, minimize errors, and free up your time for the big decisions.",
    },
    {
      title: "Powerful & Versatile",
      description:
        "Streamline every phase of your guest’s vacation journey with our robust platform.",
    },
    {
      title: "Secure & Compliant",
      description:
        "We prioritize your privacy and security. SimpliHost is committed to keeping your data and your guests’ data safe and compliant with top security standards.",
    },
    {
      title: "Success Training",
      description:
        "Our expert team is here to ensure a smooth start. We stick with you until everything’s running like clockwork.",
    },
    {
      title: "Customer Support",
      description:
        "Whether it’s through tutorials, our comprehensive knowledge center, or live chat, our support team is ready to assist you.",
    },
    {
      title: "Anytime, Anywhere, Any Device",
      description:
        "Manage your properties effortlessly, no matter where you are or what device you’re using.",
    },
    {
      title: "Community Support",
      description:
        "Dive into our vibrant support community. Share insights, get tips, and learn from fellow users.",
    },
    {
      title: "Expert Knowledge",
      description:
        "As vacation rental owners ourselves, we’ve got the insider scoop! Tap into our tailored knowledge to boost your property management skills and grow your business like a pro.",
    },
  ];

  const supportItems = [
    {
      img: support1,
      title: "Email, Phone & Chat",
      description:
        "You’re never alone. Our Customer Support team of in-house staff are available via chat, phone and email to provide industry-leading customer care.",
    },
    {
      img: support2,
      title: "Extra Support",
      description:
        "With our all-inclusive package, you get unlimited in-app support to help you make the most of our platform. Plus, enjoy a one-on-one onboarding session during your first 30 days—completely free!",
    },
    {
      img: support3,
      title: "Customer Success",
      description:
        "We Won’t Leave You Hanging! Our Customer Success team will check in regularly to understand your business goals and help you make the most of the SimpliHost platform.",
    },
  ];
  return (
    <div>
      <section class="fhero-sec pt-5 bg-grey">
        <div class="container">
          <div class="feature-div mb-4">
            <h1 class="fw-bold mb-4">Feature-Packed, No Extras Needed!</h1>
            <p class="mb-0 feature-para">
              Tired of tedious tasks? Our platform automates your daily to-dos,
              freeing up your time and reducing those pesky manual mistakes.
              It's the hero you never knew you needed, streamlining operations
              and ensuring everything runs smoothly. With SimpliHost, you’re not
              just managing properties; you’re mastering efficiency and boosting
              your bottom line effortlessly!
            </p>
          </div>
        </div>
      </section>
      <BrandsSection />
      <section class="vacation-sec py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3 mb-md-0">
                <h2 class="fw-bold mb-4">
                  The vacation rental industry’s leading property management
                  system
                </h2>
                <p class="mb-0 vacation-para">
                  Wave goodbye to the grind and hello to hassle-free automation
                  with SimpliHost! Cut down on repetitive tasks, slash errors,
                  and tailor tech that fits just right. Ready to kick back while
                  our PMS works wonders? Sign up for a free trial now and see
                  how SimpliHost can elevate your property management to new
                  heights!
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-sm-6 mb-3">
                  <div class="bg-blue p-3 rounded-4 h-100">
                    <div class="bg-white p-2 rounded-3 d-flex justify-content-center align-items-center">
                      <img src={globe} alt="pic" class="vacation-cardPic" />
                    </div>
                    <div class="mt-3 text-white">
                      <h5 class="fw-semi">50</h5>
                      <p class="mb-0">Countries Simplihost Operates in</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6 mb-3">
                  <div class="bg-green p-3 rounded-4 h-100">
                    <div class="bg-white p-2 rounded-3 d-flex justify-content-center align-items-center">
                      <img src={seting} alt="pic" class="vacation-cardPic" />
                    </div>
                    <div class="mt-3 text-white">
                      <h5 class="fw-semi">50</h5>
                      <p class="mb-0">Number of integrations</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6 mb-3">
                  <div class="bg-yellow p-3 rounded-4 h-100">
                    <div class="bg-white p-2 rounded-3 d-flex justify-content-center align-items-center">
                      <img src={suitcase} alt="pic" class="vacation-cardPic" />
                    </div>
                    <div class="mt-3 text-white">
                      <h5 class="fw-semi">50</h5>
                      <p class="mb-0">Bookings Per Month</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6 mb-3">
                  <div class="bg-orange p-3 rounded-4 h-100">
                    <div class="bg-white p-2 rounded-3 d-flex justify-content-center align-items-center">
                      <img src={heart} alt="pic" class="vacation-cardPic" />
                    </div>
                    <div class="mt-3 text-white">
                      <h5 class="fw-semi">50</h5>
                      <p class="mb-0">Preferred Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="coreFeature">
        <div class="container">
          <h2 class="text-center mb-4 fw-bold">Core Features</h2>
          <div class="row">
            <FeatureCard
              name="Unified Inbox"
              des="A single destination for guest communication synched with your
              listing data across all channels."
              link="/unified-inbox"
              img={cf11}
            />
            <FeatureCard
              name="Smart Devices Integration"
              des="Eliminate repetitive tasks and reduce
                mistakes with booking reminders, directions,
                payment requests and more based on
                easy-to-create rules."
              link="/smart-devices"
              img={cf1}
            />
            <FeatureCard
              name="Task and Checklists"
              des="Eliminate repetitive tasks and reduce
            mistakes with booking reminders, directions,
            payment requests and more based on
            easy-to-create rules."
              link="/task-and-checklist"
              img={cf2}
            />
            <FeatureCard
              name="Inventory Management"
              des="Eliminate repetitive tasks and reduce
                mistakes with booking reminders, directions,
                payment requests and more based on
                easy-to-create rules."
              link="/inventory-management"
              img={cf4}
            />
            <FeatureCard
              name="Maintenance Tracking"
              des="A single destination for guest communication
            synched with your listing data across all
            channels."
              link="/maintenance-tracking"
              img={cf5}
            />
            <FeatureCard
              name="Co-Hosting"
              des="Create invoices, share financial reports, and 
            give owners access to their property calendars.
            Simplify your co-hosting duties and keep 
            everyone in the loop!"
              link="/cohosting"
              img={cf6}
            />
            <FeatureCard
              name="Automations"
              des="Eliminate repetitive tasks and reduce mistake
            with booking reminders, directions, payment
            requests and more based on
            easy-to-create rules."
              link="/automation"
              img={cf7}
            />
            <FeatureCard
              name="Direct Booking"
              des="Eliminate repetitive tasks and reduce
            mistakes with booking reminders, directions,
            payment requests and more based on
            easy-to-create rules."
              link="/direct-booking"
              img={cf8}
            />
          </div>
        </div>
      </section>
      <WhySimplihost />
      <section className="unlock-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="fw-bold text-center mb-5">
                Unlock your potential with{" "}
                <span className="litblue">Simplihost</span> Property Management
                Platform
              </h2>
              <div className="row">
                {potentials.map((potential, index) => (
                  <div key={index} className="col-md-4 col-sm-6 mb-4 position-relative potential-box">
                    <div className="trans-shadow p-4 rounded-4 h-100">
                      <h5 className="fw-semi">{potential.title}</h5>
                      <p className="mb-0">{potential.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="onboarding-sec py-5">
        <div className="container">
          <div className="row">
            <h2 className="fw-bold text-center mb-4">Onboarding & Support</h2>
            {supportItems.map((item, index) => (
              <div key={index} className="col-lg-4 col-sm-6 mb-4">
                <div className="my-shadow p-4 rounded-4 onboarding-card h-100 d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="bg-exblue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                      <img src={item.img} alt={item.title} className="" />
                    </div>
                    <h5 className="ms-3 fw-semi">{item.title}</h5>
                  </div>
                  <div className="mb-5">
                    <p className="mb-0">{item.description}</p>
                  </div>
                  <div className="mt-auto">
                    <Link href="#"
                      type="button"
                      className="border-0 text-decoration-none explore-btn mt-2 rounded-5 leran-btn opacity-hover fw-semi"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <GotbackSection />
    </div>
  );
}

export default Feature;
