// Elements
const departOrArriveElement = document.getElementById("departOrArrive")
const timeElement = document.getElementById("timeID")
const startLocationElement = document.getElementById("startLocation")
const endLocationElement = document.getElementById("endLocation")

// Button elements 
const startButton = document.getElementById("startButton")
const cancelButton = document.getElementById("cancelButton")

startButton.onclick = function () {
    if (timeElement.value){
        console.log("Time ", timeElement.value)
    } else {
        console.log("Time is invald")
    }
    
}

cancelButton.onclick = function () {
    console.log("Start Location ", startLocationElement.value)
}
