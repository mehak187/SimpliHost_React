import React from "react";
import OwnerDetailBox from "./OwnerDetailBox";
import DetailsInvoice from "./DetailsInvoice";
import DetailsFiles from "./DetailsFiles";

function CoHostDetails() {
  return (
    <div>
      <OwnerDetailBox />
      <h4 className="fw-semi mt-4">Properties Details:</h4>
      <div>
        <nav className="main-tabs">
          <div
            className="nav nav-tabs border-0 border-bottom"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="guest-automations-tab"
              data-bs-toggle="tab"
              data-bs-target="#guest-automations"
              type="button"
              role="tab"
              aria-controls="guest-automations"
              aria-selected="true"
            >
              Invoices
            </button>
            <button
              className="nav-link"
              id="operations-automations-tab"
              data-bs-toggle="tab"
              data-bs-target="#operations-automations"
              type="button"
              role="tab"
              aria-controls="operations-automations"
              aria-selected="false"
            >
              Files
            </button>
          </div>
          <div className="tab-content mt-3" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="guest-automations"
              role="tabpanel"
              aria-labelledby="guest-automations-tab"
              tabIndex={0}
            >
              <DetailsInvoice />
            </div>
            <div
              className="tab-pane fade"
              id="operations-automations"
              role="tabpanel"
              aria-labelledby="operations-automations-tab"
              tabIndex={0}
            >
              <DetailsFiles />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CoHostDetails;
