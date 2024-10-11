import React from "react";
import simplest1 from "../../assets/img/simplest1.png";
import simplest2 from "../../assets/img/simplest2.svg";
import simplest3 from "../../assets/img/simplies3.svg";

function WhySimplihost() {
  return (
    <div>
      <section className="simplehost py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <h2 className="black-color fw-semi text-center">
                  Why Simplihost
                </h2>
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="simplihost-card p-3 h-100">
                    <div>
                      <img
                        src={simplest1}
                        alt="All in one"
                        className="w-100 h-100"
                      />
                    </div>
                    <p className="mb-0 fs-4 fw-semi blue-color mt-3">
                      All-In-One Awesomeness
                    </p>
                    <p className="mb-0 light-grey mt-2">
                      No need to buy separate systems for cleaning or remote
                      locks—it’s all
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="simplihost-card p-3 h-100">
                    <div>
                      <img
                        src={simplest2}
                        alt="All in one"
                        className="w-100 h-100"
                      />
                    </div>
                    <p className="mb-0 fs-4 fw-semi blue-color mt-3">
                      Free Personal Onboarding
                    </p>
                    <p className="mb-0 light-grey mt-2">
                      We’ll get you up and running in no time with personalized
                      help from a real live person.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="simplihost-card p-3 h-100">
                    <div>
                      <img
                        src={simplest3}
                        alt="All in one"
                        className="w-100 h-100"
                      />
                    </div>
                    <p className="mb-0 fs-4 fw-semi blue-color mt-3">
                      No Extra Charges
                    </p>
                    <p className="mb-0 light-grey mt-2">
                      Access every feature from day one, with no hidden fees or
                      add-ons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhySimplihost;
