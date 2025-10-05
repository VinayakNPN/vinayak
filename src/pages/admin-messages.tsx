import React from 'react';
import { MessageViewer } from '../components/MessageViewer';

const AdminMessages = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Contact Messages</h1>
        <MessageViewer />
      </div>
    </div>
  );
};

export default AdminMessages;
