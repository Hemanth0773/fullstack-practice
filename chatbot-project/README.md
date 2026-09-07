# Chatbot

A simple and interactive chatbot built with React and Vite.

The project allows users to send messages to a chatbot, receive responses, and view the conversation in a clean chat interface.

## Features

- 💬 Send messages to the chatbot
- 🤖 Receive chatbot responses
- ⌨️ Press `Enter` to send a message
- ❌ Press `Escape` to clear the input
- ⏳ Loading state while waiting for a response
- 📜 Automatically scrolls to the latest message
- 👤 Separate user and chatbot message styling
- 🧩 Component-based React architecture

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- `supersimpledev` chatbot package

## Project Structure

```text
chatbot-project/
├── src/
│   ├── assets/
│   │   ├── chatbot.png
│   │   └── profile.png
│   │
│   ├── components/
│   │   ├── ChatInput.css
│   │   ├── ChatInput.jsx
│   │   ├── ChatMessage.css
│   │   ├── ChatMessage.jsx
│   │   ├── ChatMessages.css
│   │   └── ChatMessages.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Components

### `ChatInput`

Handles user input and sending messages to the chatbot.

It also manages:

- Input state
- Sending messages
- Loading state
- `Enter` key handling
- `Escape` key handling

### `ChatMessage`

Displays an individual message.

It changes the layout depending on whether the message was sent by the user or the chatbot.

### `ChatMessages`

Displays the complete conversation and automatically scrolls to the newest message.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Hemanth0773/fullstack-practice.git
```

### 2. Navigate into the project

```bash
cd chatbot-project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

## How It Works

The application stores the conversation in React state.

When the user sends a message:

1. The message is added to the conversation.
2. The input field is cleared.
3. The loading state is enabled.
4. The chatbot API is called.
5. The chatbot response is added to the conversation.
6. The loading state is disabled.

The conversation is then rendered using the `ChatMessage` component.

## Author

Hemanth A M
