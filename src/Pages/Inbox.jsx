import React from "react";
import LeftChat from "../Components/Chat/LeftChat";
import MidChat from "../Components/Chat/MidChat";
import RightChat from "../Components/Chat/RightChat";

function Inbox() {
  return (
    <div className="main d-flex ">
      <div className="left-chat bg-lgrey rounded-3">
        <LeftChat />
      </div>
      <div className="mid-chat d-flex ">
        <div className="mid">
          <MidChat />
        </div>
        <div className="right-chat">
          <RightChat />
        </div>
      </div>
    </div>
  );
}

export default Inbox;
