import React from "react";
import owner from "../../assets/img/owner.png";
import FilterRow from "./FilterRow";
import GroupImage from "../Checklist/GroupImage";
function Expenses() {
  const DataCollection = [
    {
      id: 1,
      ExpenseName: "FreeText",
      ExpenseType: "Kitchen Gas",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Property: <GroupImage/>,
      Amount: "$3,000.00",
      status: "Active",
    },
    {
      id: 1,
      ExpenseName: "FreeText",
      ExpenseType: "Kitchen Gas",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Property: <GroupImage/>,
      Amount: "$3,000.00",
      status: "Active",
    },
    {
      id: 1,
      ExpenseName: "FreeText",
      ExpenseType: "Kitchen Gas",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Property: <GroupImage/>,
      Amount: "$3,000.00",
      status: "Active",
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      // case "Overdue":
      //   return "text-danger";
      case "Active":
        return "text-success";
      default:
        return "";
    }
  };
  return (
    <div>
      <FilterRow searchName="Expense" btnName="Add Expense" btnLink="#" />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                Expense Name
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Expense Type
              </th>
              <th className="small fw-semi text-black text-nowrap">Owner(s)</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
              <th className="small fw-semi text-black text-nowrap">Amount</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  {data.ExpenseName}
                </td>
                <td className="small text-black text-nowrap">
                  {data.ExpenseType}
                </td>
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
                <td className="small text-black">
                  {data.Property}
                </td>
                <td className="small text-black">{data.Amount}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;
