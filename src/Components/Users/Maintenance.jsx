import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import owner from "../../assets/img/owner.png";

import FilterRow from "./FilterRow";
import GroupImage from "../Checklist/GroupImage";

function Maintenance() {
  const DataCollection = [
    {
      id: 1,
      Owner: owner,
      FirstName: "John",
      LastName: "Doe",
      PrimaryRole: "Maintenance",
      PhoneNumber: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Active",
      property: <GroupImage />,
    },
    {
      id: 1,
      Owner: owner,
      FirstName: "John",
      LastName: "Doe",
      PrimaryRole: "Maintenance",
      PhoneNumber: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Active",
      property: <GroupImage />,
    },
    {
      id: 1,
      Owner: owner,
      FirstName: "John",
      LastName: "Doe",
      PrimaryRole: "Maintenance",
      PhoneNumber: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Deleted",
      property: <GroupImage />,
    },
    {
      id: 1,
      Owner: owner,
      FirstName: "John",
      LastName: "Doe",
      PrimaryRole: "Maintenance",
      PhoneNumber: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Inactive",
      property: <GroupImage />,
    },
    {
      id: 1,
      Owner: owner,
      FirstName: "John",
      LastName: "Doe",
      PrimaryRole: "Maintenance",
      PhoneNumber: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Deleted",
      property: <GroupImage />,
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Inactive":
        return "text-warning";
      case "Deleted":
        return "text-danger";
      case "Active":
        return "text-success";
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
              <th className="small fw-semi text-black text-nowrap">
                First Name
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Last Name
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Primary Role
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Phone Number
              </th>
              <th className="small fw-semi text-black text-nowrap">Email</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
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
                  {data.FirstName}
                </td>
                <td className="small text-black">{data.LastName}</td>
                <td className="small text-black text-nowrap">
                  {data.PrimaryRole}
                </td>
                <td className="small text-black">{data.PhoneNumber}</td>
                <td className="small text-black">{data.Email}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>{" "}
                <td className="small text-black">
                  <div className="d-flex justify-content-center align-items-center">
                    {data.property}
                  </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="/admin/edit-inventory" className="mx-1 tblicon">
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
  );
}

export default Maintenance;
