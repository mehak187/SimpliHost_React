import React from "react";
import GuestAutomations from "../Components/Automations/GuestAutomations";
import OperationsAutomations from "../Components/Automations/OperationsAutomations";
import CannedText from "../Components/Automations/CannedText";
import SpecialIndicators from "../Components/Automations/SpecialIndicators";

function Automations() {
  return (
    <section>
        <div>
          <nav className="main-tabs">
            <div
              className="nav nav-tabs border-0 "
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
                Guest Automations
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
                Operations Automations
              </button>
              <button
                className="nav-link"
                id="canned-text-tab"
                data-bs-toggle="tab"
                data-bs-target="#canned-text"
                type="button"
                role="tab"
                aria-controls="canned-text"
                aria-selected="false"
              >
                Canned Text
              </button>
              <button
                className="nav-link"
                id="special-indicators-tab"
                data-bs-toggle="tab"
                data-bs-target="#special-indicators"
                type="button"
                role="tab"
                aria-controls="special-indicators"
                aria-selected="false"
              >
                Special Indicators
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
                <GuestAutomations />
              </div>
              <div
                className="tab-pane fade"
                id="operations-automations"
                role="tabpanel"
                aria-labelledby="operations-automations-tab"
                tabIndex={0}
              >
                <OperationsAutomations />
              </div>
              <div
                className="tab-pane fade"
                id="canned-text"
                role="tabpanel"
                aria-labelledby="canned-text-tab"
                tabIndex={0}
              >
                <CannedText />
              </div>
              <div
                className="tab-pane fade"
                id="special-indicators"
                role="tabpanel"
                aria-labelledby="special-indicators-tab"
                tabIndex={0}
              >
                <SpecialIndicators />
              </div>
            </div>
          </nav>
        </div>
    </section>
  );
}

export default Automations;
