import React, { useState } from "react";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import UnifiedInboxTab from "../../Components/Website/FaqTab/UnifiedInboxTab";
import SmartDeviceInteraction from "../../Components/Website/FaqTab/SmartDeviceInteraction";
import TaskChecklist from "../../Components/Website/FaqTab/TaskChecklist";
import InventoryManagement from "../../Components/Website/FaqTab/InventoryManagement";
import MaintenanceTracking from "../../Components/Website/FaqTab/MaintenanceTracking";
import CoHostingFaq from "../../Components/Website/FaqTab/CoHostingFaq";
import AutomationFaq from "../../Components/Website/FaqTab/AutomationFaq";
import DirectBookingFaq from "../../Components/Website/FaqTab/DirectBookingFaq";
import { FaSearch } from "react-icons/fa";
import faq1 from "../../assets/img/faq1.png";
import faq2 from "../../assets/img/faq2.png";
import testVideo from "../../assets/img/testvideo.mp4";
import CommonMid from "../../Components/Website/CommonMid";
import stock1 from "../../assets/img/stock1.svg";
import stock2 from "../../assets/img/stock2.png";

function Faq() {
  const [activeTab, setActiveTab] = useState("v-pills-home");

  const tabs = [
    {
      id: "v-pills-home",
      label: "Unified Inbox",
      content: <UnifiedInboxTab />,
    },
    {
      id: "v-pills-profile",
      label: "Smart Device Interaction",
      content: <SmartDeviceInteraction />,
    },
    {
      id: "v-pills-task",
      label: "Task and Checklists",
      content: <TaskChecklist />,
    },
    {
      id: "v-pills-inventory",
      label: "Inventory Management",
      content: <InventoryManagement />,
    },
    {
      id: "v-pills-maintenance",
      label: "Maintenance Tracking",
      content: <MaintenanceTracking />,
    },
    { id: "v-pills-cohosting", label: "Co-Hosting", content: <CoHostingFaq /> },
    {
      id: "v-pills-automation",
      label: "Automations",
      content: <AutomationFaq />,
    },
    {
      id: "v-pills-booking",
      label: "Direct Booking",
      content: <DirectBookingFaq />,
    },
  ];

  return (
    <div className="">
      <section className="commhero-sec py-5 bg-grey d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="">
                <h1 className="fw-bold">We've got answers!</h1>
                <p className="mb-0 comm-para">
                  Read the frequently asked questions to make an informed
                  decision!
                </p>
                <div className="d-flex align-items-center shadow mt-3 border border-1 rounded-pill bg-white px-2 py-1">
                  <input
                    type="search"
                    className="border-0 py-3 px-3 bg-transparent w-100"
                    placeholder={`Search FAQ question here \u{1F64B}`}
                    id=""
                  />
                  <div className="d-flex align-items-center bg-blue text-white px-3 rounded-circle py-3">
                    <FaSearch className="" />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6 my-4">
                    <div className="bg-white d-flex align-items-center shadow p-2 rounded-3">
                      <div className="faq-icons me-2">
                        <img src={faq2} alt="faq" className="w-100" />
                      </div>
                      <div>
                        <p className="fw-bold mb-0">500+</p>
                        <div className="mt-1">Happy Customers</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 my-4">
                    <div className="bg-white d-flex align-items-center shadow p-2 rounded-3">
                      <div className="faq-icons me-2">
                        <img src={faq1} alt="faq" className="w-100" />
                      </div>
                      <div>
                        <p className="fw-bold mb-0">1000+</p>
                        <div className="mt-1">Ready Property</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1 d-lg-block d-none">
              <div className="mb-5 mb-lg-0">
                <video width="600" controls className="rounded-4 w-100">
                  <source src={testVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="effort-sec py-5 mt-lg-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center col-sm-9 col-md-8 col-lg-7">
              <h2 className="fw-bold">
                Which Simplihost product would you like to learn more about?
              </h2>
              <div>
                <img src={stock1} alt={stock1} className="img-fluid" />
              </div>
            </div>
            <div className="text-center col-sm-11 col-md-10 col-lg-9">
              <p className="mb-0 effort-para mt-3">
                Got questions? We've got answers! Dive into our FAQ treasure
                chest to find all the info you need. Whether it’s about
                features, pricing, or just how to get started, we’ve covered the
                basics (and the fun stuff too). No need to wait on hold—get
                quick answers right here and keep things rolling smoothly!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h5 className="fw-semi ms-sm-3">About Simplihost</h5>
          <div className="d-flex flex-md-row flex-column align-items-start vertical-tab">
            <div
              className="nav flex-md-column nav-pills me-md-2 mx-md-0 mx-sm-3 bg-nav py-1 px-2 rounded-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-link d-flex justify-content-between align-items-center ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  id={`${tab.id}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id ? (
                    <FaCaretRight className="fs-3" />
                  ) : (
                    <FaCaretDown className="fs-3" />
                  )}
                </button>
              ))}
            </div>
            <div
              className="tab-content p-0 w-100 mt-md-0 mt-3"
              id="v-pills-tabContent"
            >
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${
                    activeTab === tab.id ? "show active" : ""
                  }`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                  tabIndex="0"
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
