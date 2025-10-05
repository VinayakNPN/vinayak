import fs from 'fs';
import path from 'path';
import { ContactMessage, MessagesData, createNewMessage } from './messages.types';

const messagesPath = path.join(process.cwd(), 'src', 'data', 'messages.json');

export const saveMessage = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<void> => {
  try {
    // Read existing messages
    let messagesData: MessagesData;
    try {
      const fileContent = await fs.promises.readFile(messagesPath, 'utf-8');
      messagesData = JSON.parse(fileContent);
    } catch {
      // If file doesn't exist, initialize with empty data
      messagesData = {
        messages: [],
        metadata: {
          lastMessageId: '',
          totalMessages: 0,
          lastUpdated: new Date().toISOString()
        }
      };
    }

    // Create new message
    const newMessage = createNewMessage(name, email, subject, message);

    // Add to messages array
    messagesData.messages.unshift(newMessage);

    // Update metadata
    messagesData.metadata = {
      lastMessageId: newMessage.id,
      totalMessages: messagesData.messages.length,
      lastUpdated: new Date().toISOString()
    };

    // Write back to file
    await fs.promises.writeFile(
      messagesPath,
      JSON.stringify(messagesData, null, 2),
      'utf-8'
    );
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
};
