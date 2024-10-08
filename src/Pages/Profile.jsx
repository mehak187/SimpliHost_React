import React from "react";
import ProfileInformation from "../Components/Profile/ProfileInformation";
import Security from "../Components/Profile/Security";
import Notifications from "../Components/Profile/Notifications";

function Profile() {
  return (
    <section>
      <div>
        <nav className="row main-tabs vertical-tabs border-0">
          <div className="col-3 pe-0 vertical-nav-box py-3 rounded-3">
            <div
              className="nav d-flex border-0 flex-column nav-tabs "
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link fw-semi text-center border-0 active"
                id="profileInfo-tab"
                data-bs-toggle="tab"
                data-bs-target="#profileInfo"
                type="button"
                role="tab"
                aria-controls="profileInfo"
                aria-selected="true"
              >
                Profile Information
              </button>
              <button
                className="nav-link fw-semi text-center border-0"
                id="security-tab"
                data-bs-toggle="tab"
                data-bs-target="#security"
                type="button"
                role="tab"
                aria-controls="security"
                aria-selected="false"
              >
                Security
              </button>
              <button
                className="nav-link fw-semi text-center border-0"
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
          </div>
          <div className="col-9">
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="profileInfo"
                role="tabpanel"
                aria-labelledby="profileInfo-tab"
                tabIndex={0}
              >
                <ProfileInformation />
              </div>
              <div
                className="tab-pane fade"
                id="security"
                role="tabpanel"
                aria-labelledby="security-tab"
                tabIndex={0}
              >
                <Security />
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
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Profile;
