import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import owner from "../../assets/img/owner.png";
import platform from "../../assets/img/platform.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import GroupImage from "../Checklist/GroupImage";

function Platforms() {
  const DataCollection = [
    {
      id: 1,
      Platform: platform,
      Email: "bethexample@gmail.com",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Listings: "05",
      property: <GroupImage />,
    },
    {
      id: 1,
      Platform: platform,
      Email: "bethexample@gmail.com",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Listings: "05",
      property: <GroupImage />,
    },
    {
      id: 1,
      Platform: platform,
      Email: "bethexample@gmail.com",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Listings: "05",
      property: <GroupImage />,
    },
    {
      id: 1,
      Platform: platform,
      Email: "bethexample@gmail.com",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Listings: "05",
      property: <GroupImage />,
    },
  ];
  return (
    <div>
      <FilterRow searchName="Owner" btnName="Add Owner" btnLink="#" />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Platform</th>
              <th className="small fw-semi text-black text-nowrap">
                Email Address
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Name on Account
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Number of Listings
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Properties
              </th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">
                  <div className="d-flex align-items-center">
                    <img
                      src={data.Platform}
                      alt="property-img"
                      className="img-fluid me-2 platform-img"
                    />
                  </div>
                </td>
                <td className="small text-black">{data.Email}</td>
                <td className="small text-black">
                  <div className="d-flex align-items-center">
                    <img
                      src={data.Owner}
                      alt="property-img"
                      className="img-fluid me-2 owner-img"
                    />
                    {data.OwnerName}
                  </div>
                </td>

                <td className="small text-black">{data.Listings}</td>
                <td className="small text-black">
                  <div className="d-flex align-items-center justify-content-center">
                    {data.property}
                  </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex justify-content-center">
                    <Link
                      to="/admin/co-hosting-details"
                      className="mx-1 tblicon"
                    >
                      <FaEye className="fs-5" />
                    </Link>
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

export default Platforms;
