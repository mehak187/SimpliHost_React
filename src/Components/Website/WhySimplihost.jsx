import React from "react";
import simplest1 from "../../assets/img/simplest1.png";
import simplest2 from "../../assets/img/simplest2.svg";
import simplest3 from "../../assets/img/simplies3.svg";

function WhySimplihost() {
  const cards = [
    {
      imgSrc: simplest1,
      altText: "All in one",
      title: "All-In-One Awesomeness",
      description:
        "No need to buy separate systems for cleaning or remote locks—it’s all here.",
    },
    {
      imgSrc: simplest2,
      altText: "Free Personal Onboarding",
      title: "Free Personal Onboarding",
      description:
        "We’ll get you up and running in no time with personalized help from a real live person.",
    },
    {
      imgSrc: simplest3,
      altText: "No Extra Charges",
      title: "No Extra Charges",
      description:
        "Access every feature from day one, with no hidden fees or add-ons.",
    },
  ];

  return (
    <section className="simplehost py-4">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-10 mx-auto">
            <h2 className="black-color fw-semi text-center mb-4">
              Why Simplihost
            </h2>
            <div className="row">
              {cards.map((card, index) => (
                <div key={index} className="col-lg-4 col-md-6 mt-3">
                  <div className="simplihost-card p-3 h-100">
                    <div>
                      <img
                        src={card.imgSrc}
                        alt={card.altText}
                        className="w-100 h-100"
                      />
                    </div>
                    <div>
                      <p className="mb-0 fs-5 fw-semi blue-color mt-3">
                        {card.title}
                      </p>
                    </div>
                    <p className="mb-0 light-grey mt-2">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySimplihost;
