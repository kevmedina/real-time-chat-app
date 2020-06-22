const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("New web socket connection");
});

const PORT = 3002 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
