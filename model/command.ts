import * as fs from "fs-extra";
import { commands } from "node-svn-ultimate";

let config = require("../config.private.json");

export class Command {
    type: CommandType;
    options: any;
}

export class SourceDestPair {
    source: string;
    destination: string;
}

export class SvnExportOptions {
    files: SourceDestPair[];
    directories: SourceDestPair[];
}

export class CommandExecuter {
    svnExport(options: SvnExportOptions) : Promise<string> {
        return new Promise<string>((resolve, reject) => {
            options.files.forEach(element => {
                commands.export(`${config.SvnUrl}${element.source}`, element.destination, { force: true }, (err) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    else {
                        resolve("success");
                    }
                });
            });
        });
    }
}

export enum CommandType {
    SVN_EXPORT_DIR, SVN_EXPORT_FILE, SVN_CHECKOUT_DIR, SVN_CHECKOUT_FILE, COPY_FILE, COPY_DIR, ZIP_DIR
}