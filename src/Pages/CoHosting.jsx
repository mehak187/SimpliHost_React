import React from "react";
import Expenses from "../Components/CoHosting/Expenses";
import Owners from "../Components/CoHosting/Owners";
import Invoices from "../Components/CoHosting/Invoices";
import FeeTypes from "../Components/CoHosting/FeeTypes";

function CoHosting() {
  return (
    <section>
        <div>
          <nav className="main-tabs">
            <div
              className="nav nav-tabs border-0"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="owners-tab"
                data-bs-toggle="tab"
                data-bs-target="#owners"
                type="button"
                role="tab"
                aria-controls="owners"
                aria-selected="true"
              >
                Owners
              </button>
              <button
                className="nav-link"
                id="invoices-tab"
                data-bs-toggle="tab"
                data-bs-target="#invoices"
                type="button"
                role="tab"
                aria-controls="invoices"
                aria-selected="false"
              >
                Invoices
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
              <button
                className="nav-link"
                id="fee-types-tab"
                data-bs-toggle="tab"
                data-bs-target="#fee-types"
                type="button"
                role="tab"
                aria-controls="fee-types"
                aria-selected="false"
              >
                Fee Types
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="owners"
                role="tabpanel"
                aria-labelledby="owners-tab"
                tabIndex={0}
              >
                <Owners />
              </div>
              <div
                className="tab-pane fade"
                id="invoices"
                role="tabpanel"
                aria-labelledby="invoices-tab"
                tabIndex={0}
              >
                <Invoices/>
              </div>
              <div
                className="tab-pane fade"
                id="expenses"
                role="tabpanel"
                aria-labelledby="expenses-tab"
                tabIndex={0}
              >
                <Expenses />
              </div>
              <div
                className="tab-pane fade"
                id="fee-types"
                role="tabpanel"
                aria-labelledby="fee-types-tab"
                tabIndex={0}
              >
                <FeeTypes/>
              </div>
            </div>
          </nav>
        </div>
    </section>
  );
}

export default CoHosting;
