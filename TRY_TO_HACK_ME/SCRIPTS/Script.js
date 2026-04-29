function startChallenge() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("hackTerminal").style.display = "block";
    simulateHackingEffect();
}

function simulateHackingEffect() {
    const terminalOutput = document.getElementById("terminalOutput");
    const messages = [
        "Initializing Hacking Mode...",
        "Bypassing Security...",
        "Trying SQL injection...",
        "Accessing User Database...",
        "Hacking in progress..."
    ];

    let i = 0;
    let interval = setInterval(() => {
        terminalOutput.innerHTML += "<br>" + messages[i];
        i++;
        if (i === messages.length) {
            clearInterval(interval);
            terminalOutput.innerHTML += "<br>Type a command:";
        }
    }, 1000);
}
function handleCommand(event) {
    const userInput = document.getElementById("userInput").value;
    const terminalOutput = document.getElementById("terminalOutput");
    
    if (event.key === 'Enter') {
        event.preventDefault();
        
        // Simulated SQL injection challenge
        if (userInput.toLowerCase() === "select * from users where username='admin' --") {
            terminalOutput.innerHTML += "<br>Access granted! Welcome admin.";
            document.getElementById("userInput").value = '';
        }
        // Simulate a brute force login challenge
        else if (userInput.toLowerCase() === "brute_force_login") {
            num = Math.ceil(Math.random() * 123456)
            terminalOutput.innerHTML += "<br>Attempting brute force attack...";
            terminalOutput.innerHTML += `<br>Password found: ${num}`;
            document.getElementById("userInput").value = '';
        }
        // Handle incorrect commands
        else {
            terminalOutput.innerHTML += "<br>Command not recognized. Try again.";
            document.getElementById("userInput").value = '';
        }
    }
}
