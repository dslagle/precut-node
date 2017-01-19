"use strict";
exports.Commands = {
    CREATE_DIRECTORY: "CREATE_DIRECTORY",
    COPY_FILE: "COPY_FILE",
    SVN_EXPORT_FILE: "SVN_EXPORT_FILE",
    SVN_EXPORT_DIR: "SVN_EXPORT_DIR",
    VERSION_APP: "VERSION_APP",
    CUSTOM: "CUSTOM"
};
exports.Tasks = [
    {
        "name": "Create Directories",
        "command": "CREATE_DIRECTORY",
        "action": (o) => { console.log("Execute Task Create Directories"); }
    },
    {
        "name": "SVN Export",
        "action": (o) => { console.log("Execute Task SVN"); }
    },
    {
        "name": "Version App",
        "action": (o) => { console.log("Execute Task Version App"); }
    }
];
//# sourceMappingURL=task.config.js.map