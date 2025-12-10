// DOM elements
// ----------------------------------------------------------------------------------------------
const form = document.querySelector('form');
const msgInput = document.querySelector("input#msg");
const chatElement = document.querySelector("div#chat");


// dependecies - WebSocket
const websocket = new WebSocket('ws://localhost:3000');



// variabler
// ----------------------------------------------------------------------------------------------



// händelselyssnare
// ----------------------------------------------------------------------------------------------

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("och nu då...");
});


// aktivera lyssnare på input message#msg : kan användas för att visa att någon skriver hmhmhm is typing
msgElement.addEventlistener("keydown", (e) =>{
    console.log("is typing", e.key);



// .... hanterar att en person skriver ngt. - kan kanske skickas som en händelse i backend


});







// websocket lyssnare
// ----------------------------------------------------------------------------------------------



// funktioner
// ----------------------------------------------------------------------------------------------
