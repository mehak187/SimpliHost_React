import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";

function Webhooks() {
  const DataCollection = [
    {
      id: 1,
      Name: "Name here",
      Details: "https://hooks.simplihost.com/hooks/catch/343543/35fd2a3w/",
    },
    {
      id: 1,
      Name: "Name here",
      Details: "https://hooks.simplihost.com/hooks/catch/343543/35fd2a3w/",
    },
    {
      id: 1,
      Name: "Name here",
      Details: "https://hooks.simplihost.com/hooks/catch/343543/35fd2a3w/",
    },
    {
      id: 1,
      Name: "Name here",
      Details: "https://hooks.simplihost.com/hooks/catch/343543/35fd2a3w/",
    },
    {
      id: 1,
      Name: "Name here",
      Details: "https://hooks.simplihost.com/hooks/catch/343543/35fd2a3w/",
    },
    {
      id: 1,
      Name: "Name here",
      Details: "https://hooks.simplihost.com/hooks/catch/343543/35fd2a3w/",
    },
  ];

  return (
    <div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Name</th>
              <th className="small fw-semi text-black text-nowrap">Details</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.Name}</td>
                <td className="small text-black">
                  <a href={data.Details} target="blank">{data.Details}</a>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 greenbtn text-decoration-none">
                      Test
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <TbCopy />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <HiTrash />
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

export default Webhooks;
