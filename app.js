const pressKey = document.querySelector("#pressKey");
const container = document.querySelector("#container");
const eventKey = document.querySelector("#eventKey");
const eventCode = document.querySelector("#eventCode");
const eventWhich = document.querySelector("#eventWhich");

window.addEventListener('keydown', (event) => {
    console.log(event); //for debug
    eventKey.innerHTML = `${event.key}`
    eventCode.innerHTML = `${event.code}`
    eventWhich.innerHTML = `${event.which}`
    pressKey.innerHTML = `${event.which}`
    container.style.visibility = "visible"
});