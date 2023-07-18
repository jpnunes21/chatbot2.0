import React from "react";

const ConversationHistory = (props) => {
    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem('chat_messages'));
        return messages;
    };
    return (
        <div>
            {
                console.log(loadMessages)
            }
        </div>
    );
}

export default ConversationHistory;
