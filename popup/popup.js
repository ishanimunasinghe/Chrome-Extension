// Elements
const searchChoiceElement = document.getElementById("searchChoice")
const wordElement = document.getElementById("word")

// Button elements 
const startButton = document.getElementById("startButton")
const cancelButton = document.getElementById("cancelButton")

startButton.onclick = () => {
    const prefs = {
        searchChoice: searchChoiceElement.value,
        word: wordElement.value
        
    }
    chrome.runtime.sendMessage({ event: 'onStart', prefs})
    
    
}

cancelButton.onclick = () => {
    chrome.runtime.sendMessage({ event: 'onStop'})
}

// Repopulates previously inputted values after popup closed and opened again 
chrome.storage.local.get(["searchChoice", "word"], (result) => {
    const { searchChoice, word } = result;

    if (searchChoice) {
        searchChoiceElement.value = searchChoice
    }

    if (word) {
        wordElement.value = word
    }



})
