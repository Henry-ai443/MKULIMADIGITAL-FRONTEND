import React from "react";

const ChatBot = () => {
    return(
        <div id="chatbot" className="mb-5">
            <h4 className="mt-3 fw-bold">AI Chatbot Support</h4>
            <div className="border rounded p-3"
            style={{
                height: '200px',
                overflowY: 'auto',
                backgroundColor: '#e9ecef'
            }}
            >
                {/* Messages would appear here */}
                <p><strong>Bot:</strong> Hi! How can I assist you with your farm today?</p>
            </div>

            <input type="text"
            className="form-control mt-2"
            placeholder="Type your question here..."
             />
        </div>
    );
}
export default ChatBot