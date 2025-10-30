"use strict";

const Path = require("path");
const ChildProcess = require("child_process");

const PathToPSEngine = Path.join("C:", "Program Files", "PowerShell", "7", "pwsh.exe");
const PathToPSFile = Path.join("D:", "Front-end Programming", "JS Projects",
    "My Projects", "node-learning", "command.ps1");

ChildProcess.exec(`"${PathToPSEngine}" -ExecutionPolicy Bypass -File "${PathToPSFile}"`,
    (error, stdout, stderr) => {
        if (error) {
            console.error(error);
        }

        if (stderr) {
            console.error(stderr);
        }

        console.log(stdout);
    });
