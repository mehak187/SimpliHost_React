import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import FilterRow from "./FilterRow";

function MyTasks() {
  const DataCollection = [
    {
      id: 1,
      taskname: "Green Back Home Inspection",
      property: "447 S st Francis Ave unit 01",
      tasktype: "Cleaning",
      assignedTo: "Admin",
      endDate: "January 10, 2024",
      status: "Not Started",
    },
    {
      id: 2,
      taskname: "Green Back Home Inspection",
      property: "447 S st Francis Ave unit 01",
      tasktype: "Cleaning",
      assignedTo: "Admin",
      endDate: "January 10, 2024",
      status: "In Progress",
    },
    {
      id: 3,
      taskname: "Green Back Home Inspection",
      property: "447 S st Francis Ave unit 01",
      tasktype: "Cleaning",
      assignedTo: "Admin",
      endDate: "January 10, 2024",
      status: "Overdue",
    },
    {
      id: 4,
      taskname: "Green Back Home Inspection",
      property: "447 S st Francis Ave unit 01",
      tasktype: "Cleaning",
      assignedTo: "Admin",
      endDate: "January 10, 2024",
      status: "Completed",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Not Started":
        return "text-primary"; // Blue for Not Started
      case "In Progress":
        return "text-warning"; // Yellow for In Progress
      case "Overdue":
        return "text-danger"; // Red for Overdue
      case "Completed":
        return "text-success"; // Green for Completed
      default:
        return "";
    }
  };

  return (
    <div>
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Task Name</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
              <th className="small fw-semi text-black text-nowrap">Task Type</th>
              <th className="small fw-semi text-black text-nowrap">Assigned To</th>
              <th className="small fw-semi text-black text-nowrap">End Date</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.taskname}</td>
                <td className="small text-black">{data.property}</td>
                <td className="small text-black text-nowrap">{data.tasktype}</td>
                <td className="small text-black">{data.assignedTo}</td>
                <td className="small text-black">{data.endDate}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <TbCopy className="fs-5"/>
                    </Link>
                    <Link to="/manager_detail" className="mx-1 tblicon">
                      <IoPencil className="fs-5"/>
                    </Link>
                    <Link to="/delete_task" className="mx-1 tblicon">
                      <HiTrash className="fs-5"/>
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

export default MyTasks;
