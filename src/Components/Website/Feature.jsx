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
import whychoose1 from "../../assets/img/simplest 1.png";
import whychoose2 from "../../assets/img/simplest2.svg";
import whychoose3 from "../../assets/img/simplies3.svg";
import support1 from "../../assets/img/msg-pic.svg";
import support2 from "../../assets/img/cut-heart.svg";
import support3 from "../../assets/img/handuser.svg";
import FaqSection from "./FaqSection";
import GotbackSection from "./GotbackSection";


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
            <FeatureCard
              name="Unified Inbox"
              des="A single destination for guest communication synched with your
              listing data across all channels."
              link=""
              img={cf11}
            />
            <FeatureCard
              name="Smart Devices Integration"
              des="Eliminate repetitive tasks and reduce
                mistakes with booking reminders, directions,
                payment requests and more based on
                easy-to-create rules."
              link="/task-and-checklist"
              img={cf1}
            />
            <FeatureCard
              name="Task and Checklists"
              des="Eliminate repetitive tasks and reduce
            mistakes with booking reminders, directions,
            payment requests and more based on
            easy-to-create rules."
              link="/inventory-management"
              img={cf2}
            />
            <FeatureCard
              name="Inventory Management"
              des="Eliminate repetitive tasks and reduce
                mistakes with booking reminders, directions,
                payment requests and more based on
                easy-to-create rules."
              link="#"
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
              link="/cohosting#"
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
      <section class="simplehost py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="row">
                        <h2 class="black-color fw-bold text-center">Why Simplihost</h2>
                        <div class="col-lg-4 col-md-6 mt-3">
                            <div class="simplihost-card p-3 h-100">
                                <div>
                                    <img src={whychoose1} alt="All in one" class="w-100 h-100" />
                                </div>
                                <p class="mb-0 fs-4 fw-bold blue-color mt-3">All-In-One Awesomeness</p>
                                <p class="mb-0 light-grey mt-2">No need to buy separate systems for cleaning or remote
                                    locks—it’s all</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-3">
                            <div class="simplihost-card p-3 h-100">
                                <div>
                                    <img src={whychoose2} alt="All in one" class="w-100 h-100" />
                                </div>
                                <p class="mb-0 fs-4 fw-bold blue-color mt-3">Free Personal Onboarding</p>
                                <p class="mb-0 light-grey mt-2">We’ll get you up and running in no time with
                                    personalized help from a real live person.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-3">
                            <div class="simplihost-card p-3 h-100">
                                <div>
                                    <img src={whychoose3} alt="All in one" class="w-100 h-100" />
                                </div>
                                <p class="mb-0 fs-4 fw-bold blue-color mt-3">No Extra Charges</p>
                                <p class="mb-0 light-grey mt-2">Access every feature from day one, with no
                                    hidden fees or add-ons.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="unlock-sec py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="row">
                        <h2 class="fw-bold text-center mb-5">Unlock your potential with <span
                                class="litblue">Simplihost</span>
                            Property Management Platform</h2>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Easy to Use</h5>
                                <p class="mb-0">All your bookings, one easy view.
                                    Add, cancel, or adjust bookings in
                                    just a few clicks!</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Efficient</h5>
                                <p class="mb-0">Automate the routine,
                                    minimize errors, and
                                    free up your time for the big decisions.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Powerful & Versatile</h5>
                                <p class="mb-0">Streamline every phase of your guest’s
                                    vacation journey with our robust platform.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Secure & Compliant</h5>
                                <p class="mb-0">We prioritize your privacy and security.
                                    SimpliHost is committed to keeping your
                                    data and your guests’ data safe and
                                    compliant with top security standards.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Success Training</h5>
                                <p class="mb-0">Our expert team is here to ensure a
                                    smooth start. We stick with you until
                                    everything’s running like clockwork.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Customer Support</h5>
                                <p class="mb-0">Whether it’s through tutorials, our
                                    comprehensive knowledge center, or
                                    live chat, our support team is ready to
                                    assist you.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Anytime, Anywhere, Any Device</h5>
                                <p class="mb-0">Manage your properties effortlessly,
                                    no matter where you are or what
                                    device you’re using.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Community support</h5>
                                <p class="mb-0">Dive into our vibrant support community.
                                    Share insights, get tips, and learn from
                                    fellow users.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mb-4">
                            <div class="trans-shadow p-4 rounded-4 h-100">
                                <h5 class="fw-semi">Expert knowledge</h5>
                                <p class="mb-0">As vacation rental owners ourselves, we’ve
                                    got the insider scoop! Tap into our tailored
                                    knowledge to boost your property
                                    management skills and grow your business
                                    like a pro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="onboarding-sec py-5">
        <div class="container">
            <div class="row">
                <h2 class="fw-bold text-center mb-5">Onboarding & Support</h2>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="my-shadow p-4 rounded-4 onboarding-card h-100 d-flex flex-column">
                        <div class="d-flex align-items-center">
                            <div
                                class="bg-exblue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                                <img src={support1} alt="pic" class="" />
                            </div>
                            <h5 class="ms-3 fw-semi">Email, Phone & Chat</h5>
                        </div>
                        <div class="mb-5">
                            <p class="mb-0">You’re never alone. Our Customer Support team
                                of in-house staff are available via chat, phone
                                and email to provide industry-leading
                                customer care.</p>
                        </div>
                        <div class="mt-auto">
                            <button type="button" class="border-0 explore-btn mt-2 rounded-5 leran-btn fw-semi">Learn
                                More</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="my-shadow p-4 rounded-4 onboarding-card h-100 d-flex flex-column">
                        <div class="d-flex align-items-center">
                            <div
                                class="bg-exblue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                                <img src={support2} alt="pic" class="" />
                            </div>
                            <h5 class="ms-3 fw-semi">Extra Support</h5>
                        </div>
                        <div class="mb-5">
                            <p class="mb-0">With our all-inclusive package, you get unlimited
                                in-app support to help you make the most of our
                                platform. Plus, enjoy a one-on-one onboarding
                                session during your first 30 days—completely free!</p>
                        </div>
                        <div class="mt-auto">
                            <button type="button" class="border-0 explore-btn mt-2 rounded-5 leran-btn fw-semi">Learn
                                More</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="my-shadow p-4 rounded-4 onboarding-card h-100 d-flex flex-column">
                        <div class="d-flex align-items-center">
                            <div
                                class="bg-exblue d-flex justify-content-center align-items-center p-3 rounded-4 coreF-card1 mb-4">
                                <img src={support3} alt="pic" class="" />
                            </div>
                            <h5 class="ms-3 fw-semi">Customer Success</h5>
                        </div>
                        <div class="mb-5">
                            <p class="mb-0">We Won’t Leave You Hanging! Our Customer
                                Success team will check in regularly to understand
                                your business goals and help you make the most of
                                the SimpliHost platform.</p>
                        </div>
                        <div class="mt-auto">
                            <Link to="#" class="border-0 text-decoration-none  explore-btn mt-2 rounded-5 leran-btn fw-semi">Learn
                                More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FaqSection />
    <GotbackSection />
    </div>
  );
}

export default Feature;
