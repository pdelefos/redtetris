import express from "express"
import http from "http"
import bodyParser from "body-parser"
import yaml from "node-yaml-config"
import path from "path"

import Manager from "./controller/manager"
import router from "./router"

const config = yaml.load(path.join(__dirname, "config.yml"))
const port = process.env.PORT || config.server.port

const initApp = () => {
  const app = express()
  app.use(express.static(path.join(__dirname, "config.yml")))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json({ type: "*/*" }))
  router(app)
  return http.createServer(app)
}

const initEngine = io => {
  let manager = new Manager(io)
}

const wrapIOApp = server => {
  const io = require("socket.io")(server)
  return io
}

export const initServer = () => {
  const server = initApp()
  const io = wrapIOApp(server)
  server.listen(port, () => {
    initEngine(io)
    console.log("Server is running on localhost:" + port)
  })
}

initServer()
