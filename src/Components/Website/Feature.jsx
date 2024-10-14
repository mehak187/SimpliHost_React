import React from "react";
import { Link } from "react-router-dom";
import imglogo1 from "../../assets/img/logo-p1.svg";
import imglogo2 from "../../assets/img/logo-p2.svg";
import imglogo3 from "../../assets/img/logo-p3.svg";
import imglogo4 from "../../assets/img/logo-p4.svg";
import imglogo5 from "../../assets/img/logo-p5.svg";
import imglogo6 from "../../assets/img/logo-p6.svg";
import imglogo7 from "../../assets/img/logo-p7.svg";
import imglogo8 from "../../assets/img/logo-8.svg";
import imglogo9 from "../../assets/img/logo-p9.svg";
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

function Feature() {
  const FeatureCard = (props) => {
    return (
      <div class="col-lg-3 col-md-4 col-sm-6  mb-4">
        <div class="bg-grey p-4 rounded-5 h-100 d-flex flex-column">
          <div class="bg-yellow d-flex justify-content-center align-items-center p-3 rounded-3 coreF-card1 mb-4">
            <img src= {props.img} alt="pic" class="" />
          </div>
          <div class="mb-5">
            <h5 class="mb-3 fw-semi text-capitalize">{props.name}</h5>
            <p class="mb-0">
            {props.des}
            </p>
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
      <section class="logoPics-sec py-5">
        <div class="container">
          <div class="row">
            <div class="col-10 logoImg-main">
              <h3 class="mb-4 litblue fw-bold">
                Get More Done with Our Awesome Integrations!
              </h3>
              <div class="row justify-content-center">
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo1} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo2} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo3} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo4} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo5} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3 ms-lg-5 ms-0">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo6} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 d-flex justify-content-center align-items-center">
                    <img src={imglogo7} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo8} alt="logo" class="logo-imgs" />
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 mb-3">
                  <div class="bg-grey logoimg-main rounded-3 py-2 d-flex justify-content-center align-items-center">
                    <img src={imglogo9} alt="logo" class="logo-imgs" />
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to="#"
                  type="button"
                  class="border-0 text-decoration-none explore-btn mt-2"
                >
                  Explore the Full List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section class="coreFeature py-5">
        <div class="container">
          <h2 class="text-center mb-4 fw-bold">Core Features</h2>
          <div class="row">
            <FeatureCard name="Unified Inbox" des="A single destination for guest communication synched with your
              listing data across all channels."  link="#" img={cf11}/>
               <FeatureCard name="Smart Devices Integration" des="Eliminate repetitive tasks and reduce
mistakes with booking reminders, directions,
payment requests and more based on
easy-to-create rules."  link="#" img={cf1}/>
               <FeatureCard name="Task and Checklists" des="Eliminate repetitive tasks and reduce
mistakes with booking reminders, directions,
payment requests and more based on
easy-to-create rules."  link="#" img={cf2}/>
               <FeatureCard name="Inventory Management" des="Eliminate repetitive tasks and reduce
mistakes with booking reminders, directions,
payment requests and more based on
easy-to-create rules."  link="#" img={cf4}/>
               <FeatureCard name="Maintenance Tracking" des="A single destination for guest communication
synched with your listing data across all
channels."  link="#" img={cf5}/>
               <FeatureCard name="Co-Hosting" des="Create invoices, share financial reports, and 
give owners access to their property calendars.
 Simplify your co-hosting duties and keep 
everyone in the loop!"  link="#" img={cf6}/>
               <FeatureCard name="Automations" des="Eliminate repetitive tasks and reduce mistake
with booking reminders, directions, payment
requests and more based on
easy-to-create rules."  link="#" img={cf7}/>
               <FeatureCard name="Direct Booking" des="Eliminate repetitive tasks and reduce
mistakes with booking reminders, directions,
payment requests and more based on
easy-to-create rules."  link="#" img={cf8}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
