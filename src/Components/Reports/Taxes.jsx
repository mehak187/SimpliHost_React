import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";

function Taxes() {
  const DataCollection = [
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      ASFrequency: "Daily",
      Collectedby: "OTA",
    },
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      ASFrequency: "Weekly",
      Collectedby: "OTA",
    },
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      ASFrequency: "Monthly",
      Collectedby: "OTA",
    },
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      ASFrequency: "Custom",
      Collectedby: "OTA",
    },
  ];


  return (
    <div>
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Tax Type</th>
              <th className="small fw-semi text-black text-nowrap">Tax Name</th>
              <th className="small fw-semi text-black text-nowrap">Percentage</th>
              <th className="small fw-semi text-black text-nowrap">Auto Send Frequency</th>
              <th className="small fw-semi text-black text-nowrap">Collected by</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.TaxType}</td>
                <td className="small text-black">{data.TaxName}</td>
                <td className="small text-black text-nowrap">{data.Percentage}</td>
                <td className="small text-black">{data.ASFrequency}</td>
                <td className="small text-black">{data.Collectedby}</td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <TbCopy />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <FaEye />
                    </Link>
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

export default Taxes;


