import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import FilterRow from "./FilterRow";
import { TbCopy } from "react-icons/tb";
import GroupImage from "../Checklist/GroupImage";

function GuestAutomations() {
  const DataCollection = [
    {
      id: 1,
      RuleName: "First Day",
      Trigger: "Every Monday",
      Property: <GroupImage/>,
      Active:"On",
    },
    {
      id: 1,
      RuleName: "First Day",
      Trigger: "Every Monday",
      Property: <GroupImage/>,
      Active:"Off",
    },
    {
      id: 1,
      RuleName: "First Day",
      Trigger: "Every Monday",
      Property: <GroupImage/>,
      Active:"On",
    },
  ];
  
  return (
    <div>
      <FilterRow searchName="automation" btnName="Add Automation" btnLink="/admin/addAutomation"/>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Rule Name</th>
              <th className="small fw-semi text-black text-nowrap">Trigger</th>
              <th className="small fw-semi text-black text-nowrap">Properties</th>
              <th className="small fw-semi text-black text-nowrap">Active</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  {data.RuleName}
                </td>
                <td className="small text-black text-nowrap">
                  {data.Trigger}
                </td>
                <td className="small text-black">
                  <div className="d-flex align-items-center justify-content-center">
                  {data.Property}
                  </div>
                </td>
                <td className="small fw-semi">
                    <div className=" d-flex align-items-center justify-content-center">
                      <span>Off</span>
                      <label className="switch mx-1">
                        <input type="checkbox" id="Capture" checked={data.Active === "On"} readOnly/>
                        <span className="slider round"></span>
                      </label>
                      <span>On</span>
                    </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex justify-content-center">
                  <Link to="#" className="mx-1 tblicon">
                      <TbCopy className="fs-5"/>
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <IoPencil className=" fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <HiTrash className=" fs-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GuestAutomations
