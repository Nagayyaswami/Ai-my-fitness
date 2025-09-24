const output = document.getElementById("output");

function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

function handleCommand(command) {
    const cmd = command.toLowerCase();
    output.textContent = "You said: " + cmd;

    if (cmd.includes("hello")) {
        speak("Hello! How can I assist you?");
    } else if (cmd.includes("time")) {
        const now = new Date();
        speak("The time is " + now.toLocaleTimeString());
    } else if (cmd.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.com", "_blank");
    } else if (cmd.includes("stop")) {
        speak("Goodbye!");
    }

    if (cmd.includes("hello")) {
        speak("Hello! How can I assist you?");
    } else if (cmd.includes("time")) {
        const now = new Date();
        speak("The time is " + now.toLocaleTimeString());
    } else if (cmd.includes("play music")) {
        speak("playing music");
        window.open("https://www.youtube.com/watch?v=Ov0WLxomDs4&list=RDOv0WLxomDs4&start_radio=1", "_blank");

    } else if (cmd.includes("open chatgpt")) {
        speak("opening chatgpt");    
        window.open("https://chatgpt.com", "_blank");
    } else if (cmd.includes("stop")) {
        speak("Goodbye!");
    } 
}

function startListening() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Sorry, your browser doesn't support Speech Recognition.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        output.textContent = "";
    };

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript;
        handleCommand(command);
    };

    recognition.onerror = (event) => {
        output.textContent = "Error occurred: " + event.error;
        speak("Sorry, I could not understand.");
    };

    recognition.start();
}
