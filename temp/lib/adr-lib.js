//DEPENDENCIES

const fs = require("fs-extra");
const gitState = require("git-state");
const templating = require("lodash.template");
const moment = require("moment");
const padStart = require("string.prototype.padstart");
if(!String.prototype.padStart) { padStart.shim(); }

//CONSTANTS

const DEFAULT_ADR_PATH = "./doc/arch/";
const DEFAULT_ADR_PATTERN = "ADR-#-";
const MD_TEMPLATE = templating(fs.readFileSync(require.resolve("../templates/markdown.md")));

//PUBLIC FUNCTIONS

let help = function(command) {
    return console.log("This is where the help message goes: " + command);
};

let newAdr = function(title, context, decision, status, consequences, supersedes = null, dependencies = null) {
    let adrStatus = adrCheck();
    if(!adrStatus.existingADRProject) {
        adrSetup();
    }

    console.log("Creating a new ADR");
    /*let doc = [
        { heading: "title", value: title },
        { heading: "context", value: context },
        { heading: "decision", value: decision },
        { heading: "status", value: status },
        { heading: "consequences", value: consequences }
    ];*/
    let doc = {
        title: adrStatus.nextADRNumber + ": " + title,
        date: moment().format("DD-MM-YYYY"),
        context: context,
        decision: decision,
        status: status,
        consequences: consequences,
        dependencies: dependencies ? dependencies : (adrStatus.nextADRNumber > 1 ? adrStatus.nextADRNumber- 1 : "")
    };

    let fileName = DEFAULT_ADR_PATTERN.replace(/#/, adrStatus.nextADRNumber.toString().padStart(4, "0")) + title;
    fs.writeFileSync(DEFAULT_ADR_PATH + fileName + ".md", MD_TEMPLATE(doc));

    return fileName;
}

//PRIVATE FUNCTIONS

let adrCheck = function() {
    let status = { 
        existingADRProject: false,
        nextADRNumber: 1,
        gitRootPath: null
    }
    //Check if we're in a project with ADRs set up 
    if(fs.existsSync(DEFAULT_ADR_PATH)) {
        status.existingADRProject = true;

        //Get the next ADR number
        status.nextADRNumber = fs.readdirSync(DEFAULT_ADR_PATH)
            .map((file) => {
                let matches = file.match(/ADR-([0-9]{4,})-/);
                return (matches && matches[1] ? parseInt(matches[1]): null)
            }).reduce((max, current) => Math.max(max, current), 0) + 1;
        console.log("ADR # " + status.nextADRNumber);
    }
    
    return status;
}

let adrSetup = function() {
    if(!gitState.isGitSync(".")) {
        throw "Error: This tool is intended to be run within a Git project"
    }
    fs.ensureDirSync(DEFAULT_ADR_PATH);
}

/*let markdownWriter = function(values) {
    return values.reduce((md, current) => {
        console.log("Accumulating " + md);
        console.log("Curr " + current.heading + " " + current.value);
        let str = "## " + current.heading.replace(/^\w/, c => c.toUpperCase()) + "\n\n";
        str += current.value;
        md += str + "\n\n";
        console.log("MD " + md);
        return md;
    }, "").substring(1);
}*/

//EXPORTS

exports.newAdr = newAdr;
exports.help = help;