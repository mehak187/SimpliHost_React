import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { FaChevronLeft, FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Revive from "../../assets/img/brevive.png";
import Bdy from "../../assets/img/bdy.png";
import Language from "../../assets/img/language.png";
import AI from "../../assets/img/ai.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { FaCaretDown } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import { GoPaperclip } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";

const options = ["Send", "via App", "via SMS", "via E-mail"];

function MidChat() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="border border-muted border-2 border-top-0 rounded-3">
      <div className="border border-dark p-2 rounded-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <AvatarGroup max={3}>
            {Array.from({ length: 5 }, (_, index) => (
              <Avatar
                key={index}
                alt={`Avatar ${index + 1}`}
                src={`/static/images/avatar/${index + 1}.jpg`}
                className="md-img"
              />
            ))}
          </AvatarGroup>
          <div className="ms-2 d-flex align-items-center">
            <h6 className="mb-0 ex-small fw-bold">Guest Name Here</h6>
            <MdEdit className="border border-dark rounded-circle d-inline-flex p-1 fs-5 ms-2" />
          </div>
        </div>
        <div>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button
                  variant="contained"
                  className="bg-lgrey shadow-none text-dark max rounded-circle d-inline-flex"
                  {...bindTrigger(popupState)}
                >
                  <FaChevronLeft />
                </Button>
                <Popover
                  className="shadow-none"
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Typography
                    variant="outlined"
                    className="bg-transparent"
                    sx={{ p: 0 }}
                  >
                    <div className="d-flex bg-transparent p-2">
                      <PopoverItem
                        icon={<FaCheck />}
                        text="Check-in in 2 days"
                      />
                      <PopoverItem
                        icon={<BsFillTelephoneFill />}
                        text="+21 315 909 909"
                      />
                      <PopoverItem icon={<IoKeySharp />} text="5151" />
                      <div>
                        <img
                          src={Revive}
                          alt=""
                          className="md1-img shadow rounded-circle me-2"
                        />
                      </div>
                      <div>
                        <img
                          src={Bdy}
                          alt=""
                          className="md1-img shadow rounded-circle me-2"
                        />
                      </div>
                      <div>
                        <img
                          src={Language}
                          alt=""
                          className="md1-img shadow rounded-circle me-2"
                        />
                      </div>
                    </div>
                  </Typography>
                </Popover>
              </div>
            )}
          </PopupState>
        </div>
      </div>
      <div className="chat-start"></div>
      <div className="d-flex align-items-center bg-white p-2 shadow rounded-3">
        <div className="d-flex align-items-center me-2">
          <div className="">
            <IoMicOutline className="fs-4 text-prpl me-2" />
          </div>
          <div>
            <CiFaceSmile className="fs-4 text-prpl me-2" />
          </div>
          <div>
            <GoPaperclip className="fs-4 text-prpl me-2" />
          </div>
          <div>
            <BiMessageDetail className="fs-4 text-prpl me-2" />
          </div>
        </div>
        <div className="w-100 me-2">
          <input
            type="text"
            className="chat-input w-100 border-0"
            placeholder="Type your message"
          />
        </div>
        <div className="d-flex align-items-center">
          <div className="me-2">
            <img src={AI} alt="ai" className="ai-img" />
          </div>
          <div className="frag">
            <React.Fragment>
              <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
              >
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                  size="small"
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <FaCaretDown />
                </Button>
              </ButtonGroup>
              <Popper
                sx={{ zIndex: 1 }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndex}
                              onClick={(event) =>
                                handleMenuItemClick(event, index)
                              }
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}

const PopoverItem = ({ icon, text }) => (
  <div className="d-flex align-items-center me-2">
    {icon &&
      React.cloneElement(icon, {
        className:
          "border border-dark rounded-circle d-inline-flex p-1 fs-5 me-2",
      })}
    <h6 className="mb-0 ex-small fw-bold">{text}</h6>
  </div>
);

export default MidChat;
