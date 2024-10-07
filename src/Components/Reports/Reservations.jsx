import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";

function Reservations() {
  const DataCollection = [
    {
      id: 1,
      ReportName: "447 S st Francis Ave unit 01",
      ReportType: "System",
      LastRan: "08/02/2024",
      AutoSend: "Yes",
      ASFrequency: "Daily",
    },
    {
      id: 1,
      ReportName: "447 S st Francis Ave unit 01",
      ReportType: "Custom",
      LastRan: "08/02/2024",
      AutoSend: "Yes",
      ASFrequency: "Weekly",
    },
    {
      id: 1,
      ReportName: "447 S st Francis Ave unit 01",
      ReportType: "System",
      LastRan: "08/02/2024",
      AutoSend: "Yes",
      ASFrequency: "Monthly",
    },
    {
      id: 1,
      ReportName: "447 S st Francis Ave unit 01",
      ReportType: "Custom",
      LastRan: "08/02/2024",
      AutoSend: "Yes",
      ASFrequency: "Custom",
    },
  ];


  return (
    <div>
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Report Name</th>
              <th className="small fw-semi text-black text-nowrap">Report Type</th>
              <th className="small fw-semi text-black text-nowrap">Last Ran</th>
              <th className="small fw-semi text-black text-nowrap">Auto-Send</th>
              <th className="small fw-semi text-black text-nowrap">Auto Send Frequency</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.ReportName}</td>
                <td className="small text-black">{data.ReportType}</td>
                <td className="small text-black text-nowrap">{data.LastRan}</td>
                <td className="small text-black">{data.AutoSend}</td>
                <td className="small text-black">{data.ASFrequency}</td>
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

export default Reservations;

