import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import owner from "../../assets/img/owner.png";
import property from "../../assets/img/property-collection.png";
import FilterRow from "./FilterRow";
import OwnerDetailBox from "./OwnerDetailBox";
function CoHostUser() {
  const DataCollection = [
    {
      id: 1,
      User: owner,
      FirstName: "usernamehere",
      LastName: "usernamehere",
      PrimaryRole: "Owner",
      Phone: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Active",
      Property: property,
    },
    {
      id: 1,
      User: owner,
      FirstName: "usernamehere",
      LastName: "usernamehere",
      PrimaryRole: "Owner",
      Phone: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Inactive",
      Property: property,
    },
    {
      id: 1,
      User: owner,
      FirstName: "usernamehere",
      LastName: "usernamehere",
      PrimaryRole: "Owner",
      Phone: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Active",
      Property: property,
    },
    {
      id: 1,
      User: owner,
      FirstName: "usernamehere",
      LastName: "usernamehere",
      PrimaryRole: "Owner",
      Phone: "+21 999 999 999",
      Email: "simplihost@gmail.com",
      status: "Active",
      Property: property,
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Inactive":
        return "text-danger";
      case "Active":
        return "text-success";
      default:
        return "";
    }
  };
  return (
    <div>
      <OwnerDetailBox />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                First Name
              </th>
              <th className="small fw-semi text-black text-nowrap">LastName</th>
              <th className="small fw-semi text-black text-nowrap">
                PrimaryRole
              </th>
              <th className="small fw-semi text-black text-nowrap">Phone</th>
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
                  <div className="d-flex align-items-center">
                    <img
                      src={data.User}
                      alt="property-img"
                      className="img-fluid me-2 owner-img"
                    />
                    {data.FirstName}
                  </div>
                </td>
                <td className="small text-black">{data.LastName}</td>
                <td className="small text-black">{data.PrimaryRole}</td>
                <td className="small text-black text-nowrap">{data.Phone}</td>
                <td className="small text-black">{data.Email}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small text-black">
                  <img
                    src={data.Property}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="/admin/edit-inventory" className="mx-1 tblicon">
                      <IoPencil className=" fs-5" />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
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

export default CoHostUser;
