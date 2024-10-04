import React from "react";
import Favorite from "../Components/Dashboard/Favorite";
import Reservations from "../Components/Dashboard/Reservations";
import Operations from "../Components/Dashboard/Operations";
import Forecasting from "../Components/Dashboard/Forecasting";
import Taxes from "../Components/Dashboard/Taxes";
import Snapshot from "../Components/Dashboard/Snapshot";

function Dashboard() {
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
                id="Favorite-tab"
                data-bs-toggle="tab"
                data-bs-target="#Favorite"
                type="button"
                role="tab"
                aria-controls="Favorite"
                aria-selected="true"
              >
                Favorite
              </button>
              <button
                className="nav-link"
                id="Reservations-tab"
                data-bs-toggle="tab"
                data-bs-target="#Reservations"
                type="button"
                role="tab"
                aria-controls="Reservations"
                aria-selected="false"
              >
                Reservations
              </button>
              <button
                className="nav-link"
                id="Operations-tab"
                data-bs-toggle="tab"
                data-bs-target="#Operations"
                type="button"
                role="tab"
                aria-controls="Operations"
                aria-selected="false"
              >
                Operations
              </button>
              <button
                className="nav-link"
                id="Forecasting-tab"
                data-bs-toggle="tab"
                data-bs-target="#Forecasting"
                type="button"
                role="tab"
                aria-controls="Forecasting"
                aria-selected="false"
              >
                Forecasting
              </button>
              <button
                className="nav-link"
                id="Taxes-tab"
                data-bs-toggle="tab"
                data-bs-target="#Taxes"
                type="button"
                role="tab"
                aria-controls="Taxes"
                aria-selected="false"
              >
                Taxes
              </button>
              <button
                className="nav-link"
                id="Snapshot-tab"
                data-bs-toggle="tab"
                data-bs-target="#Snapshot"
                type="button"
                role="tab"
                aria-controls="Snapshot"
                aria-selected="false"
              >
                Snapshot
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="Favorite"
                role="tabpanel"
                aria-labelledby="Favorite-tab"
                tabIndex={0}
              >
                <Favorite/>
              </div>
              <div
                className="tab-pane fade"
                id="Reservations"
                role="tabpanel"
                aria-labelledby="Reservations-tab"
                tabIndex={0}
              >
                <Reservations/>
              </div>
              <div
                className="tab-pane fade"
                id="Operations"
                role="tabpanel"
                aria-labelledby="Operations-tab"
                tabIndex={0}
              >
                <Operations/>
              </div>
              <div
                className="tab-pane fade"
                id="Forecasting"
                role="tabpanel"
                aria-labelledby="Forecasting-tab"
                tabIndex={0}
              >
                <Forecasting/>
              </div>
              <div
                className="tab-pane fade"
                id="Taxes"
                role="tabpanel"
                aria-labelledby="Taxes-tab"
                tabIndex={0}
              >
                <Taxes/>
              </div>
              <div
                className="tab-pane fade"
                id="Snapshot"
                role="tabpanel"
                aria-labelledby="Snapshot-tab"
                tabIndex={0}
              >
                <Snapshot/>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
