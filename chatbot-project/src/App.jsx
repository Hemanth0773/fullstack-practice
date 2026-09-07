import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [chatMessages, setChatMessage] = useState([]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessage={setChatMessage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
