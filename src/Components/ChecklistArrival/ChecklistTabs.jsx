import React, { useState, useRef, useEffect } from "react";
import DetailPage from "./DetailPage";

function ChecklistTabs() {
  const [activeTab, setActiveTab] = useState("details");
  const tabRefs = useRef({});

  useEffect(() => {
    tabRefs.current[activeTab]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabs = [
    {
      id: "details",
      label: "Details",
      content: <DetailPage activeTab={activeTab} />,
    },
    {
      id: "kitchen",
      label: "Kitchen",
      content: <DetailPage activeTab={activeTab} />,
    },
    {
      id: "living-room",
      label: "Living Room",
      content: <DetailPage activeTab={activeTab} />,
    },
    {
      id: "bathroom-1",
      label: "Bathroom No. 1",
      content: <DetailPage activeTab={activeTab} />,
    },
    {
      id: "bedroom-1",
      label: "Bedroom No. 1",
      content: <DetailPage activeTab={activeTab} />,
    },
    {
      id: "bathroom-2",
      label: "Bathroom No. 2",
      content: <DetailPage activeTab={activeTab} />,
    },
    {
      id: "bedroom-2",
      label: "Bedroom No. 2",
      content: <DetailPage activeTab={activeTab} />,
    },
    {
      id: "basement",
      label: "Basement",
      content: <DetailPage activeTab={activeTab} />,
    },
  ];

  return (
    <section>
      <div>
        <nav className="main-tabs">
          <div
            className="nav nav-tabs border-0 border-bottom"
            id="nav-tab"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                id={`${tab.id}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id ? "true" : "false"}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content mt-3" id="nav-tabContent">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                ref={(el) => (tabRefs.current[tab.id] = el)}
                className={`tab-pane fade ${
                  activeTab === tab.id ? "show active" : ""
                }`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

export default ChecklistTabs;
