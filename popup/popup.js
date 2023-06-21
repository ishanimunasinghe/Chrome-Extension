// Elements
const searchChoiceElement = document.getElementById("searchChoice")
const wordElement = document.getElementById("word")

// Button elements 
const startButton = document.getElementById("startButton")
const cancelButton = document.getElementById("cancelButton")

startButton.onclick = () => {
    // 'prefs' object is created with searchChoice and word properties
    const prefs = {
        searchChoice: searchChoiceElement.value,
        word: wordElement.value
    };

    chrome.runtime.sendMessage({ event: 'onStart', prefs }, (response) => {
        // Handle response from the background script if needed
        console.log('Response from background script:', response);
    });
};

cancelButton.onclick = () => {
    chrome.runtime.sendMessage({ event: 'onStop' }, (response) => {
        // Handle response from the background script if needed
        console.log('Response from background script:', response);
    });
};

// Repopulates previously inputted values after popup is closed then opened again 
chrome.storage.local.get(["searchChoice", "word"], (result) => {
    const { searchChoice, word } = result;

    if (searchChoice) {
        searchChoiceElement.value = searchChoice
    }

    if (word) {
        wordElement.value = word
    }
})
