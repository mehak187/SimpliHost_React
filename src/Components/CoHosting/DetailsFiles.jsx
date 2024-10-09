import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import propertyCollection from "../../assets/img/property.png";
import url from "../../assets/img/url.png";
import file from "../../assets/img/file.png";
import OwnerDetailBox from "./OwnerDetailBox";

import { FaDollarSign } from "react-icons/fa";

function DetailsFiles() {
  const DataCollection = [
    {
      id: 1,
      Name: "06/14/2024",
      URL: "#",
      File: "#",
    },
    {
      id: 1,
      Name: "06/14/2024",
      URL: "#",
      File: "#",
    },
    {
      id: 1,
      Name: "06/14/2024",
      URL: "#",
      File: "#",
    },
  ];
 
  return (
    <div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Name</th>
              <th className="small fw-semi text-black text-nowrap">URL</th>
              <th className="small fw-semi text-black text-nowrap">File</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">{data.Name}</td>
                <td className="small text-black">
                  <Link to={data.File} target="_blank" className="d-flex text-decoration-none align-items-center">
                    <img
                      src={file}
                      alt="property-img"
                      className=" me-2 "
                    />
                  </Link>
                </td>
                <td className="small text-black">
                  <Link to={data.URL} target="_blank" className="d-flex text-decoration-none align-items-center">
                    <img
                      src={url}
                      alt="property-img"
                      className=" me-2 "
                    />
                  </Link>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <FaEye className="fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
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

export default DetailsFiles

