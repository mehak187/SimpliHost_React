import React, { useState } from "react";
import propertyCollection from "../../assets/img/property-collection.png";

function UsersPricing() {
  const DataCollection = [
    {
      id: 1,
      Properties: "Property Name here",
      Role: "Owner",
      Type: "checked",
      propertyCollection: propertyCollection,

    },
    {
      id: 1,
      Properties: "Property Name here",
      Role: "Owner",
      Type: "checked",
    },
    {
      id: 1,
      Properties: "Property Name here",
      Role: "Owner",
      Type: "checked",
    },
    {
      id: 1,
      Properties: "Property Name here",
      Role: "Owner",
      Type: "checked",
    },
    {
      id: 1,
      Properties: "Property Name here",
      Role: "Owner",
      Type: "checked",
    },
    {
      id: 1,
      Properties: "Property Name here",
      Role: "Owner",
      Type: "checked",
    },
  ];

  const [checkedState, setCheckedState] = useState(
    DataCollection.map((data) => data.Type === "checked")
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="setting-bg rounded-3">
      <form action="">
        <div className="table-responsive default-table mt-3">
          <table className="table">
            <thead>
              <tr className="align-middle border-bottom-0">
                <th className="small fw-semi text-black text-nowrap">
                  Properties
                </th>
                <th className="small fw-semi text-black text-nowrap">Role</th>
                <th className="small fw-semi text-black text-nowrap">Type</th>
                <th className="small fw-semi text-black text-nowrap">Price</th>
              </tr>
            </thead>
            <tbody>
              {DataCollection.map((data, index) => (
                <tr className="align-middle" key={data.id}>
                  <td className="small text-black text-capitalize fw-semi">
                    <img src={propertyCollection} alt="propertyCollection" className="me-2"/>
                    {data.Properties}
                  </td>
                  <td className="small text-black"> {data.Role} </td>
                  <td className="small text-black">
                    <div>
                      <label className="switch mx-2">
                        <input
                          type="checkbox"
                          id="Materials"
                          readOnly
                          checked={checkedState[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        <span className="slider round"></span>
                      </label>
                      <span>{checkedState[index] ? "Primary" : "Backup"}</span>
                    </div>
                  </td>
                  <td className="small d-flex align-items-end  text-black">
                    <div>
                      <input type="text" className="me-2 border-0 border-bottom border-2 border-dark bg-transparent" />
                    </div>
                    <div>
                      <div className="checkbox-wrapper-13">
                        <input
                          type="checkbox"
                          id="project"
                          defaultChecked={data.sms === "checked"}
                        />
                        <label htmlFor="project">Per project</label>
                        
                      </div>
                      <div className="checkbox-wrapper-13 mt-2">
                        <input
                          type="checkbox"
                          id="hour"
                          defaultChecked={data.sms === "checked"}
                        />
                        <label htmlFor="hour">Per hour</label>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-12 mt-4">
          <div className="d-flex align-items-center">
            <input
              type="reset"
              className="graybutton rounded-2 me-4 text-black"
              value="Cancel"
            />
            <input
              type="submit"
              className="bluebutton rounded-2 text-white"
              value="Save"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UsersPricing;
