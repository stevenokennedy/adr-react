#!/usr/bin/env node
const cmdLineArgs = require("command-line-args");
const adrLib = require("../lib/adr-lib.js");

const mainOptionDefs = [
    { name: "command", defaultOption: true},
    { name: "help", alias: "h", type: Boolean}
]

let mainOptions = cmdLineArgs(mainOptionDefs, { stopAtFirstUnknown: true})
let argv = mainOptions._unknown || [];

if(mainOptions.help) {
    adrLib.help(argv)
}
if(mainOptions.command == "new") {
    try {
        const newOptionDefs = [
            {name: "title", alias: "t"},
            {name: "context", alias: "c"},
            {name: "decision", alias: "d"},
            {name: "status", alias: "s", defaultValue: "approved"},
            {name: "consequences", alias: "C"},
            {name: "supersedes"},
            {name: "depends"}
        ]
        const newOptions = cmdLineArgs(newOptionDefs, {argv})
        if(!newOptions.title || !newOptions.context || !newOptions.decision || !newOptions.consequences) {
            adrLib.help("new");
            return;
        }
        let adrTitle = adrLib.newAdr(
            newOptions.title, 
            newOptions.context, 
            newOptions.decision, 
            newOptions.status, 
            newOptions.consequences,
            newOptions.supersedes,
            newOptions.depends);
        console.log("Created new ADR: " + adrTitle);
    }
    catch(err) {
        console.log(err);
        adrLib.help("new");
    }
}
else {
    adrLib.help();
}
