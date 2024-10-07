import React from "react";
import CoHostDetails from "../Components/CoHosting/CoHostDetails";
import CoHostProperties from "../Components/CoHosting/CoHostProperties";
import CoHostOpenInvoices from "../Components/CoHosting/CoHostOpenInvoices";
import PastInvoices from "../Components/CoHosting/PastInvoices";
import CoHostFiles from "../Components/CoHosting/CoHostFiles";
import CoHostUser from "../Components/CoHosting/CoHostUser";
import CoHostExpenses from "../Components/CoHosting/CoHostExpenses";

function CohostingDetails() {
  return (
    <section>
      <div>
        <nav className="main-tabs">
          <div
            className="nav nav-tabs border-0 border-bottom"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="details-tab"
              data-bs-toggle="tab"
              data-bs-target="#details"
              type="button"
              role="tab"
              aria-controls="details"
              aria-selected="true"
            >
              Details
            </button>
            <button
              className="nav-link"
              id="properties-tab"
              data-bs-toggle="tab"
              data-bs-target="#properties"
              type="button"
              role="tab"
              aria-controls="properties"
              aria-selected="false"
            >
              Properties
            </button>
            <button
              className="nav-link"
              id="open-invoices-tab"
              data-bs-toggle="tab"
              data-bs-target="#open-invoices"
              type="button"
              role="tab"
              aria-controls="open-invoices"
              aria-selected="false"
            >
              Open Invoices
            </button>
            <button
              className="nav-link"
              id="past-invoices-tab"
              data-bs-toggle="tab"
              data-bs-target="#past-invoices"
              type="button"
              role="tab"
              aria-controls="past-invoices"
              aria-selected="false"
            >
              Past Invoices
            </button>
            <button
              className="nav-link"
              id="files-tab"
              data-bs-toggle="tab"
              data-bs-target="#files"
              type="button"
              role="tab"
              aria-controls="files"
              aria-selected="false"
            >
              Files
            </button>
            <button
              className="nav-link"
              id="user-tab"
              data-bs-toggle="tab"
              data-bs-target="#user"
              type="button"
              role="tab"
              aria-controls="user"
              aria-selected="false"
            >
              User
            </button>
            <button
              className="nav-link"
              id="expenses-tab"
              data-bs-toggle="tab"
              data-bs-target="#expenses"
              type="button"
              role="tab"
              aria-controls="expenses"
              aria-selected="false"
            >
              Expenses
            </button>
          </div>
          <div className="tab-content mt-3" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="details"
              role="tabpanel"
              aria-labelledby="details-tab"
              tabIndex={0}
            >
              <CoHostDetails />
            </div>
            <div
              className="tab-pane fade"
              id="properties"
              role="tabpanel"
              aria-labelledby="properties-tab"
              tabIndex={0}
            >
              <CoHostProperties />
            </div>
            <div
              className="tab-pane fade"
              id="open-invoices"
              role="tabpanel"
              aria-labelledby="open-invoices-tab"
              tabIndex={0}
            >
              <CoHostOpenInvoices />
            </div>
            <div
              className="tab-pane fade"
              id="past-invoices"
              role="tabpanel"
              aria-labelledby="past-invoices-tab"
              tabIndex={0}
            >
              <PastInvoices />
            </div>
            <div
              className="tab-pane fade"
              id="files"
              role="tabpanel"
              aria-labelledby="files-tab"
              tabIndex={0}
            >
              <CoHostFiles />
            </div>
            <div
              className="tab-pane fade"
              id="user"
              role="tabpanel"
              aria-labelledby="user-tab"
              tabIndex={0}
            >
              <CoHostUser />
            </div>
            <div
              className="tab-pane fade"
              id="expenses"
              role="tabpanel"
              aria-labelledby="expenses-tab"
              tabIndex={0}
            >
              <CoHostExpenses />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default CohostingDetails;
