import React from "react";
import Settings from "../Components/DirectBooking/Settings";
import Website from "../Components/DirectBooking/Website";
import Widgets from "../Components/DirectBooking/Widgets";

function DirectBooking() {
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
                id="widgets-tab"
                data-bs-toggle="tab"
                data-bs-target="#widgets"
                type="button"
                role="tab"
                aria-controls="widgets"
                aria-selected="true"
              >
                Widgets
              </button>
              <button
                className="nav-link"
                id="website-tab"
                data-bs-toggle="tab"
                data-bs-target="#website"
                type="button"
                role="tab"
                aria-controls="website"
                aria-selected="false"
              >
                Website
              </button>
              <button
                className="nav-link"
                id="settings-tab"
                data-bs-toggle="tab"
                data-bs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="widgets"
                role="tabpanel"
                aria-labelledby="widgets-tab"
                tabIndex={0}
              >
                <Widgets />
              </div>
              <div
                className="tab-pane fade"
                id="website"
                role="tabpanel"
                aria-labelledby="website-tab"
                tabIndex={0}
              >
                <Website />
              </div>
              <div
                className="tab-pane fade"
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
                tabIndex={0}
              >
                <Settings />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default DirectBooking;
