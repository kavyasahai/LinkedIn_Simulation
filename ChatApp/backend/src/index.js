import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import WebSocketServer, { Server } from "uws";
import { createConnection } from "net";

const PORT = 3000;
const app = express();
app.server = http.createServer(app);

//app.use(morgan("dev"));

app.use(
  cors({
    exposedHeaders: "*"
  })
);

app.use(
  bodyParser.json({
    limit: "50mb"
  })
);

app.wss = new Server({
  server: app.server
});

let clients = [];

app.wss.on("connection", connection => {
  const userId = clients.length;

  const newClient = {
    ws: connection,
    userId: userId
  };

  connection.userId = userId;
  clients.push(newClient);

  console.log("New Client connected with userid:" + userId);

  connection.on("message", message => {
    console.log("Received message from the client: " + message);
    connection.send("Hi client from server");
  });

  connection.on("close", () => {
    console.log("client disconnected with userid:" + userId);
    clients = clients.filter(client => client.userId !== userId);
  });
});

app.get("/api/all_connections", (req, res, next) => {
  return res.json({
    people: clients
  });
});
app.server.listen(process.env.PORT || PORT, () => {
  console.log(`App is running on port ${app.server.address().port}`);
});

export default app;
