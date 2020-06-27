const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("Connection");
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", { text: `welcome to the room!` });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name}, has joined!`,
    });

    socket.join(user.name);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    console.log("User left the chat!");
  });
});

app.use(router);

server.listen(PORT, console.log(`Server is running on port ${PORT}`));
