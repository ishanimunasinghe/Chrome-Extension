import fetchData from "./api/fetchData.js"

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

chrome.runtime.onMessage.addListener(data => {
    const { event, prefs } = data
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

const handleOnStop = () => {
    console.log("On stop in background")
}

const handleOnStart = (prefs) => {
    console.log("On start in background")
    console.log("prefs recieved:", prefs)

    chrome.storage.local.set(prefs)
}