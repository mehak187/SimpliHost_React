import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Badge, Avatar, Stack } from "@mui/material";
import { CiSearch, CiFilter } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import BadgeImg from "../../assets/img/ba.png";
import Avt from "../../assets/img/avt.png";
import Language from "../../assets/img/language.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ChatPerson = ({ name, message, time, isActive, onClick }) => (
  <div
    className={`d-flex justify-content-between mt-2 chat-person p-2 ${
      isActive ? "active-chat" : ""
    }`}
    onClick={onClick}
  >
    <div className="d-flex align-items-center">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<SmallAvatar alt="Remy Sharp" src={BadgeImg} />}
      >
        <Avatar alt="Travis Howard" src={BadgeImg} />
      </Badge>

      <div className="ps-2">
        <div className="d-flex align-items-center">
          <img src={Avt} alt="" className="md-img rounded-circle shadow me-2" />
          <h6 className="ex-small mb-0">{name}</h6>
          <img
            src={Language}
            alt=""
            className="md-img rounded-circle shadow ms-2"
          />
        </div>
        <p className="gre font-12 mb-0">{message}</p>
      </div>
    </div>
    <span className="font-12">{time}</span>
  </div>
);

ChatPerson.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function LeftChat() {
  const [value, setValue] = useState(0);
  const [activeChat, setActiveChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChatClick = (name) => {
    setActiveChat(name);
  };

  const chatData = [
    { name: "Guest Name", message: "Read message text", time: "30 min ago" },
    { name: "John Doe", message: "Hello, how are you?", time: "5 min ago" },
    { name: "Jane Smith", message: "Meeting at 3 PM", time: "1 hr ago" },
    { name: "Jane Smith", message: "Meeting at 3 PM", time: "1 hr ago" },
    { name: "Jane Smith", message: "Meeting at 3 PM", time: "1 hr ago" },
    { name: "Jane Smith", message: "Meeting at 3 PM", time: "1 hr ago" },
    { name: "Jane Smith", message: "Meeting at 3 PM", time: "1 hr ago" },
  ];

  const filteredChats = chatData.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%" }}>
      <div className="d-flex justify-content-between p-2">
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="chat tabs">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Unread" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <div className="dropdown">
          <button
            className="d-inline-flex rounded-3 align-items-center border bg-white p-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <CiFilter className="text-secondary me-2" /> Filter{" "}
            <FaCaretDown className="text-secondary ms-3" />
          </button>
          <ul className="dropdown-menu w-100">
            <li>
              <p className="dropdown-item">Option 1</p>
            </li>
            <li>
              <p className="dropdown-item">Option 2</p>
            </li>
            <li>
              <p className="dropdown-item">Option 3</p>
            </li>
          </ul>
        </div>
      </div>

      <CustomTabPanel className="p-2" value={value} index={0}>
        <form>
          <div className="border border-dark rounded-pill bg-white d-flex p-2">
            <label
              htmlFor="searching"
              className="bg-blue text-white rounded-circle p-1 d-inline-flex"
            >
              <CiSearch />
            </label>
            <input
              type="search"
              className="border-0 px-2 bg-white w-100"
              id="searching"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <div className="person-chat pe-2">
          {filteredChats.map((chat, index) => (
            <ChatPerson
              key={index}
              name={chat.name}
              message={chat.message}
              time={chat.time}
              isActive={activeChat === chat.name}
              onClick={() => handleChatClick(chat.name)}
            />
          ))}
        </div>
      </CustomTabPanel>

      <CustomTabPanel className="p-2" value={value} index={1}>
        <div className="person-chat">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <p className="text-center">No unread messages available.</p>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
