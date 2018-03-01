"use strict"

// Main starting point of the application
import express from "express"
import http from "http"
import bodyParser from "body-parser"
import yaml from "node-yaml-config"
import path from "path"

import router from "./router"

const config = yaml.load(path.join(__dirname, "config.yml"))

// App Setup
const app = express()
app.use(express.static(path.join(__dirname, "config.yml")))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: "*/*" }))
router(app)

// Server setup
const port = process.env.PORT || config.server.port
const server = http.createServer(app)

// Start the server
const connection = server.listen(port, function() {
  console.log("Server is running on http://localhost:" + port)
})

const io = require("socket.io")(connection)

import { Player } from "./controller/player"

let manager = new Player(io)
