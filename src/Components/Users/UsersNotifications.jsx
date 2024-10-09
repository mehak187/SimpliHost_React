import React from "react";

function UsersNotifications() {
  const DataCollection = [
    {
      id: 1,
      title: "New Reservation",
      app: "checked",
      email: "checked",
      sms: "checked",
    },
    {
      id: 1,
      title: "New Inquiry",
      app: "unchecked",
      email: "unchecked",
      sms: "unchecked",
    },
    {
      id: 1,
      title: "Updated Reservation",
      app: "unchecked",
      email: "unchecked",
      sms: "unchecked",
    },
    {
      id: 1,
      title: "Cancelled Reservation",
      app: "checked",
      email: "checked",
      sms: "checked",
    },
    {
      id: 1,
      title: "New Guest Message",
      app: "unchecked",
      email: "unchecked",
      sms: "unchecked",
    },
    {
      id: 1,
      title: "New Task",
      app: "unchecked",
      email: "unchecked",
      sms: "unchecked",
    },
    {
      id: 1,
      title: "Upcoming Task",
      app: "unchecked",
      email: "unchecked",
      sms: "unchecked",
    },
    {
      id: 1,
      title: "Overdue Task",
      app: "checked",
      email: "checked",
      sms: "checked",
    },
    {
      id: 1,
      title: "Completed Task",
      app: "checked",
      email: "checked",
      sms: "checked",
    },
  ];
  return (
    <div className="setting-bg rounded-3">
     <form action="">
     <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle border-bottom-0">
              <th className="small fw-semi text-black text-nowrap">Types</th>
              <th className="small fw-semi text-black text-nowrap">
                Mobile App
              </th>
              <th className="small fw-semi text-black text-nowrap">Email</th>
              <th className="small fw-semi text-black text-nowrap">SMS</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr className="align-middle">
                <td className="small text-black text-capitalize fw-semi">
                  {data.title}
                </td>
                <td className="small text-black">
                  <div class="checkbox-wrapper-13">
                    <input
                      type="checkbox"
                      defaultChecked={data.app === "checked"}
                    />
                  </div>
                </td>
                <td className="small text-black">
                  <div class="checkbox-wrapper-13">
                    <input
                      type="checkbox"
                      defaultChecked={data.email === "checked"}
                    />
                  </div>
                </td>
                <td className="small text-black">
                  <div class="checkbox-wrapper-13">
                    <input
                      type="checkbox"
                      defaultChecked={data.sms === "checked"}
                    />
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

export default UsersNotifications;


