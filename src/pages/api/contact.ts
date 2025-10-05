import { saveMessage } from '../../data/messageUtils';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    await saveMessage(name, email, subject, message);

    res.status(200).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error in contact API:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
}
