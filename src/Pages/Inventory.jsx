import React from "react";
import { Link } from "react-router-dom";
import AllItems from "../Components/Inventory/AllItems";
import LowStockItems from "../Components/Inventory/LowStockItems";
import OutofStockItems from "../Components/Inventory/OutofStockItems";

function Inventory() {
  return (
    <section>
      <Link to='/admin/add-inventory' className="me-3">Add New item</Link>
      <Link to='/admin/edit-inventory'>Edit item</Link>
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
                id="MyTasks-tab"
                data-bs-toggle="tab"
                data-bs-target="#MyTasks"
                type="button"
                role="tab"
                aria-controls="MyTasks"
                aria-selected="true"
              >
                All Items
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
                Low Stock Items
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
                Out of Stock Items
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
                <AllItems />
              </div>
              <div
                className="tab-pane fade"
                id="AllTasks"
                role="tabpanel"
                aria-labelledby="AllTasks-tab"
                tabIndex={0}
              >
                <LowStockItems />
              </div>
              <div
                className="tab-pane fade"
                id="History"
                role="tabpanel"
                aria-labelledby="History-tab"
                tabIndex={0}
              >
                <OutofStockItems />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Inventory;
