import React, { useState } from 'react';
import styles from './messages.module.css';

const Messages = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('teachers'); // 'teachers' or 'students'

  const [chats, setChats] = useState({
    teachers: [
      {
        id: 1,
        name: 'Arun Kumar',
        role: 'Math Teacher',
        lastMessage: 'Hope',
        time: '1d',
        messages: [
          { text: 'Did you complete the assignment?', sender: 'them' },
          { text: 'Hope', sender: 'them', time: '1d' }
        ]
      },
      {
        id: 2,
        name: 'Amit Kumar',
        role: 'Physics Teacher',
        lastMessage: 'Happy Birthday',
        time: '1d',
        messages: [
          { text: 'Happy Birthday!', sender: 'me' },
          { text: 'Thanks!', sender: 'them', time: '1d' }
        ]
      },
      {
        id: 3,
        name: 'Abishek Kumar',
        role: 'Chemistry Teacher',
        lastMessage: 'When is exam?',
        time: '1d',
        messages: [
          { text: 'When is exam?', sender: 'them', time: '1d' },
          { text: 'Next Monday at 10am', sender: 'me' }
        ]
      },
      {
        id: 4,
        name: 'Bivesh Kumar',
        role: 'Biology Teacher',
        lastMessage: 'Hello',
        time: '2d',
        messages: [
          { text: 'Hello', sender: 'them', time: '2d' },
          { text: 'Hi Professor!', sender: 'me' }
        ]
      }
    ],
    students: [
      {
        id: 5,
        name: 'Clara John',
        role: 'Class Representative',
        lastMessage: 'Chemistry test',
        time: '2d',
        messages: [
          { text: 'Chemistry test postponed', sender: 'them' },
          { text: 'Chemistry test', sender: 'them', time: '2d' }
        ]
      },
      {
        id: 6,
        name: 'Deepthi Manohar',
        role: 'Lab Assistant',
        lastMessage: 'I have completed',
        time: '2d',
        messages: [
          { text: 'I have completed', sender: 'them', time: '2d' },
          { text: 'Great job!', sender: 'me' }
        ]
      },
      {
        id: 7,
        name: 'Fenziya Chintu',
        role: 'Group Partner',
        lastMessage: 'Yeah',
        time: '3d',
        messages: [
          { text: 'Can we meet tomorrow?', sender: 'me' },
          { text: 'Yeah', sender: 'them', time: '3d' }
        ]
      },
      {
        id: 8,
        name: 'Gayathri Ram',
        role: 'Project Team',
        lastMessage: "That's Great",
        time: '4d',
        messages: [
          { text: 'We got an A!', sender: 'me' },
          { text: "That's Great", sender: 'them', time: '4d' }
        ]
      }
    ]
  });

  const filteredChats = chats[activeTab].filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() && activeChat) {
      const updatedChats = {
        ...chats,
        [activeTab]: chats[activeTab].map(chat => {
          if (chat.id === activeChat.id) {
            return {
              ...chat,
              lastMessage: message,
              time: 'Just now',
              messages: [...chat.messages, { text: message, sender: 'me' }]
            };
          }
          return chat;
        })
      };
      setChats(updatedChats);
      setMessage('');
    }
  };

  return (
    <div className={styles.messagesContainer}>
      <h1 className={styles.header}>Messages</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Teacher/Student..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'teachers' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('teachers')}
        >
          Teachers
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'students' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('students')}
        >
          Students
        </button>
      </div>

      <div className={styles.layout}>
        <div className={styles.contacts}>
          {filteredChats.map(chat => (
            <div 
              key={chat.id} 
              className={`${styles.contact} ${activeChat?.id === chat.id ? styles.active : ''}`}
              onClick={() => setActiveChat(chat)}
            >
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>{chat.name}</div>
                <div className={styles.contactRole}>{chat.role}</div>
              </div>
              <div className={styles.contactPreview}>
                <span className={styles.lastMessage}>{chat.lastMessage}</span>
                <span className={styles.time}>{chat.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.chatArea}>
          {activeChat ? (
            <>
              <div className={styles.chatHeader}>
                <h2>{activeChat.name}</h2>
              </div>
              <div className={styles.messages}>
                {activeChat.messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`${styles.message} ${msg.sender === 'me' ? styles.sent : styles.received}`}
                  >
                    <div className={styles.messageText}>{msg.text}</div>
                    {msg.time && <div className={styles.messageTime}>{msg.time}</div>}
                  </div>
                ))}
              </div>
              <div className={styles.messageInput}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className={styles.noChatSelected}>
              <p>Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;