import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";

function Inventory() {
  const DataCollection = [
    {
      id: 1,
      itemName: "Toilet Paper",
      description: "Product Description",
      type: "Bathroom",
      shared: "Yes",
      size: "Product size here",
      stock: "10",
      status: "Low Stock",
    },
    {
      id: 2,
      itemName: "Toilet Paper",
      description: "Product Description",
      type: "Bathroom",
      shared: "Yes",
      size: "Product size here",
      stock: "10",
      status: "Out of Stock",
    },
    {
      id: 3,
      itemName: "Toilet Paper",
      description: "Product Description",
      type: "Bathroom",
      shared: "Yes",
      size: "Product size here",
      stock: "10",
      status: "Low Stock",
    },
    {
      id: 4,
      itemName: "Toilet Paper",
      description: "Product Description",
      type: "Bathroom",
      shared: "Yes",
      size: "Product size here",
      stock: "10",
      status: "Out of Stock",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Low Stock":
        return "bg-ldanger";
      case "Out of Stock":
        return "bg-red2";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-xl-6 ">
          <div className="row">
            <div className="col-sm-7 col-xl-7 col-xxl-6">
              <div className="border-grey h-100 d-flex custom-rounded">
                <input
                  id="search"
                  type="search"
                  className="ps-2 small text-grey w-100 focus-none border-0 bg-transparent py-2"
                  placeholder="Type to search task"
                />
                <label
                  htmlFor="search"
                  className="px-sm-3 px-2 d-flex small text-grey align-items-center text-white py-2 search-bg"
                >
                  <FaSearch className="" />
                </label>
              </div>
            </div>
            <div className="col-xl-4 mt-3 mt-sm-0 col-sm-5 col-12">
              <div className="d-flex h-100 rounded-2 ps-2 align-items-center border-grey">
                <CiFilter className="text-grey  fs-4" />
                <select
                  name=""
                  className="form-select px-1 text-grey small border-0 w-100 focus-none"
                  id=""
                >
                  <option value="Filter">Filter</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-flex col-xl-6 col-12 mt-3 mt-xl-0 justify-content-end align-items-center">
          <Link
            to=""
            className="px-sm-4 mt-3 me-2 mt-sm-0 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2"
          >
            Replenish Item
          </Link>
          <Link
            to="#"
            className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white me-sm-2 text-decoration-none py-2"
          >
            Create New
          </Link>
        </div>
      </div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                Item Name
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Description
              </th>
              <th className="small fw-semi text-black text-nowrap">Type</th>
              <th className="small fw-semi text-black text-nowrap">Shared</th>
              <th className="small fw-semi text-black text-nowrap">Size</th>
              <th className="small fw-semi text-black text-nowrap">Stock</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.itemName}</td>
                <td className="small text-black">{data.description}</td>
                <td className="small text-black text-nowrap">{data.type}</td>
                <td className="small text-black text-nowrap">{data.shared}</td>
                <td className="small text-black">{data.size}</td>
                <td className="small text-black">{data.stock}</td>
                <td>
                  <p
                    className={`small fw-semi mb-0 rounded-2 px-3 py-1 text-nowrap max ${getStatusClass(
                      data.status
                    )}`}
                  >
                    {" "}
                    {data.status}
                  </p>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="" className="mx-1 tblicon">
                      <IoPencil className="fs-5" />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <HiTrash className="fs-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
