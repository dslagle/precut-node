import * as express from "express";
import { MongoClient, ObjectID } from "mongodb";
import { open } from "open";
import * as assert from "assert";

export default (socketIO: SocketIO.Server): express.Router  => {
    const router = express.Router();
    const mongoURL = "mongodb://127.0.0.1:27017/blog";

    socketIO.on("connect", (socket) => {
        console.log("Connected!");

        socket.on("disconnect", () => {
            console.log("Disconnected!");
        });
    });

    router.get("/", function(request, response) {
        console.log("Call from Alexa!");
        response.status(200).json({ success: true });
    });

    // router.post("/:website", function(request, response) {
    //     const site = `http://${request.params.website}`;
    //     console.log("Opening " + site);
    //     open(site, function(err: string) {
    //         if (err) console.log(err);
    //         else console.log("Done!");
    //     });
    //     response.status(200).json({ success: true });
    // });

    router.post("/search/:search", function(request, response) {
        const term = request.params.search;
        console.log("Searching for " + term);
        socketIO.emit("search", term);
        response.status(200).json({ success: true });
    });

    router.post("/play/:index", function(request, response) {
        const index = request.params.index;
        console.log("Playing video " + index);
        socketIO.emit("play", index);
        response.status(200).json({ success: true });
    });

    return router;
};