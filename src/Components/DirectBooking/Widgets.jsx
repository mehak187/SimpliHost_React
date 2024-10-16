import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import owner from "../../assets/img/owner.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import GroupImage from "../Checklist/GroupImage";

function Widgets() {
  const DataCollection = [
    {
      id: 1,
      WidgetsName: "John",
      Type: "Search",
      status: "Active",
      property: <GroupImage />,
    },
    {
      id: 1,
      WidgetsName: "John",
      Type: "Search",
      status: "Inactive",
      property: <GroupImage />,
    },
    {
      id: 1,
      WidgetsName: "John",
      Type: "Search",
      status: "Inactive",
      property: <GroupImage />,
    },
    {
      id: 1,
      WidgetsName: "John",
      Type: "Search",
      status: "Active",
      property: <GroupImage />,
    },
    {
      id: 1,
      WidgetsName: "John",
      Type: "Search",
      status: "Active",
      property: <GroupImage />,
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
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                Widgets Name
              </th>
              <th className="small fw-semi text-black text-nowrap">Type</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">{data.WidgetsName}</td>
                <td className="small text-black text-nowrap">{data.Type}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>{" "}
                <td className="small text-black">
                  <div className="d-flex justify-content-center">
                    {data.property}
                  </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex justify-content-center">
                    <Link to="" className="mx-1 tblicon">
                      <FaEye className=" fs-5" />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
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

export default Widgets;
