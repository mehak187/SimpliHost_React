import React from "react";
import { Link } from "react-router-dom";

function GotbackSection() {
  return (
    <section className="gotBack-sec py-4 py-lg-5 mt-5">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-lg-6">
            <div className="mb-4 mb-lg-0">
              <h2 className="fw-bold">We've got your back.</h2>
              <p className="mb-0 gotBack-para">
                Get answers when you need them. Our knowledgeable team is there
                to answer your inquiries, investigate your queries, and they
                genuinely want to provide you with a better experience. Simply
                reach out to us via email (
                <Link
                  to="mailto:simplihost@gmail.com"
                  target="_blank"
                  className=""
                >
                  simplihost@gmail.com
                </Link>
                ) or click the button below to start chatting now.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6 mb-4 mb-sm-0">
                <div className="gotBack-shadow p-4 rounded-4 bg-white">
                  <div className="mb-5">
                    <h5 className="fw-semi">Average Customer Service Rating</h5>
                  </div>
                  <div className="bg-exsky p-4 rounded-4 text-center">
                    <h3 className="fw-extra-bold litblue">+95%</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="gotBack-shadow p-4 rounded-4 bg-white">
                  <div className="mb-5">
                    <h5 className="fw-semi">
                      Support with agents all over the world
                    </h5>
                  </div>
                  <div className="bg-exsky p-4 rounded-4 text-center">
                    <h3 className="fw-extra-bold litblue">24/7</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GotbackSection;
