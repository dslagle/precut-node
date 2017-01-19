"use strict";
const mongodb_1 = require("mongodb");
const mongoURL = "mongodb://127.0.0.1:27017/precut";
class TaskRepository {
    createTask(t) {
        return new Promise((resolve, reject) => {
            const insert = { name: t.name, description: t.description };
            mongodb_1.MongoClient.connect(mongoURL, (err, db) => {
                if (err) {
                    reject(err);
                }
                else {
                    const posts = db.collection("tasks");
                    posts.insertOne(insert)
                        .then(value => {
                        resolve(insert);
                    })
                        .catch(err => reject(err));
                }
            });
        });
    }
    updateTask(t) {
        return new Promise((resolve, reject) => {
            const selector = { _id: new mongodb_1.ObjectID(t._id) };
            const update = { name: t.name, description: t.description };
            mongodb_1.MongoClient.connect(mongoURL, (err, db) => {
                if (err) {
                    reject(err);
                }
                else {
                    const posts = db.collection("tasks");
                    posts.updateOne(selector, update, { w: 1 })
                        .then(value => {
                        update["_id"] = t._id;
                        resolve(update);
                    })
                        .catch(err => reject(err));
                }
            });
        });
    }
    deleteTask(id) {
        return new Promise((resolve, reject) => {
            const selector = { _id: new mongodb_1.ObjectID(id) };
            mongodb_1.MongoClient.connect(mongoURL, (err, db) => {
                if (err) {
                    reject(err);
                }
                else {
                    const posts = db.collection("tasks");
                    posts.findOne(selector)
                        .then(value => {
                        posts.deleteOne(selector)
                            .then(result => {
                            resolve(value);
                        })
                            .catch(err => reject(err));
                    })
                        .catch(err => reject(err));
                }
            });
        });
    }
    getTasks() {
        return new Promise((resolve, reject) => {
            mongodb_1.MongoClient.connect(mongoURL, (err, db) => {
                if (err) {
                    reject(err);
                }
                else {
                    const posts = db.collection("tasks");
                    posts.find().toArray()
                        .then(tasks => {
                        resolve(tasks);
                    })
                        .catch(err => reject(err));
                }
            });
        });
    }
    getTask(id) {
        return new Promise((resolve, reject) => {
            const selector = { _id: new mongodb_1.ObjectID(id) };
            mongodb_1.MongoClient.connect(mongoURL, (err, db) => {
                if (err) {
                    reject(err);
                }
                else {
                    const posts = db.collection("tasks");
                    posts.findOne(selector)
                        .then(value => {
                        resolve(value);
                    })
                        .catch(err => reject(err));
                }
            });
        });
    }
}
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=task.repository.js.map