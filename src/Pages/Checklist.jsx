import React from "react";
import ChecklistSettings from "../Components/Checklist/ChecklistSettings";
import TrackedItems from "../Components/Checklist/TrackedItems";
import Admin from "../Components/Checklist/Admin";
import Seasonal from "../Components/Checklist/Seasonal";
import Amenity from "../Components/Checklist/Amenity";
import Pet from "../Components/Checklist/Pet";
import Maintenance from "../Components/Checklist/Maintenance";
import Inspection from "../Components/Checklist/Inspection";
import Cleaning from "../Components/Checklist/Cleaning";
import All from "../Components/Checklist/All";

function Checklist() {
  return (
    <section>
      <div className="container-fluid">
        <div>
          <nav className="main-tabs">
            <div
              className="nav nav-tabs border-0 mt-3"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="All-tab"
                data-bs-toggle="tab"
                data-bs-target="#All"
                type="button"
                role="tab"
                aria-controls="All"
                aria-selected="true"
              >
                All
              </button>
              <button
                className="nav-link"
                id="Cleaning-tab"
                data-bs-toggle="tab"
                data-bs-target="#Cleaning"
                type="button"
                role="tab"
                aria-controls="Cleaning"
                aria-selected="false"
              >
                Cleaning
              </button>
              <button
                className="nav-link"
                id="Inspection-tab"
                data-bs-toggle="tab"
                data-bs-target="#Inspection"
                type="button"
                role="tab"
                aria-controls="Inspection"
                aria-selected="false"
              >
                Inspection
              </button>
              <button
                className="nav-link"
                id="Maintenance-tab"
                data-bs-toggle="tab"
                data-bs-target="#Maintenance"
                type="button"
                role="tab"
                aria-controls="Maintenance"
                aria-selected="false"
              >
                Maintenance
              </button>
              <button
                className="nav-link"
                id="Pet-tab"
                data-bs-toggle="tab"
                data-bs-target="#Pet"
                type="button"
                role="tab"
                aria-controls="Pet"
                aria-selected="false"
              >
                Pet
              </button>
              <button
                className="nav-link"
                id="Amenity-tab"
                data-bs-toggle="tab"
                data-bs-target="#Amenity"
                type="button"
                role="tab"
                aria-controls="Amenity"
                aria-selected="false"
              >
                Amenity
              </button>
              <button
                className="nav-link"
                id="Seasonal-tab"
                data-bs-toggle="tab"
                data-bs-target="#Seasonal"
                type="button"
                role="tab"
                aria-controls="Seasonal"
                aria-selected="false"
              >
                Seasonal
              </button>
              <button
                className="nav-link"
                id="Admin-tab"
                data-bs-toggle="tab"
                data-bs-target="#Admin"
                type="button"
                role="tab"
                aria-controls="Admin"
                aria-selected="false"
              >
                Admin
              </button>
              <button
                className="nav-link"
                id="TrackedItems-tab"
                data-bs-toggle="tab"
                data-bs-target="#TrackedItems"
                type="button"
                role="tab"
                aria-controls="TrackedItems"
                aria-selected="false"
              >
                Tracked Items
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
                id="All"
                role="tabpanel"
                aria-labelledby="All-tab"
                tabIndex={0}
              >
                <All/>
              </div>
              <div
                className="tab-pane fade"
                id="Cleaning"
                role="tabpanel"
                aria-labelledby="Cleaning-tab"
                tabIndex={0}
              >
                <Cleaning/>
              </div>
              <div
                className="tab-pane fade"
                id="Inspection"
                role="tabpanel"
                aria-labelledby="Inspection-tab"
                tabIndex={0}
              >
                <Inspection/>
              </div>
              <div
                className="tab-pane fade"
                id="Maintenance"
                role="tabpanel"
                aria-labelledby="Maintenance-tab"
                tabIndex={0}
              >
                <Maintenance/>
              </div>
              <div
                className="tab-pane fade"
                id="Pet"
                role="tabpanel"
                aria-labelledby="Pet-tab"
                tabIndex={0}
              >
                <Pet/>
              </div>
              <div
                className="tab-pane fade"
                id="Amenity"
                role="tabpanel"
                aria-labelledby="Amenity-tab"
                tabIndex={0}
              >
                <Amenity/>
              </div>
              <div
                className="tab-pane fade"
                id="Seasonal"
                role="tabpanel"
                aria-labelledby="Seasonal-tab"
                tabIndex={0}
              >
                <Seasonal/>
              </div>
              <div
                className="tab-pane fade"
                id="Admin"
                role="tabpanel"
                aria-labelledby="Admin-tab"
                tabIndex={0}
              >
                <Admin/>
              </div>
              <div
                className="tab-pane fade"
                id="TrackedItems"
                role="tabpanel"
                aria-labelledby="TrackedItems-tab"
                tabIndex={0}
              >
                <TrackedItems/>
              </div>
              <div
                className="tab-pane fade"
                id="Settings"
                role="tabpanel"
                aria-labelledby="Settings-tab"
                tabIndex={0}
              >
                <ChecklistSettings/>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Checklist;
