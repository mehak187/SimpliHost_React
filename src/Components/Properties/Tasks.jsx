import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import FilterRow from "../Tasks/FilterRow";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";

function Tasks() {
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
      <div className='row align-items-center justify-content-between'>
        <div className="col-12 col-xl-6 ">
           <div className="row">
                <div className="col-sm-7 col-xl-7 col-xxl-6">
                    <div className='border-grey h-100 d-flex custom-rounded'>
                        <input for="search" type="search" className='ps-2 small text-grey w-100 focus-none border-0 bg-transparent py-2' placeholder='Type to search task'/>
                        <label htmlFor="search" className='px-sm-3 px-2 d-flex small text-grey align-items-center text-white py-2 search-bg'>
                            <FaSearch className=''/>
                        </label>
                    </div>
                </div>
                <div className="col-xl-4 mt-3 mt-sm-0 col-sm-5 col-12">
                   <div className="d-flex h-100 rounded-2 ps-2 align-items-center border-grey">
                   <CiFilter className='text-grey  fs-4'/>
                    <select name="" className='form-select px-1 text-grey small border-0 w-100 focus-none' id="">
                        <option value="Filter">Filter</option>
                    </select>
                   </div>
                </div>
           </div>
        </div>
        <div className="d-sm-flex col-xl-6 col-12 mt-3 mt-xl-0 justify-content-end align-items-center">
           <Link to="" className="px-sm-4 mt-3 me-2 mt-sm-0 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2">Add Task</Link>
           <Link to="#" className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white me-sm-2 text-decoration-none py-2">View in Calendar</Link>
        </div>
    </div>
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

export default Tasks;
