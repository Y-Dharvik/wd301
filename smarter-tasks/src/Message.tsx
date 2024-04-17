import React from 'react';

interface MessageProps {
    text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
    return (
        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p>{text}</p>
        </div>
    );
}

export default Message;