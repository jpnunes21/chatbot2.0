import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import 'react-chatbot-kit/build/main.css'

import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot 
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
      </header>
    </div>
  );
}

export default App;
