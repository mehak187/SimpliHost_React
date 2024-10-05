import React from "react";
import History from "../Components/Tasks/History";
import AllTasks from "../Components/Tasks/AllTasks";
import MyTasks from "../Components/Tasks/MyTasks";
import { Link } from "react-router-dom";

function Tasks() {
  return (
    <section>
      <Link to='/admin/add-tasks'>Add New Task</Link>
        <div>
          <nav className="main-tabs">
            <div
              className="nav nav-tabs border-0"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="MyTasks-tab"
                data-bs-toggle="tab"
                data-bs-target="#MyTasks"
                type="button"
                role="tab"
                aria-controls="MyTasks"
                aria-selected="true"
              >
                My Tasks
              </button>
              <button
                className="nav-link"
                id="AllTasks-tab"
                data-bs-toggle="tab"
                data-bs-target="#AllTasks"
                type="button"
                role="tab"
                aria-controls="AllTasks"
                aria-selected="false"
              >
                All Tasks
              </button>
              <button
                className="nav-link"
                id="History-tab"
                data-bs-toggle="tab"
                data-bs-target="#History"
                type="button"
                role="tab"
                aria-controls="History"
                aria-selected="false"
              >
                History
              </button>
            </div>
            <div className="tab-content mt-3" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="MyTasks"
                role="tabpanel"
                aria-labelledby="MyTasks-tab"
                tabIndex={0}
              >
                <MyTasks />
              </div>
              <div
                className="tab-pane fade"
                id="AllTasks"
                role="tabpanel"
                aria-labelledby="AllTasks-tab"
                tabIndex={0}
              >
                <AllTasks />
              </div>
              <div
                className="tab-pane fade"
                id="History"
                role="tabpanel"
                aria-labelledby="History-tab"
                tabIndex={0}
              >
                <History />
              </div>
            </div>
          </nav>
        </div>
    </section>
  );
}

export default Tasks;
