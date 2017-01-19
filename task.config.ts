import { Task } from "./model/task";

export const Commands: any = {
    CREATE_DIRECTORY: "CREATE_DIRECTORY",
    COPY_FILE: "COPY_FILE",
    SVN_EXPORT_FILE: "SVN_EXPORT_FILE",
    SVN_EXPORT_DIR: "SVN_EXPORT_DIR",
    VERSION_APP: "VERSION_APP",
    CUSTOM: "CUSTOM"
}

export const Tasks: any[] = [
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
    /*{
        "name": "Copy Precut Files",
        "action": () => {
            console.log(name);
        }
    },
    {
        "name": "Zip Files",
        "action": () => {
            console.log(name);
        }
    },
    {
        "name": "Copy Release Files",
        "action": () => {
            console.log(name);
        }
    },
    {
        "name": "Update JIRA",
        "action": () => {
            console.log(name);
        }
    }*/
]