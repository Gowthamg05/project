window.onload = function() {
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resultText = document.getElementById('result-text');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';  // Set language
    recognition.interimResults = false;  // Disable interim results
    recognition.maxAlternatives = 1;

    // Start listening when start button is clicked
    startBtn.addEventListener('click', () => {
        recognition.start();
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resultText.textContent = 'Listening...';
    });

    // Stop listening when stop button is clicked
    stopBtn.addEventListener('click', () => {
        recognition.stop();
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });

    // Capture the speech result
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resultText.textContent = transcript;
    };

    // Error handling
    recognition.onerror = (event) => {
        resultText.textContent = `Error occurred: ${event.error}`;
    };

    recognition.onend = () => {
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };
}
