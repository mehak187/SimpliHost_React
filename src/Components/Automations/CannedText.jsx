import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-collection.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";

function CannedText() {
  const DataCollection = [
    {
      id: 1,
      Name: "Canned - Good 9am Check-In",
      Shortcut: "Shortcut here",
      Message: "Hi guest message here",
    },
    {
      id: 1,
      Name: "Canned - Good 9am Check-In",
      Shortcut: "Shortcut here",
      Message: "Hi guest message here",
    },
    {
      id: 1,
      Name: "Canned - Good 9am Check-In",
      Shortcut: "Shortcut here",
      Message: "Hi guest message here",
    },
    {
      id: 1,
      Name: "Canned - Good 9am Check-In",
      Shortcut: "Shortcut here",
      Message: "Hi guest message here",
    },
  ];
  return (
    <div>
    <FilterRow searchName="automation" btnName="Add Canned Text" btnLink="/admin/add-canned-text"/>
    <div className="table-responsive default-table mt-3">
      <table className="table">
        <thead className="">
          <tr className="align-middle">
            <th className="small fw-semi text-black text-nowrap">Name</th>
            <th className="small fw-semi text-black text-nowrap">Shortcut</th>
            <th className="small fw-semi text-black text-nowrap">Message</th>
            <th className="small fw-semi text-black text-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {DataCollection.map((data) => (
            <tr key={data.id} className="align-middle">
              <td className="small text-black text-nowrap">
                {data.Name}
              </td>
              <td className="small text-black text-nowrap">
                {data.Shortcut}
              </td>
              <td className="small text-black text-nowrap">
                {data.Message}
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

export default CannedText
