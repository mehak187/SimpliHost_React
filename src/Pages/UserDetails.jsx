import React from "react";
import UsersDetails from "../Components/Users/UsersDetails";
import UsersPricing from "../Components/Users/UsersPricing";
import UsersNotifications from "../Components/Users/UsersNotifications";

function UserDetails() {
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
              id="pricing-tab"
              data-bs-toggle="tab"
              data-bs-target="#pricing"
              type="button"
              role="tab"
              aria-controls="pricing"
              aria-selected="false"
            >
              Pricing
            </button>
            <button
              className="nav-link"
              id="notifications-tab"
              data-bs-toggle="tab"
              data-bs-target="#notifications"
              type="button"
              role="tab"
              aria-controls="notifications"
              aria-selected="false"
            >
              Notifications
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
              <UsersDetails />
            </div>
            <div
              className="tab-pane fade"
              id="pricing"
              role="tabpanel"
              aria-labelledby="pricing-tab"
              tabIndex={0}
            >
              <UsersPricing />
            </div>
            <div
              className="tab-pane fade"
              id="notifications"
              role="tabpanel"
              aria-labelledby="notifications-tab"
              tabIndex={0}
            >
              <UsersNotifications />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default UserDetails;
