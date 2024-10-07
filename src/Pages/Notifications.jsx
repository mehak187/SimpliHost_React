import React from "react";
import bells from "../assets/img/bells.png";

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
    <div className="graysection">
      <div className="innerdiv">
        <div className="container-fluid">
          {Notifications.map((data) => (
            <div className="row my-3">
              <div className="col-12 notif p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={bells} alt="" className=" me-3" />
                    <div>
                      <p className="mb-0 fw-semi">{data.Title}</p>
                      <p className="mb-0 small">{data.Content}</p>
                    </div>
                  </div>
                  <div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
