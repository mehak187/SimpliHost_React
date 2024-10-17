import React from "react";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "How do you support direct bookings from guests?",
    answer:
      "Simplihost helps you manage your property seamlessly with features like booking management, automated communications, and more.",
  },
  {
    question:
      "Can I create a custom website for direct bookings through the software?",
    answer:
      "Simplihost offers unique features like customizable booking settings and integration with popular listing platforms.",
  },
  {
    question: "Do you handle payments for direct bookings?",
    answer:
      "Our team provides personalized onboarding assistance to ensure you get up and running quickly.",
  },
  {
    question: "How do you prevent double bookings with direct reservations?",
    answer:
      "Yes, Simplihost offers a mobile application for easy access and management on the go.",
  },
  {
    question: "Can I set up discount codes for direct bookings?",
    answer:
      "Yes, we offer various product demos that showcase Simplihost's features. You can find them on our website.",
  },
];

function DirectBookingFaq() {
  return (
    <section className="accordian-sec w-100">
      <div className="container psm-2 p-0">
        <div className="rounded-4 py-3 px-3 bg-green">
          <div className="faq-height w-100">
            <div className="pt-4 px-sm-4 pe-2 rounded-4">
              <h3 className="fw-bold">Direct Booking</h3>
              <p className="mb-4 fw-semi">
                About Simplihost Property Management Platform
              </p>
              <div
                className="accordion accordion-flush custom-accordion"
                id="accordionFlushExample"
              >
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
                        <FaPlus className="icon text-black fs-5 ms-auto" />
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body px-3 px-md-4 pt-0">
                        {faq.answer}
                      </div>
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

export default DirectBookingFaq;


