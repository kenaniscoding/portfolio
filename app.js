    function selectOption(message) {
        const chatContainer = document.querySelector('.chat-container');

        // Add user message
        const userMessage = `
        <div class="reply-row">
            <div class="user-message">
                    <div class="avatar user-avatar">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                            <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="message-content"><p>${message}</p></div>
            </div>
        </div>`;
        chatContainer.innerHTML += userMessage;

        // Add sample assistant reply
        let reply = "";
        if (message.includes('promises')) {
            reply = "A Promise in JavaScript represents a value that may be available now, later, or never. It helps manage async operations.";
        } else if (message.includes('API')) {
            reply = "An API (Application Programming Interface) allows different software applications to communicate with each other.";
        } else if (message.includes('joke')) {
            reply = "Why do programmers prefer dark mode? Because light attracts bugs!";
        } else {
            reply = "I'm not sure about that, but I'll try to help!";
        }

        const assistantMessage = `
        <div class="reply-row">
            <div class="assistant-message">
                <div class="avatar assistant-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" stroke="white" stroke-width="2"/>
                        <path d="M21 3h-6m0 0v6m0-6l-9 9" stroke="white" stroke-width="2"/>
                    </svg>
                </div>
                <div class="message-content"><p>${reply}</p></div>
            </div>
        </div>`;
        chatContainer.innerHTML += assistantMessage;

        // Scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }