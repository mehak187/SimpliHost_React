import React from "react";


function Calendar() {
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
                Multi
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
                Single
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
                Settings
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
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Calendar;

