let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Populate the voices array when voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // Set the default voice
    speech.voice = voices[0];

    // Populate the select dropdown with available voices
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.options[i] = option;
    });
};

// Change the voice when a new voice is selected from the dropdown
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Speak the text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
