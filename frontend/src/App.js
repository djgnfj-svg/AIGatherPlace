import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // 사용자 메시지 추가
    const newMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages([...messages, newMessage]);

    // AI 대답 추가 (시뮬레이션)
    const aiResponse = { id: messages.length + 2, text: '대답입니다', sender: 'ai' };
    setMessages((prevMessages) => [...prevMessages, aiResponse]);

    setInputValue(''); // 입력 필드 초기화
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 dark:bg-gray-800 bg-white rounded-lg shadow">
      <div className="overflow-y-auto h-80 mb-4 p-4 space-y-4 dark:bg-gray-700 bg-gray-100 rounded">
        {messages.map((message) => (
          <div key={message.id} className={`p-2 text-white rounded-lg ${message.sender === 'user' ? 'dark:bg-blue-500 bg-blue-500' : 'dark:bg-green-500 bg-green-500'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 dark:border-gray-600 border-gray-300 rounded-l-lg focus:outline-none dark:bg-gray-700 bg-white dark:text-white text-black"
          placeholder="Type your message here..."
        />
        <button
          onClick={handleSend}
          className="px-4 dark:bg-blue-500 bg-blue-500 text-white rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
