const WebSocket = require("uws");

const ws = new WebSocket("ws://localhost:3000");

ws.on("open", () => {
  console.log("successfully connected to the server");

  //send a new message from client to server
  ws.send("hello server from client");

  ws.on("message", message => {
    console.log("Receive message from the server " + message);
  });

  
});
