export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface MessagesData {
  messages: ContactMessage[];
  metadata: {
    lastMessageId: string;
    totalMessages: number;
    lastUpdated: string;
  };
}

export const generateMessageId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `msg_${timestamp}_${random}`;
};

export const createNewMessage = (
  name: string,
  email: string,
  subject: string,
  message: string
): ContactMessage => {
  return {
    id: generateMessageId(),
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  };
};
