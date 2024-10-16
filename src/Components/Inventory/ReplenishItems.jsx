import React, { useState } from "react";
import propertyCollection from "../../assets/img/property-collection.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function ReplenishItems() {
    const DataCollection = [
        {
          id: 1,
          ItemName: "Toilet Paper",
          Description: "Product Description",
          Type: "Bathroom",
          property: propertyCollection,
          Size: "2",
          Stock: "0",
          Status: "Out of Stock",
          Tracking: "High/Med/Low",
        },
        {
          id: 2,
          ItemName: "Toilet Paper",
          Description: "Product Description",
          Type: "Bathroom",
          property: propertyCollection,
          Size: "2",
          Stock: "0",
          Status: "Out of Stock",
          Tracking: "High/Med/Low",
        },
      ];
    
      const [counts, setCounts] = useState(
        DataCollection.reduce((acc, item) => {
          acc[item.id] = { count: 0, increaseActive: false, decreaseActive: false };
          return acc;
        }, {})
      );
    
      const handleIncrease = (id) => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          [id]: {
            count: prevCounts[id].count + 1,
            increaseActive: true,
            decreaseActive: false,
          },
        }));
      };
    
      const handleDecrease = (id) => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          [id]: {
            count: Math.max(prevCounts[id].count - 1, 0),
            increaseActive: false,
            decreaseActive: prevCounts[id].count > 0,
          },
        }));
      };
  return (
    <div className="h-100">
      <form action="#" className="d-flex h-100 flex-column">
        <div className="table-responsive default-table mt-3">
          <table className="table">
            <thead>
              <tr className="align-middle">
                <th>Item Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Properties</th>
                <th>Size</th>
                <th>Stock</th>
                <th>Tracking</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {DataCollection.map((data) => (
                <tr key={data.id} className="align-middle">
                  <td>{data.ItemName}</td>
                  <td>{data.Description}</td>
                  <td>{data.Type}</td>
                  <td>
                    <img
                      src={data.property}
                      alt="property-img"
                      className="img-fluid property-img"
                    />
                  </td>
                  <td>{data.Size}</td>
                  <td>
                    <div className="redbtn text-nowrap">{data.Status}</div>
                  </td>
                  <td>{data.Tracking}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button
                        className={`mx-1 d-flex align-items-center decrease ${
                          counts[data.id].decreaseActive
                            ? "decrease-active"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDecrease(data.id);
                        }}
                      >
                        <FaMinus className="fs-6" />
                      </button>
                      <input
                        type="number"
                        className="border-0 max-content input-arrow-none focus-none py-0 border-bottom bg-transparent text-center"
                        value={counts[data.id].count}
                        readOnly
                      />
                      <button
                        className={`mx-1 d-flex align-items-center increase ${
                          counts[data.id].increaseActive
                            ? "increase-active"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleIncrease(data.id);
                        }}
                      >
                        <FaPlus className="fs-6" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-auto pt-4">
          <div className="d-flex align-items-center">
            <input
              type="reset"
              className="graybutton rounded-2 me-4 text-black"
              value="Cancel"
            />
            <input
              type="submit"
              className="bluebutton rounded-2 text-white"
              value="Save"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReplenishItems