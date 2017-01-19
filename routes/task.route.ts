import { Router } from "express";
import { MongoClient, ObjectID } from "mongodb";
import { TaskRepository } from "../repository/task.repository";
import { CommandExecuter, SvnExportOptions } from "../model/command";
import * as assert from "assert";

const router = Router();
const mongoURL = "mongodb://127.0.0.1:27017/precut";

const taskRepository = new TaskRepository();

router.post("/execute", function(request, response) {
    let options: SvnExportOptions = {
        files: [ { source: "/trunk/RM/RMSoftware/Library/readme.txt", destination: "data" } ],
        directories: []
    };

    new CommandExecuter().svnExport(options)
        .then(data => { response.end(data); })
        .catch(err => { console.log(err); response.status(500).json({ error: err }); });
});

router.get("/", function(request, response) {
    taskRepository.getTasks()
        .then(tasks => response.status(200).json(tasks))
        .catch(err => response.status(404).json({ error: err }));
});

router.post("/", function(request, response) {
    taskRepository.createTask({ name: request.body.name, description: request.body.description })
        .then(task => response.status(201).json(task))
        .catch(err => response.status(401).json({ error: err }));
});

router.patch("/", function(request, response) {
    taskRepository.updateTask({ _id: request.body._id, name: request.body.name, description: request.body.description })
        .then(task => response.status(200).json(task))
        .catch(err => response.status(404).json({ error: err }));
});

router.get("/:id", function(request, response) {
    taskRepository.getTask(request.params.id)
        .then(task => response.status(200).json(task))
        .catch(err => response.status(404).json({ error: err }));
});

router.delete("/:id", function(request, response) {
    taskRepository.deleteTask(request.params.id)
        .then(task => response.status(200).json(task))
        .catch(err => response.status(404).json({ error: err }));
});

export default router;