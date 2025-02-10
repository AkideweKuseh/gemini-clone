import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import "./Main.css";
const Main = () => {
  const {
    onSend,
    recentPrompt,
    responseData,
    showResponse,
    loading,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>
      <div className="main-container">
        {!showResponse ? (
          <>
            <p className="recent-prompt">{recentPrompt}</p>{" "}
            <div className="greeting">
              <p>
                <span>Hello, Mike!</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="icon" />
              </div>
              <div className="card">
                <p>Improve the readability ofthe following code.</p>
                <img src={assets.code_icon} alt="icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="chat-response">
            <div className="response-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="response-data">
              <img src={assets.gemini_icon} alt="genimi" />
              <p dangerouslySetInnerHTML={{ __html: responseData }}></p>
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="prompt-box">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter Your Prompt Here..."
            />
            <div className="input-controls">
              <img src={assets.gallery_icon} alt="add gallery icon" />
              <img src={assets.mic_icon} alt="mic icon" />
              <img
                onClick={() => onSend()}
                src={assets.send_icon}
                alt="send icon"
              />
            </div>
          </div>
          <p className="disclaimer">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
