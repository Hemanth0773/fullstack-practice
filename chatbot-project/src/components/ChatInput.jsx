import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({
  chatMessages,
  setChatMessage,
  isLoading,
  setIsLoading,
}) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (inputText === "" || isLoading) {
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessage(newChatMessages);

    setInputText("");

    setIsLoading(true);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessage([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  function keyboard(event) {
    if (event.key === "Enter") sendMessage();
    if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={keyboard}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        disabled={inputText === "" || isLoading}
        className="send-button"
      >
        Send
      </button>
    </div>
  );
}
