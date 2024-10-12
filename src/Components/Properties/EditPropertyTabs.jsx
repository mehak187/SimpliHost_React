import React from 'react';
import Pricing from './Pricing';
import Tasks from './Tasks';
import Checklist from './Checklist';
import Inventory from './Inventory';
import AutomationTable from './AutomationTable';
import Detail from './Detail';

function EditPropertyTabs() {
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
              id="calendar-tab"
              data-bs-toggle="tab"
              data-bs-target="#calendar"
              type="button"
              role="tab"
              aria-controls="calendar"
              aria-selected="false"
            >
              Calendar
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
              id="automations-tab"
              data-bs-toggle="tab"
              data-bs-target="#automations"
              type="button"
              role="tab"
              aria-controls="automations"
              aria-selected="false"
            >
              Automations
            </button>
            <button
              className="nav-link"
              id="smart-devices-tab"
              data-bs-toggle="tab"
              data-bs-target="#smart-devices"
              type="button"
              role="tab"
              aria-controls="smart-devices"
              aria-selected="false"
            >
              Smart Devices
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
            <button
              className="nav-link"
              id="mechanicals-tab"
              data-bs-toggle="tab"
              data-bs-target="#mechanicals"
              type="button"
              role="tab"
              aria-controls="mechanicals"
              aria-selected="false"
            >
              Mechanicals
            </button>
            <button
              className="nav-link"
              id="users-tab"
              data-bs-toggle="tab"
              data-bs-target="#users"
              type="button"
              role="tab"
              aria-controls="users"
              aria-selected="false"
            >
              Users
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
            <button
              className="nav-link"
              id="faqs-tab"
              data-bs-toggle="tab"
              data-bs-target="#faqs"
              type="button"
              role="tab"
              aria-controls="faqs"
              aria-selected="false"
            >
              FAQs
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
              <Detail/>
            </div>
            <div
              className="tab-pane fade"
              id="calendar"
              role="tabpanel"
              aria-labelledby="calendar-tab"
              tabIndex={0}
            >
              {/* Content for Calendar */}
            </div>
            <div
              className="tab-pane fade"
              id="pricing"
              role="tabpanel"
              aria-labelledby="pricing-tab"
              tabIndex={0}
            >
              <Pricing/>
            </div>
            <div
              className="tab-pane fade"
              id="tasks"
              role="tabpanel"
              aria-labelledby="tasks-tab"
              tabIndex={0}
            >
              <Tasks/>
            </div>
            <div
              className="tab-pane fade"
              id="checklists"
              role="tabpanel"
              aria-labelledby="checklists-tab"
              tabIndex={0}
            >
              <Checklist/>
            </div>
            <div
              className="tab-pane fade"
              id="inventory"
              role="tabpanel"
              aria-labelledby="inventory-tab"
              tabIndex={0}
            >
              <Inventory/>
            </div>
            <div
              className="tab-pane fade"
              id="automations"
              role="tabpanel"
              aria-labelledby="automations-tab"
              tabIndex={0}
            >
              <AutomationTable/>
            </div>
            <div
              className="tab-pane fade"
              id="smart-devices"
              role="tabpanel"
              aria-labelledby="smart-devices-tab"
              tabIndex={0}
            >
              {/* Content for Smart Devices */}
            </div>
            <div
              className="tab-pane fade"
              id="taxes"
              role="tabpanel"
              aria-labelledby="taxes-tab"
              tabIndex={0}
            >
              {/* Content for Taxes */}
            </div>
            <div
              className="tab-pane fade"
              id="mechanicals"
              role="tabpanel"
              aria-labelledby="mechanicals-tab"
              tabIndex={0}
            >
              {/* Content for Mechanicals */}
            </div>
            <div
              className="tab-pane fade"
              id="users"
              role="tabpanel"
              aria-labelledby="users-tab"
              tabIndex={0}
            >
              {/* Content for Users */}
            </div>
            <div
              className="tab-pane fade"
              id="files"
              role="tabpanel"
              aria-labelledby="files-tab"
              tabIndex={0}
            >
              {/* Content for Files */}
            </div>
            <div
              className="tab-pane fade"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
              tabIndex={0}
            >
              {/* Content for Settings */}
            </div>
            <div
              className="tab-pane fade"
              id="faqs"
              role="tabpanel"
              aria-labelledby="faqs-tab"
              tabIndex={0}
            >
              {/* Content for FAQs */}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default EditPropertyTabs;
