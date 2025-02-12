import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/context";
const Sidebar = () => {
  const [sidebarExtended, setSidbarExtended] = useState(false);
  const { onSend, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);
  };
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
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="new chat" />
          {sidebarExtended && <p>New Chat</p>}
        </div>
        {sidebarExtended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((prompt, index) => {
              return (
                <div
                  onClick={() => loadPrompt(prompt)}
                  className="recent-chat"
                  key={index}
                >
                  <img src={assets.message_icon} alt="recent chat icon" />
                  <p>{prompt.slice(0, 16)} ...</p>
                </div>
              );
            })}
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
