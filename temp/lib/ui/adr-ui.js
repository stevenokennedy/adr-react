const {app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow() {
    console.log("Creating Window");
    win = new BrowserWindow({width: 800, height: 600});
    console.log("Child " + process.cwd());
    win.loadURL(path.resolve("./lib/ui/index.html"));

    win.on("closed", () => {
        console.log("Closing Window");
        win = null;
    })
}

console.log("Registering listener");
app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit()
      }
    })
    
app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});