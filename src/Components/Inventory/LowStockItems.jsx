import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";

function LowStockItems() {
  const DataCollection = [
    {
      id: 1,
      ItemName: "Green Back Home Pet",
      Description: "Pet",
      Type: "447 S st Francis Ave unit 01",
      Properties: "30",
      Size: "20",
      Stock: "2",
      Status: "Low Stock",
    },
    {
      id: 2,
      ItemName: "Green Back Home Pet",
      Description: "Pet",
      Type: "447 S st Francis Ave unit 01",
      Properties: "30",
      Size: "20",
      Stock: "2",
      Status: "Low Stock",
    },
    {
      id: 3,
      ItemName: "Green Back Home Pet",
      Description: "Pet",
      Type: "447 S st Francis Ave unit 01",
      Properties: "30",
      Size: "20",
      Stock: "2",
      Status: "Low Stock",
    },
    {
      id: 4,
      ItemName: "Green Back Home Pet",
      Description: "Pet",
      Type: "447 S st Francis Ave unit 01",
      Properties: "30",
      Size: "20",
      Stock: "2",
      Status: "Low Stock",
    },
    {
      id: 5,
      ItemName: "Green Back Home Pet",
      Description: "Pet",
      Type: "447 S st Francis Ave unit 01",
      Properties: "30",
      Size: "20",
      Stock: "2",
      Status: "Low Stock",
    },
  ];

  return (
    <div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black">Item Name</th>
              <th className="small fw-semi text-black">Description</th>
              <th className="small fw-semi text-black">Type</th>
              <th className="small fw-semi text-black">Properties</th>
              <th className="small fw-semi text-black">Size</th>
              <th className="small fw-semi text-black">Stock</th>
              <th className="small fw-semi text-black">Status</th>
              <th className="small fw-semi text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.ItemName}</td>
                <td className="small text-black">{data.Description}</td>
                <td className="small text-black text-nowrap">{data.Type}</td>
                <td className="small text-black">{data.Properties}</td>
                <td className="small text-black">{data.Size}</td>
                <td className="small text-black">{data.Stock}</td>
                <td className="small text-black">
                  <div className="redbtn">{data.Status}</div>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="" className="mx-1 tblicon">
                      <IoPencil />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <HiTrash />
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







