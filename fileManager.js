//wont work because of module
//const fs = require('fs');
import fs from 'fs';

function createLogFile() {
    const timestamp = new Date().toLocaleTimeString();
    const message = `Assessment started at ${timestamp}\n`;

    try {
        fs.writeFileSync('activity.log', message);
        console.log("activity.log created successfully");
    } catch (err) {
        console.error("Error creating log file:", err);
    }
}

function appendLog() {
    const timestamp = new Date().toLocaleTimeString();
    const message2 = "This will be appended";
    const logEntry = `[${timestamp}] ${message2}\n`;

    try {
        fs.appendFileSync('activity.log', logEntry);
        console.log("Log entry added");
    } catch (err) {
        console.error("Error appending to log:", err);
    }
}

function readLogs() {
    try {
        const data = fs.readFileSync('activity.log', 'utf-8');
        console.log("The data:\n" + data);
    } catch (err) {
        console.error("Error while reading file:", err);
    }
}
function createDirectory() {
    const dir = 'data';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir); 
        console.log(`Directory '${dir}' created successfully.`);
    } else {
        console.log(`Directory '${dir}' already exists.`);
    }
}

function listFiles() {
    fs.readdir('.', (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
        } else {
            console.log("Files in current directory:");
            files.forEach(file => {
                console.log(file);
            });
        }
    });
}


createLogFile();
appendLog();
readLogs();
createDirectory();
listFiles();

