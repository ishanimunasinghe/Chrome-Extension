// Elements
const departOrArriveElement = document.getElementById("departOrArrive")
const timeElement = document.getElementById("timeID")
const startLocationElement = document.getElementById("startLocation")
const endLocationElement = document.getElementById("endLocation")

// Button elements 
const startButton = document.getElementById("startButton")
const cancelButton = document.getElementById("cancelButton")

startButton.onclick = () => {
    const prefs = {
        departOrArrive: departOrArriveElement.value,
        timeID: timeElement.value,
        startLocation: startLocationElement.value,
        endLocation: endLocationElement.value
        
    }
    chrome.runtime.sendMessage({ event: 'onStart', prefs})
    
    
}

cancelButton.onclick = () => {
    chrome.runtime.sendMessage({ event: 'onStop'})
}

chrome.storage.local.get(["departOrArrive", "timeID", "startLocation", "endLocation"], (result) => {
    const { departOrArrive, timeID, startLocation, endLocation } = result;

    if (departOrArrive) {
        departOrArriveElement.value = departOrArrive
    }

    if (timeID) {
        timeElement.value = timeID
    }

    if (startLocation) {
        startLocationElement.value = startLocation
    }

    if (endLocation) {
        endLocationElement.value = endLocation
    }


})
