const chatInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const copyButton = document.getElementById("copy-button");
// Handle sending messages
function handleSend() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
    addMessage(userMessage, "user");
    chatInput.value = "";
    // Generate bot reply
    messagesDisplay(userMessage, "user")
}

// Copy chat history
function copyChat() {
    const chatText = Array.from(chatOutput.querySelectorAll(".message"))
        .map((msg) => msg.textContent)
        .join("\n");
    navigator.clipboard.writeText(chatText)
}

// Function to add a message
function addMessage(content, sender) {
    const messageElement = document.createElement("pre");
    messageElement.className = `message ${sender}`;
    messageElement.innerHTML = content;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom
}

function Timeout(listname) {
    listname = listname[Math.floor(Math.random() * listname.length)];
    setTimeout(() => addMessage(listname, "bot"), 500); // Delay for realism
}

document.getElementById("send-button").addEventListener("click", function () {
    handleSend()
});

chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSend();
});