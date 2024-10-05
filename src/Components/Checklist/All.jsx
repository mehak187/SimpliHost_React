import React from "react";
import { HiFolderDownload } from "react-icons/hi";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";

function All() {
  const DataCollection = [
    {
      id: 1,
      ChecklistName: "Green Back Home Cleaning",
      Type: "Cleaning",
      property: "447 S st Francis Ave unit 01",
      NoOfItems: "30",
    },
    {
      id: 2,
      ChecklistName: "Green Back Home Inspection",
      Type: "Inspection",
      property: "447 S st Francis Ave unit 01",
      NoOfItems: "30",
    },
    {
      id: 3,
      ChecklistName: "Green Back Home Maintenance",
      Type: "Maintenance",
      property: "447 S st Francis Ave unit 01",
      NoOfItems: "30",
    },
    {
      id: 4,
      ChecklistName: "Green Back Home Pet",
      Type: "Pet",
      property: "447 S st Francis Ave unit 01",
      NoOfItems: "30",
    },
    {
      id: 5,
      ChecklistName: "Green Back Home Amenity",
      Type: "Amenity",
      property: "447 S st Francis Ave unit 01",
      NoOfItems: "30",
    },
    {
      id: 6,
      ChecklistName: "Green Back Home Seasonal",
      Type: "Seasonal",
      property: "447 S st Francis Ave unit 01",
      NoOfItems: "30",
    },
    {
      id: 7,
      ChecklistName: "Green Back Home Admin",
      Type: "Admin",
      property: "447 S st Francis Ave unit 01",
      NoOfItems: "30",
    },
  ];

  return (
    <div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black">Checklist Name</th>
              <th className="small fw-semi text-black">Type</th>
              <th className="small fw-semi text-black">Properties</th>
              <th className="small fw-semi text-black">Number of Items</th>
              <th className="small fw-semi text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.ChecklistName}</td>
                <td className="small text-black">{data.Type}</td>
                <td className="small text-black text-nowrap">{data.property}</td>
                <td className="small text-black">{data.NoOfItems}</td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <TbCopy />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <IoPencil />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <HiFolderDownload />
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

export default All;
