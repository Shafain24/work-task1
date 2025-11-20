import fs from 'fs';
import path from 'path';

function processFileCallback(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) return callback(`Error reading file: ${err.message}`);

        const upperCaseData = data.toUpperCase();
        const newFilename = filename.replace(/(\.\w+)?$/, '-processed.txt');

        fs.writeFile(newFilename, upperCaseData, (err) => {
            if (err) return callback(`Error writing file: ${err.message}`);
            callback(null, `File processed successfully (Callback): ${newFilename}`);
        });
    });
}

function processFilePromise(filename) {
    const newFilename = filename.replace(/(\.\w+)?$/, '-processed.txt');

    return fs.promises.readFile(filename, 'utf8')
        .then(data => {
            const upperCaseData = data.toUpperCase();
            return fs.promises.writeFile(newFilename, upperCaseData);
        })
        .then(() => `File processed successfully (Promise): ${newFilename}`)
        .catch(err => { 
            throw new Error(`Error: ${err.message}`); // Properly re-throw
        });
}

async function processFileAsync(filename) {
    try {
        const data = await fs.promises.readFile(filename, 'utf8');
        const upperCaseData = data.toUpperCase();
        const newFilename = filename.replace(/(\.\w+)?$/, '-processed.txt');
        await fs.promises.writeFile(newFilename, upperCaseData);
        return `File processed successfully (Async/Await): ${newFilename}`;
    } catch (err) {
        throw new Error(`Error: ${err.message}`);
    }
}

const testFile = 'input.txt';

// Run all three approaches independently
processFileCallback(testFile, (err, message) => {
    if (err) {
        console.error('Callback Error:', err);
        return;
    }
    console.log(message);
});

processFilePromise(testFile)
    .then(msg => console.log(msg))
    .catch(err => console.error('Promise Error:', err.message));

(async () => {
    try {
        const msg = await processFileAsync(testFile);
        console.log(msg);
    } catch (err) {
        console.error('Async Error:', err.message);
    }
})();

// Callbacks
// 
// The old way of doing async stuff
// Works okay for one thing at a time
// Gets really messy when you pile on more operations
// Code starts nesting and becomes hard to read

// Promises
// 
// Better than callbacks
// You chain operations with .then()
// Still can get confusing with lots of steps
// Error handling is cleaner than callbacks

// Async/Await
// 
// The new way most people use
// Makes async code look like normal code
// Use 'await' to wait for operations to finish
// Handle errors with regular try/catch
// Just easier to read and work with

// What I Use
// 
// I stick with async/await because it's simpler. 
// The code makes sense when you look at it, 
// and you don't have to deal with messy chains or nesting. 
// It's what most new projects use anyway.
