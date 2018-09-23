#!/usr/bin/env node

//const { exec } = require("child_process")

//exec(".\\node_modules\\electron\\dist\\electron .\\lib\\ui\\adr-ui.js", (e, out, err) => {
//    console.log("ErroR" + e);
//    console.log("Out " + out);
//    console.log("ERR " + err);
//});
//console.log("running file")

//var Spawn = require("child_process").spawn;

//var pr = Spawn(".\\node_modules\\electron\\dist\\electron", ["./lib/ui/adr-ui.js", "--enable-transparent-visuals"]);

var proc = require('child_process')
console.log("Parent: " + process.cwd());
var child = proc.spawn("./node_modules/electron/dist/electron", ["./lib/ui/adr-ui.js"], 
    {
        stdio: 'inherit'
    });

child.on('close', function (code) {
  process.exit(code)
})

const handleTerminationSignal = function (signal) {
  process.on(signal, function signalHandler () {
    if (!child.killed) {
      child.kill(signal)
    }
  })
}

handleTerminationSignal('SIGINT')
handleTerminationSignal('SIGTERM')