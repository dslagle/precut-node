"use strict";
const node_svn_ultimate_1 = require("node-svn-ultimate");
let config = require("../config.private.json");
class Command {
}
exports.Command = Command;
class SourceDestPair {
}
exports.SourceDestPair = SourceDestPair;
class SvnExportOptions {
}
exports.SvnExportOptions = SvnExportOptions;
class CommandExecuter {
    svnExport(options) {
        return new Promise((resolve, reject) => {
            options.files.forEach(element => {
                node_svn_ultimate_1.commands.export(`${config.SvnUrl}${element.source}`, element.destination, { force: true }, (err) => {
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
exports.CommandExecuter = CommandExecuter;
(function (CommandType) {
    CommandType[CommandType["SVN_EXPORT_DIR"] = 0] = "SVN_EXPORT_DIR";
    CommandType[CommandType["SVN_EXPORT_FILE"] = 1] = "SVN_EXPORT_FILE";
    CommandType[CommandType["SVN_CHECKOUT_DIR"] = 2] = "SVN_CHECKOUT_DIR";
    CommandType[CommandType["SVN_CHECKOUT_FILE"] = 3] = "SVN_CHECKOUT_FILE";
    CommandType[CommandType["COPY_FILE"] = 4] = "COPY_FILE";
    CommandType[CommandType["COPY_DIR"] = 5] = "COPY_DIR";
    CommandType[CommandType["ZIP_DIR"] = 6] = "ZIP_DIR";
})(exports.CommandType || (exports.CommandType = {}));
var CommandType = exports.CommandType;
//# sourceMappingURL=command.js.map