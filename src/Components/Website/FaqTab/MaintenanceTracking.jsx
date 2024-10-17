import React from "react";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "Can I track the last service date for appliances and equipment?",
    answer:
      "Simplihost helps you manage your property seamlessly with features like booking management, automated communications, and more.",
  },
  {
    question:
      "Is there a way to set up reminders for upcoming maintenance?",
    answer:
      "Simplihost offers unique features like customizable booking settings and integration with popular listing platforms.",
  },
  {
    question: "Do you support photo documentation for maintenance tasks?",
    answer:
      "Our team provides personalized onboarding assistance to ensure you get up and running quickly.",
  },
  {
    question: "Can I generate reports on maintenance activities and costs?",
    answer:
      "Yes, Simplihost offers a mobile application for easy access and management on the go.",
  },
  {
    question: "Can I set up automatic alerts for overdue maintenance?",
    answer:
      "Yes, we offer various product demos that showcase Simplihost's features. You can find them on our website.",
  },
];

function MaintenanceTracking() {
  return (
    <section className="accordian-sec w-100">
      <div className="container">
        <div className="rounded-4 py-3 px-3 bg-green">
          <div className="faq-height w-100">
            <div className="pt-2 px-sm-3 pe-2 rounded-4">
              <h3 className="fw-bold">Maintenance Tracking</h3>
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

export default MaintenanceTracking;


