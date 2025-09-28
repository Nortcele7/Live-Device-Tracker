const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

// script.js ko io() bata connection request aaucha jaslai hami handle garchau
io.on("connection", function (socket) {
  // jun script.js(frontend) bata data aaucha teslai chai emit garchau to frontend through an event named "recieve_location"
  socket.on("send-location", function (data) {
    io.emit("receive-location", { id: socket.id, ...data }); // ...data = hamile read gareko data(latitude, longitude) jaslai spread operator ko through bata spread garera pathako
  });

  // When we disconnect

  socket.on("disconnect", function () {
    io.emit("user-disconnected", socket.id);
  });

  console.log("connected");
});

server.listen(5000, () => {
  console.log("Running successfully on http://localhost:5000");
});
