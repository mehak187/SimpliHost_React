import React from "react";
import General from "../Components/Settings/General";
import Properties from "../Components/Settings/Properties";
import Tasks from "../Components/Settings/Tasks";
import Checklists from "../Components/Settings/Checklists";
import Inventory from "../Components/Settings/Inventory";
import CoHosting from "../Components/Settings/CoHosting";
import Notifications from "../Components/Settings/Notifications";
import Payments from "../Components/Settings/Payments";
import Subscription from "../Components/Settings/Subscription";
import Preferences from "../Components/Settings/Preferences";
import Taxes from "../Components/Settings/Taxes";
import SubscriptionInvoices from "../Components/Settings/SubscriptionInvoices";

function Checklist() {
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
              id="general-tab"
              data-bs-toggle="tab"
              data-bs-target="#general"
              type="button"
              role="tab"
              aria-controls="general"
              aria-selected="true"
            >
              General
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
              id="tasks-tab"
              data-bs-toggle="tab"
              data-bs-target="#tasks"
              type="button"
              role="tab"
              aria-controls="tasks"
              aria-selected="false"
            >
              Tasks
            </button>
            <button
              className="nav-link"
              id="checklists-tab"
              data-bs-toggle="tab"
              data-bs-target="#checklists"
              type="button"
              role="tab"
              aria-controls="checklists"
              aria-selected="false"
            >
              Checklists
            </button>
            <button
              className="nav-link"
              id="inventory-tab"
              data-bs-toggle="tab"
              data-bs-target="#inventory"
              type="button"
              role="tab"
              aria-controls="inventory"
              aria-selected="false"
            >
              Inventory
            </button>
            <button
              className="nav-link"
              id="cohosting-tab"
              data-bs-toggle="tab"
              data-bs-target="#cohosting"
              type="button"
              role="tab"
              aria-controls="cohosting"
              aria-selected="false"
            >
              Co-Hosting
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
            <button
              className="nav-link"
              id="payments-tab"
              data-bs-toggle="tab"
              data-bs-target="#payments"
              type="button"
              role="tab"
              aria-controls="payments"
              aria-selected="false"
            >
              Payments
            </button>
            <button
              className="nav-link"
              id="subscription-tab"
              data-bs-toggle="tab"
              data-bs-target="#subscription"
              type="button"
              role="tab"
              aria-controls="subscription"
              aria-selected="false"
            >
              Subscription Plans
            </button>
            <button
              className="nav-link"
              id="subscriptioninvoices-tab"
              data-bs-toggle="tab"
              data-bs-target="#subscriptioninvoices"
              type="button"
              role="tab"
              aria-controls="subscriptioninvoices"
              aria-selected="false"
            >
              Subscription Invoices
            </button>
            <button
              className="nav-link"
              id="preferences-tab"
              data-bs-toggle="tab"
              data-bs-target="#preferences"
              type="button"
              role="tab"
              aria-controls="preferences"
              aria-selected="false"
            >
              Preferences
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
              id="general"
              role="tabpanel"
              aria-labelledby="general-tab"
              tabIndex={0}
            >
              <General />
            </div>
            <div
              className="tab-pane fade"
              id="properties"
              role="tabpanel"
              aria-labelledby="properties-tab"
              tabIndex={0}
            >
              <Properties />
            </div>
            <div
              className="tab-pane fade"
              id="tasks"
              role="tabpanel"
              aria-labelledby="tasks-tab"
              tabIndex={0}
            >
              <Tasks />
            </div>
            <div
              className="tab-pane fade"
              id="checklists"
              role="tabpanel"
              aria-labelledby="checklists-tab"
              tabIndex={0}
            >
              <Checklists />
            </div>
            <div
              className="tab-pane fade"
              id="inventory"
              role="tabpanel"
              aria-labelledby="inventory-tab"
              tabIndex={0}
            >
              <Inventory />
            </div>
            <div
              className="tab-pane fade"
              id="cohosting"
              role="tabpanel"
              aria-labelledby="cohosting-tab"
              tabIndex={0}
            >
              <CoHosting />
            </div>
            <div
              className="tab-pane fade"
              id="notifications"
              role="tabpanel"
              aria-labelledby="notifications-tab"
              tabIndex={0}
            >
              <Notifications />
            </div>
            <div
              className="tab-pane fade"
              id="payments"
              role="tabpanel"
              aria-labelledby="payments-tab"
              tabIndex={0}
            >
              <Payments />
            </div>
            <div
              className="tab-pane fade"
              id="subscription"
              role="tabpanel"
              aria-labelledby="subscription-tab"
              tabIndex={0}
            >
              <Subscription />
            </div>
            <div
              className="tab-pane fade"
              id="subscriptioninvoices"
              role="tabpanel"
              aria-labelledby="subscriptioninvoices-tab"
              tabIndex={0}
            >
              <SubscriptionInvoices />
            </div>
            <div
              className="tab-pane fade"
              id="preferences"
              role="tabpanel"
              aria-labelledby="preferences-tab"
              tabIndex={0}
            >
              <Preferences />
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
    </section>
  );
}

export default Checklist;
