import React from "react";
import CalendarSettings from "../Components/Calendar/CalendarSettings";
import Single from "../Components/Calendar/Single";
import Multi from "../Components/Calendar/Multi";

function Calendar() {
  return (
    <section>
        <div>
          <nav className="main-tabs">
            <div
              className="nav nav-tabs border-0 mt-3"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="Multi-tab"
                data-bs-toggle="tab"
                data-bs-target="#Multi"
                type="button"
                role="tab"
                aria-controls="Multi"
                aria-selected="true"
              >
                Multi
              </button>
              <button
                className="nav-link"
                id="Single-tab"
                data-bs-toggle="tab"
                data-bs-target="#Single"
                type="button"
                role="tab"
                aria-controls="Single"
                aria-selected="false"
              >
                Single
              </button>
              <button
                className="nav-link"
                id="Settings-tab"
                data-bs-toggle="tab"
                data-bs-target="#Settings"
                type="button"
                role="tab"
                aria-controls="Settings"
                aria-selected="false"
              >
                Settings
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="Multi"
                role="tabpanel"
                aria-labelledby="Multi-tab"
                tabIndex={0}
              >
                <Multi />
              </div>
              <div
                className="tab-pane fade"
                id="Single"
                role="tabpanel"
                aria-labelledby="Single-tab"
                tabIndex={0}
              >
                <Single />
              </div>
              <div
                className="tab-pane fade"
                id="Settings"
                role="tabpanel"
                aria-labelledby="Settings-tab"
                tabIndex={0}
              >
                <CalendarSettings />
              </div>
            </div>
          </nav>
        </div>
    </section>
  );
}

export default Calendar;
