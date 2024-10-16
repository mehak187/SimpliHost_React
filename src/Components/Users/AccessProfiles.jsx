import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import owner from "../../assets/img/owner.png";

import FilterRow from "./FilterRow";
import { TbCopy } from "react-icons/tb";
import GroupImage from "../Checklist/GroupImage";

function AccessProfiles() {
  const DataCollection = [
    {
      id: 1,
      Owner:owner,
      ProfileName: "John Doe",
      NumberOfUsers: "120",
      Users: <GroupImage/>,
      LastUpdated: "09/13/2024",
    },
  ];


  return (
    <div>
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Profile Name</th>
              <th className="small fw-semi text-black text-nowrap">Number Of Users</th>
              <th className="small fw-semi text-black text-nowrap">Users</th>
              <th className="small fw-semi text-black text-nowrap">Last Updated</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">
                  <img
                    src={data.Owner}
                    alt="property-img"
                    className="img-fluid me-2 owner-img"
                  />
                  {data.ProfileName}
                </td>
                <td className="small text-black">{data.NumberOfUsers}</td>
                <td className="small text-black"><div>{data.Users}</div></td>
                <td className="small text-black">{data.LastUpdated}</td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="" className="mx-1 tblicon">
                      <TbCopy  className=" fs-5"/>
                    </Link>
                    <Link to="/admin/edit-inventory" className="mx-1 tblicon">
                      <IoPencil  className=" fs-5"/>
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <HiTrash  className=" fs-5"/>
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

export default AccessProfiles;





