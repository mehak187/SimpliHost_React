import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PCI from "../../assets/img/pci.png";

export default function GroupImage() {
  return (
    <div className=" d-flex justify-content-start">
    <AvatarGroup max={4} className="avt">
      <Avatar alt="Remy Sharp" src={PCI} className="sm-img" />
      <Avatar alt="Travis Howard" src={PCI} className="sm-img" />
      <Avatar alt="Cindy Baker" src={PCI} className="sm-img" />
      <Avatar alt="Agnes Walker" src={PCI} className="sm-img" />
      <Avatar alt="Trevor Henderson" src={PCI} className="sm-img" />
    </AvatarGroup>
    </div>
  );
}
