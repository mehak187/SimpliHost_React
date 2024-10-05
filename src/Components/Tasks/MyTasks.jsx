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
  ];

  return (
    <div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small">Task Name</th>
              <th className="small">Property</th>
              <th className="small">Task Type</th>
              <th className="small">Assigned To</th>
              <th className="small">End Date</th>
              <th className="small">Status</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data, index) => (
              <tr key={data.id} className="align-middle">
                <td className="small">{data.taskname}</td>
                <td className="small">{data.property}</td>
                <td className="small text-nowrap">{data.tasktype}</td>
                <td className="small">{data.assignedTo}</td>
                <td className="small">{data.endDate}</td>
                <td className="small">{data.status}</td>
                <td className="small">
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
