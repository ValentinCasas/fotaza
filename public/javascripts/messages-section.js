
const socket = io();

const username = document.getElementById("i-msg")
const message = document.getElementById("input-msg")
const btn = document.getElementById("compartir-btn")
const output = document.getElementById("box-msg")

btn.addEventListener("click", function () {
    console.log("me diste click :D");
    socket.emit("chat:message", {
        message: message.value,
        username: username.value
    });
});


/* METER TODO DENTRO DE LA BASE DE DATOS */
socket.on("chat:message", function (data) {
    output.innerHTML += 
      `
      <div id="user-msg" class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p-2 ">
        <i id="i-msg"> ${data.username} </i>
      </div>

      <div id="msg" class="col-lg-11 col-md-11 col-sm-11 col-xs-11 p-2">
        <p id="p-msg"> ${data.message} </p>
      </div>

      <div id="linea-msg" class="col-lg-12 col-md-12 col-sm-12 col-xs-12"/>
      `


});

