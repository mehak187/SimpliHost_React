import React from "react";
import { HiFolderDownload } from "react-icons/hi";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import FilterRow from "./FilterRow";
import propertyCollection from "../../assets/img/property-collection.png";

function TrackedItems() {
  const DataCollection = [
    {
      id: 1,
      ItemName: "Toilet Paper",
      NumberofChecklists: "20",
      LastUpdated: "08/14/2024",
    },
    {
      id: 2,
      ItemName: "Toilet Paper",
      NumberofChecklists: "20",
      LastUpdated: "08/14/2024",
    },
    {
      id: 3,
      ItemName: "Toilet Paper",
      NumberofChecklists: "20",
      LastUpdated: "08/14/2024",
    },
    {
      id: 4,
      ItemName: "Toilet Paper",
      NumberofChecklists: "20",
      LastUpdated: "08/14/2024",
    },
    {
      id: 5,
      ItemName: "Toilet Paper",
      NumberofChecklists: "20",
      LastUpdated: "08/14/2024",
    },
  ];

  return (
    <div>
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                Item Name
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Number of Checklists
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Last Updated
              </th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.ItemName}</td>
                <td className="small text-black">{data.NumberofChecklists}</td>
                <td className="small text-black text-nowrap">
                  {data.LastUpdated}
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <IoPencil className="fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
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

export default TrackedItems;
