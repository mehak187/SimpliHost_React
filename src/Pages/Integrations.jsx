import React from "react";
import Platforms from "../Components/Integrations/Platforms";
import APIAccess from "../Components/Integrations/APIAccess";
import Webhooks from "../Components/Integrations/Webhooks";

function Integrations() {
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
                id="platforms-tab"
                data-bs-toggle="tab"
                data-bs-target="#platforms"
                type="button"
                role="tab"
                aria-controls="platforms"
                aria-selected="true"
              >
                Platforms
              </button>
              <button
                className="nav-link"
                id="api-access-tab"
                data-bs-toggle="tab"
                data-bs-target="#api-access"
                type="button"
                role="tab"
                aria-controls="api-access"
                aria-selected="false"
              >
                API Access
              </button>
              <button
                className="nav-link"
                id="webhooks-tab"
                data-bs-toggle="tab"
                data-bs-target="#webhooks"
                type="button"
                role="tab"
                aria-controls="webhooks"
                aria-selected="false"
              >
                Webhooks
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="platforms"
                role="tabpanel"
                aria-labelledby="platforms-tab"
                tabIndex={0}
              >
                <Platforms />
              </div>
              <div
                className="tab-pane fade"
                id="api-access"
                role="tabpanel"
                aria-labelledby="api-access-tab"
                tabIndex={0}
              >
                <APIAccess />
              </div>
              <div
                className="tab-pane fade"
                id="webhooks"
                role="tabpanel"
                aria-labelledby="webhooks-tab"
                tabIndex={0}
              >
                <Webhooks />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
