import { MongoClient, ObjectID } from "mongodb";
import * as assert from "assert";
import { Task } from "../model/task";

const mongoURL = "mongodb://127.0.0.1:27017/precut";

export class TaskRepository {
    createTask(t: Task): Promise<Task> {
        return new Promise<Task>((resolve, reject) => {
            const insert = { name: t.name, description: t.description };

            MongoClient.connect(mongoURL, (err, db) => {
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

    updateTask(t: Task): Promise<Task> {
        return new Promise<Task>((resolve, reject) => {
            const selector = { _id: new ObjectID(t._id) };
            const update = { name: t.name, description: t.description };

            MongoClient.connect(mongoURL, (err, db) => {
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

    deleteTask(id: string): Promise<Task> {
        return new Promise<Task>((resolve, reject) => {
            const selector = { _id: new ObjectID(id) };
            
            MongoClient.connect(mongoURL, (err, db) => {
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

    getTasks(): Promise<Task[]> {
        return new Promise<Task[]>((resolve, reject) => {
            MongoClient.connect(mongoURL, (err, db) => {
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

    getTask(id: string): Promise<Task> {
        return new Promise<Task>((resolve, reject) => {
            const selector = { _id: new ObjectID(id) };
            
            MongoClient.connect(mongoURL, (err, db) => {
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