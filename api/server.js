const express = require("express");

const server = express();

const userRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const tweetsRouter = require("./tweets/tweets-router");

server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);
server.use("/api/tweet", tweetsRouter);

server.get("/", (req, res) => {
  res.json("r");
});
module.exports = server;
