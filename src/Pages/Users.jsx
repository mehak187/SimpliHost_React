import React from "react";
import AccessProfiles from "../Components/Users/AccessProfiles";
import Cleaner from "../Components/Users/Cleaner";
import Inspection from "../Components/Users/Inspection";
import Maintenance from "../Components/Users/Maintenance";
import Admin from "../Components/Users/Admin";
import Owner from "../Components/Users/Owner";
import AllUsers from "../Components/Users/AllUsers";

function Users() {
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
                id="all-users-tab"
                data-bs-toggle="tab"
                data-bs-target="#all-users"
                type="button"
                role="tab"
                aria-controls="all-users"
                aria-selected="true"
              >
                All
              </button>
              <button
                className="nav-link"
                id="owner-tab"
                data-bs-toggle="tab"
                data-bs-target="#owner"
                type="button"
                role="tab"
                aria-controls="owner"
                aria-selected="false"
              >
                Owner
              </button>
              <button
                className="nav-link"
                id="admin-tab"
                data-bs-toggle="tab"
                data-bs-target="#admin"
                type="button"
                role="tab"
                aria-controls="admin"
                aria-selected="false"
              >
                Admin
              </button>
              <button
                className="nav-link"
                id="maintenance-tab"
                data-bs-toggle="tab"
                data-bs-target="#maintenance"
                type="button"
                role="tab"
                aria-controls="maintenance"
                aria-selected="false"
              >
                Maintenance
              </button>
              <button
                className="nav-link"
                id="inspection-tab"
                data-bs-toggle="tab"
                data-bs-target="#inspection"
                type="button"
                role="tab"
                aria-controls="inspection"
                aria-selected="false"
              >
                Inspection
              </button>
              <button
                className="nav-link"
                id="cleaner-tab"
                data-bs-toggle="tab"
                data-bs-target="#cleaner"
                type="button"
                role="tab"
                aria-controls="cleaner"
                aria-selected="false"
              >
                Cleaner
              </button>
              <button
                className="nav-link"
                id="access-profiles-tab"
                data-bs-toggle="tab"
                data-bs-target="#access-profiles"
                type="button"
                role="tab"
                aria-controls="access-profiles"
                aria-selected="false"
              >
                Access Profiles
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="all-users"
                role="tabpanel"
                aria-labelledby="all-users-tab"
                tabIndex={0}
              >
                <AllUsers />
              </div>
              <div
                className="tab-pane fade"
                id="owner"
                role="tabpanel"
                aria-labelledby="owner-tab"
                tabIndex={0}
              >
                <Owner />
              </div>
              <div
                className="tab-pane fade"
                id="admin"
                role="tabpanel"
                aria-labelledby="admin-tab"
                tabIndex={0}
              >
                <Admin />
              </div>
              <div
                className="tab-pane fade"
                id="maintenance"
                role="tabpanel"
                aria-labelledby="maintenance-tab"
                tabIndex={0}
              >
                <Maintenance />
              </div>
              <div
                className="tab-pane fade"
                id="inspection"
                role="tabpanel"
                aria-labelledby="inspection-tab"
                tabIndex={0}
              >
                <Inspection />
              </div>
              <div
                className="tab-pane fade"
                id="cleaner"
                role="tabpanel"
                aria-labelledby="cleaner-tab"
                tabIndex={0}
              >
                <Cleaner />
              </div>
              <div
                className="tab-pane fade"
                id="access-profiles"
                role="tabpanel"
                aria-labelledby="access-profiles-tab"
                tabIndex={0}
              >
                <AccessProfiles />
              </div>
            </div>
          </nav>
        </div>
    </section>
  );
}

export default Users;
