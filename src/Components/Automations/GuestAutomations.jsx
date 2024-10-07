import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-collection.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";

function GuestAutomations() {
  const DataCollection = [
    {
      id: 1,
      RuleName: "First Day",
      Trigger: "Every Monday",
      Property: property,
      Active:"On",
    },
    {
      id: 1,
      RuleName: "First Day",
      Trigger: "Every Monday",
      Property: property,
      Active:"Off",
    },
    {
      id: 1,
      RuleName: "First Day",
      Trigger: "Every Monday",
      Property: property,
      Active:"On",
    },
  ];
  
  return (
    <div>
      <FilterRow searchName="automation" btnName="Add Automation" btnLink="#"/>
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
                  <div className="d-flex align-items-center">
                  <img
                    src={data.Property}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                  </div>
                </td>
                <td className="small fw-semi">
                    <div className=" d-flex align-items-center">
                      <span>Off</span>
                      <label className="switch mx-1">
                        <input type="checkbox" id="Capture" checked={data.Active === "On"} readOnly/>
                        <span className="slider round"></span>
                      </label>
                      <span>On</span>
                    </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
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
