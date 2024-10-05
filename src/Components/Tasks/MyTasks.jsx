import React from "react";
import { FaTrash, FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      id: 1,
      taskname: "Green Back Home Inspection",
      property: "447 S st Francis Ave unit 01",
      tasktype: "Cleaning",
      assignedTo: "Admin",
      endDate: "January 10, 2024",
      status: "In Progress",
    },
    {
      id: 1,
      taskname: "Green Back Home Inspection",
      property: "447 S st Francis Ave unit 01",
      tasktype: "Cleaning",
      assignedTo: "Admin",
      endDate: "January 10, 2024",
      status: "Overdue",
    },
    {
      id: 1,
      taskname: "Green Back Home Inspection",
      property: "447 S st Francis Ave unit 01",
      tasktype: "Cleaning",
      assignedTo: "Admin",
      endDate: "January 10, 2024",
      status: "Completed",
    },
  ];
  const getStatusClass = (status) => {
    if (status === "Not Started") return "text-primary";
    if (status === "In Progress") return "text-black";
    if (status === "Overdue") return "text-danger";
    if (status === "Completed") return "text-success";
    return ""; // Default class if no match
  };
  return (
    <div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black">Task Name</th>
              <th className="small fw-semi text-black">Property</th>
              <th className="small fw-semi text-black">Task Type</th>
              <th className="small fw-semi text-black">Assigned To</th>
              <th className="small fw-semi text-black">End Date</th>
              <th className="small fw-semi text-black">Status</th>
              <th className="small fw-semi text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data, index) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.taskname}</td>
                <td className="small text-black">{data.property}</td>
                <td className="small text-black text-nowrap">{data.tasktype}</td>
                <td className="small text-black">{data.assignedTo}</td>
                <td className="small text-black">{data.endDate}</td>
                <td className={`small text-black ${getStatusClass(data.status)}`}>{data.status}</td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 text-blue">
                      <FaTrash />
                    </Link>
                    <Link to="/manager_detail" className="mx-1 text-blue">
                      <FaEye />
                    </Link>
                    <Link to="/edit_manager" className="mx-1 text-blue">
                      <FaPencilAlt />
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
