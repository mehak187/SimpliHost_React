import React from "react";
import Reservations from "../Components/Reports/Reservations";
import Operations from "../Components/Reports/Operations";
import Taxes from "../Components/Reports/Taxes";

function Reports() {
  return (
    <section>
      <div className="container-fluid">
        <div>
          <nav>
            <div
              className="nav nav-tabs border-0 mt-3"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="reservations-tab"
                data-bs-toggle="tab"
                data-bs-target="#reservations"
                type="button"
                role="tab"
                aria-controls="reservations"
                aria-selected="true"
              >
                Reservations
              </button>
              <button
                className="nav-link"
                id="operations-tab"
                data-bs-toggle="tab"
                data-bs-target="#operations"
                type="button"
                role="tab"
                aria-controls="operations"
                aria-selected="false"
              >
                Operations
              </button>
              <button
                className="nav-link"
                id="taxes-tab"
                data-bs-toggle="tab"
                data-bs-target="#taxes"
                type="button"
                role="tab"
                aria-controls="taxes"
                aria-selected="false"
              >
                Taxes
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="reservations"
                role="tabpanel"
                aria-labelledby="reservations-tab"
                tabIndex={0}
              >
                <Reservations />
              </div>
              <div
                className="tab-pane fade"
                id="operations"
                role="tabpanel"
                aria-labelledby="operations-tab"
                tabIndex={0}
              >
                <Operations />
              </div>
              <div
                className="tab-pane fade"
                id="taxes"
                role="tabpanel"
                aria-labelledby="taxes-tab"
                tabIndex={0}
              >
                <Taxes />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Reports;
