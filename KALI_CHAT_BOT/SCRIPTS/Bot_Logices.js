const chatOutput = document.getElementById("chat-content");

const botReplies = [
    "Hello! How can I assist you today?",
    "I'm here to help with anything you need.",
    "Can you tell me more about that?",
    "I'm always here if you need me.",
];

const askwords = [
    "Interesting! Tell me more.",
    "Let me think about that... Done!",
    "That's a great question!",
];

const sorrytext = [
    "I'm sorry, I didn't understand that. Could you rephrase?",
    "I'm sorry, I didn't understand that. Could you rephrase?",
    "I'm sorry, I didn't understand that. Could you rephrase?",
];

const code = [
    `   hi i am      <a href="asdf" target="_blank">asdf</a>`,
];

function messagesDisplay(text) {
    if (text == "hii") {
        Timeout(botReplies) // Delay for realism
    }
    else if (text == "ask") {
        Timeout(askwords) // Delay for realism
    }
    else if (text == "link") {
        Timeout(code) // Delay for realism
    }
    else {
        Timeout(sorrytext) // Delay for realism
    }
}