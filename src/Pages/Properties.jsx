import React from "react";
import AllProperties from "../Components/Properties/AllProperties";
import PropertyGroups from "../Components/Properties/PropertyGroups";

function Properties() {
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
              id="Properties-tab"
              data-bs-toggle="tab"
              data-bs-target="#Properties"
              type="button"
              role="tab"
              aria-controls="Properties"
              aria-selected="true"
            >
              Properties
            </button>
            <button
              className="nav-link"
              id="PropertyGroups-tab"
              data-bs-toggle="tab"
              data-bs-target="#PropertyGroups"
              type="button"
              role="tab"
              aria-controls="PropertyGroups"
              aria-selected="false"
            >
              Property Groups
            </button>
          </div>
          <div className="tab-content mt-3" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="Properties"
              role="tabpanel"
              aria-labelledby="Properties-tab"
              tabIndex={0}
            >
              <AllProperties />
            </div>
            <div
              className="tab-pane fade"
              id="PropertyGroups"
              role="tabpanel"
              aria-labelledby="PropertyGroups-tab"
              tabIndex={0}
            >
              <PropertyGroups />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Properties;
