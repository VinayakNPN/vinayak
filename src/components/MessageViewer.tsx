import React, { useState, useEffect } from 'react';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const MessageViewer = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Load messages from localStorage
    const loadedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    setMessages(loadedMessages);
  }, []);

  if (messages.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        No messages yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div key={msg.id} className="glass p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-foreground">{msg.name}</h3>
              <p className="text-sm text-primary">{msg.email}</p>
            </div>
            <span className="text-xs text-muted-foreground">
              {new Date(msg.timestamp).toLocaleString()}
            </span>
          </div>
          <h4 className="text-sm font-medium text-foreground mb-2">{msg.subject}</h4>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{msg.message}</p>
        </div>
      ))}
    </div>
  );
};
