"use strict";
const express = require("express");
const bp = require("body-parser");
const http = require("http");
const sio = require("socket.io");
// import { router as gpsRouter } from './routes/gps.router';
const task_route_1 = require("./routes/task.route");
const alexa_route_1 = require("./routes/alexa.route");
let app = express();
let server = http.createServer(app);
const io = sio(server);
const port = 80;
// const options = {
//     key: fs.readFileSync("server.key"),
//     cert: fs.readFileSync("server.crt")
// };
app.use(function (request, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST, GET, PATH, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use("/tasks", task_route_1.default);
app.use("/alexa", alexa_route_1.default(io));
server.listen(port);
//# sourceMappingURL=server.js.map