import React from "react";
import { FaPlus } from "react-icons/fa6";


const faqs = [
  {
    question: "How can Simplihost help me?",
    answer: "Simplihost helps you manage your property seamlessly with features like booking management, automated communications, and more.",
  },
  {
    question: "How is Simplihost different from other vacation rental management software?",
    answer: "Simplihost offers unique features like customizable booking settings and integration with popular listing platforms.",
  },
  {
    question: "How will I be supported during onboarding?",
    answer: "Our team provides personalized onboarding assistance to ensure you get up and running quickly.",
  },
  {
    question: "Does Simplihost have a mobile application?",
    answer: "Yes, Simplihost offers a mobile application for easy access and management on the go.",
  },
  {
    question: "Do you have any product demos I can watch and learn more from?",
    answer: "Yes, we offer various product demos that showcase Simplihost's features. You can find them on our website.",
  },
];

function FaqSection() {
  return (
    <section className="accordian-sec py-4 py-lg-5">
      <div className="container">
        <div className="row accrdin-main rounded-4 py-3 px-1 bg-green">
          <div className="col-lg-8">
            <div className="p-4 rounded-4 bg-white">
              <h3 className="fw-bold">Frequently asked questions</h3>
              <p className="mb-4 fw-semi">About Simplihost Property Management Platform</p>
              <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button px-3 px-md-4 collapsed fw-semi"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${index}`}
                      >
                        {faq.question}
                        <FaPlus className="icon text-black fs-5 ms-auto"/>
                        {/* <i className="fas fa-plus" /> */}

                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body px-3 px-md-4 pt-0">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
