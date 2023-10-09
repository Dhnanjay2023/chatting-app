const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;

const users = {};

app.use(cors());

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined`);
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined`,
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `Welcome to the chat, ${users[socket.id]}`,
    });
  });

  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id });
  });

  socket.on("disconnect", () => {
    if (users[socket.id]) {
      socket.broadcast.emit("leave", {
        user: "Admin",
        message: `${users[socket.id]} has left`,
      });
      console.log(`${users[socket.id]} has left`);
      delete users[socket.id];
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
