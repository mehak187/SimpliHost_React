import React from "react";
import bells from "../../assets/img/bells.png";

function Notifications() {
  const Notifications = [
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
  ];
  return (
    <form action="" className="h-100">
      <div className="h-100 d-flex flex-column">
        <div>
          <h2 className="fs-5 mb-0 text-capitalize text-blue2 fw-bold mt-3 mt-sm-0">
            Notifications
          </h2>
          {Notifications.map((data) => (
            <div className="col-12 notif my-3 p-3">
              <div className="d-xl-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={bells} alt="" className="bell me-2 me-md-3" />
                  <div>
                    <p className="mb-0 fw-semi">{data.Title}</p>
                    <p className="mb-0 small">{data.Content}</p>
                  </div>
                </div>
                <div className="mt-3 mt-xl-0">
                  <div className="d-flex justify-content-end align-items-center">
                    <p className="mb-0 small me-4">{data.Date}</p>
                    <p className="mb-0 small">{data.Time}</p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-end mt-3">
                    <span>Off</span>
                    <label className="switch mx-3">
                      <input type="checkbox" id="Capture" />
                      <span className="slider round"></span>
                    </label>
                    <span>On</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-auto">
          <input
            type="submit"
            className="bluebutton rounded-2 text-white"
            value="Save"
          />
        </div>
      </div>
    </form>
  );
}

export default Notifications;
