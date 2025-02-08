import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Sidebar = () => {
  const [sidebarExtended, setSidbarExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => {
            setSidbarExtended(!sidebarExtended);
          }}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="new chat" />
          {sidebarExtended && <p>New Chat</p>}
        </div>
        {sidebarExtended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-chat">
              <img src={assets.message_icon} alt="recent chat icon" />
              <p>What is react...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-chat">
          <img src={assets.question_icon} alt="help" />
          {sidebarExtended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-chat">
          <img src={assets.history_icon} alt="help" />
          {sidebarExtended && <p>History</p>}
        </div>
        <div className="bottom-item recent-chat">
          <img src={assets.setting_icon} alt="help" />
          {sidebarExtended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
