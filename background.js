// import fetchData from "./api/fetchData.js"

async function fetchData() {
    const words_endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word 

    fetch(words_endpoint) 
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })

}


const serviceWorkerPath = chrome.runtime.getURL('background.js');
navigator.serviceWorker.register(serviceWorkerPath)
    .then(registration => {
        // Registration successful
        console.log('Service worker registered:', registration);
    })
    .catch(error => {
        // Registration failed
        console.log('Service worker registration failed:', error);
    });



chrome.runtime.onInstalled.addListener(details => {
    fetchData();
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { event, prefs } = data;

    switch (event) {
        case 'onStop':
            handleOnStop();
            break;
        case 'onStart':
            handleOnStart(prefs);
            break;
        default:
            break;
    }
})


function handleOnStop() {
    console.log("On stop in background");
  }
  
function handleOnStart(prefs) {
    console.log("On start in background");
    console.log("prefs received:", prefs);

    chrome.storage.local.set(prefs);
}