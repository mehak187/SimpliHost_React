import React from "react";
import DetailPage from "./DetailPage";

function ChecklistTabs() {
  const tabs = [
    { id: "details", label: "Details", content: <DetailPage /> },
    { id: "calendar", label: "Kitchen", content: "" },
    { id: "pricing", label: "Living Room", content: "" },
    { id: "tasks", label: "Bathroom No. 1", content: "" },
    { id: "checklists", label: "Bedroom No. 1", content: "" },
    { id: "inventory", label: "Bathroom No. 2", content: "" },
    { id: "automations", label: "Bedroom No. 2", content: "" },
    { id: "smart-devices", label: "Basement", content: "" },
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
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`${tab.id}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content mt-3" id="nav-tabContent">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
                tabIndex={0}
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
