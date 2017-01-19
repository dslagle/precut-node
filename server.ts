import * as express from "express";
import * as path from "path";
import * as bp from "body-parser";
import * as http from "http";
import * as sio from "socket.io";

// import { router as gpsRouter } from './routes/gps.router';
import taskRouter from "./routes/task.route";
import alexaRouter from "./routes/alexa.route";

let app = express();

let server = http.createServer(app);
const io = sio(server);

const port: number = 80;

// const options = {
//     key: fs.readFileSync("server.key"),
//     cert: fs.readFileSync("server.crt")
// };

app.use(function(request, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST, GET, PATH, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use("/tasks", taskRouter);
app.use("/alexa", alexaRouter(io));

server.listen(port);