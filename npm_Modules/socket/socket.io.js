import express from "express";
import { Server } from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Create a Socket.io server and attach it to the server
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle WebSocket connections using Socket.io
io.on("connection", (socket) => {
  // Listen for 'chat message' events from clients and broadcast messages to all connected clients
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
