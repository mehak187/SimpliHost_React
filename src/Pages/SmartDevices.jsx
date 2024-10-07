import React from "react";
import AllDevices from "../Components/SmartDevices/AllDevices";
import GuestCodes from "../Components/SmartDevices/GuestCodes";
import OperationsCodes from "../Components/SmartDevices/OperationsCodes";

function SmartDevices() {
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
                id="all-devices-tab"
                data-bs-toggle="tab"
                data-bs-target="#all-devices"
                type="button"
                role="tab"
                aria-controls="all-devices"
                aria-selected="true"
              >
                All Devices
              </button>
              <button
                className="nav-link"
                id="guest-codes-tab"
                data-bs-toggle="tab"
                data-bs-target="#guest-codes"
                type="button"
                role="tab"
                aria-controls="guest-codes"
                aria-selected="false"
              >
                Guest Codes
              </button>
              <button
                className="nav-link"
                id="operations-codes-tab"
                data-bs-toggle="tab"
                data-bs-target="#operations-codes"
                type="button"
                role="tab"
                aria-controls="operations-codes"
                aria-selected="false"
              >
                Operations Codes
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="all-devices"
                role="tabpanel"
                aria-labelledby="all-devices-tab"
                tabIndex={0}
              >
                <AllDevices />
              </div>
              <div
                className="tab-pane fade"
                id="guest-codes"
                role="tabpanel"
                aria-labelledby="guest-codes-tab"
                tabIndex={0}
              >
                <GuestCodes/>
              </div>
              <div
                className="tab-pane fade"
                id="operations-codes"
                role="tabpanel"
                aria-labelledby="operations-codes-tab"
                tabIndex={0}
              >
                <OperationsCodes />
              </div>
            </div>
          </nav>
        </div>
    </section>
  );
}

export default SmartDevices;
