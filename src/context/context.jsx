/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [resentPrompt, setResentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResponse, setShowResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");

  const onSend = async () => {
    setResponseData("");
    setLoading(true);
    setShowResponse(true);
    setResentPrompt(input);
    const response = await run(input);

    setResponseData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    resentPrompt,
    setResentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResponse,
    setShowResponse,
    loading,
    setLoading,
    responseData,
    setResponseData,
    onSend,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
