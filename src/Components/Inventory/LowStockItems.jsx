import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import propertyCollection from "../../assets/img/property-collection.png";
import FilterRow from "./FilterRow";

function LowStockItems() {
  const DataCollection = [
    {
      id: 1,
      ItemName: "Toilet Paper",
      Description: "Product Description",
      Type: "Bathroom",
      property: propertyCollection,
      Size: "Product Size here",
      Stock: "2",
      Status: "High/Med/Low",
    },
    {
      id: 2,
      ItemName: "Toilet Paper",
      Description: "Product Description",
      Type: "Bathroom",
      property: propertyCollection,
      Size: "Product Size here",
      Stock: "2",
      Status: "High/Med/Low",
    },
    {
      id: 3,
      ItemName: "Toilet Paper",
      Description: "Product Description",
      Type: "Bathroom",
      property: propertyCollection,
      Size: "Product Size here",
      Stock: "2",
      Status: "High/Med/Low",
    },
    {
      id: 4,
      ItemName: "Toilet Paper",
      Description: "Product Description",
      Type: "Bathroom",
      property: propertyCollection,
      Size: "Product Size here",
      Stock: "2",
      Status: "High/Med/Low",
    },
    {
      id: 5,
      ItemName: "Toilet Paper",
      Description: "Product Description",
      Type: "Bathroom",
      property: propertyCollection,
      Size: "Product Size here",
      Stock: "2",
      Status: "High/Med/Low",
    },
  ];

  return (
    <div>
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Item Name</th>
              <th className="small fw-semi text-black text-nowrap">Description</th>
              <th className="small fw-semi text-black text-nowrap">Type</th>
              <th className="small fw-semi text-black text-nowrap">Properties</th>
              <th className="small fw-semi text-black text-nowrap">Size</th>
              <th className="small fw-semi text-black text-nowrap">Stock</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.ItemName}</td>
                <td className="small text-black">{data.Description}</td>
                <td className="small text-black text-nowrap">{data.Type}</td>
                <td className="small text-black"><img src={data.property} alt="property-img" className="img-fluid property-img"/></td>
                <td className="small text-black">{data.Size}</td>
                <td className="small text-black">{data.Stock}</td>
                <td className="small text-black">
                  <div className="redbtn">{data.Status}</div>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="/admin/edit-inventory" className="mx-1 tblicon">
                      <IoPencil className=" fs-5"/>
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <HiTrash  className=" fs-5"/>
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

export default LowStockItems;







