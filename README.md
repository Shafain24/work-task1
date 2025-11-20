Node.js Fundamentals Assessment
This repository contains my solutions for the Node.js Fundamentals assessment (Days 1–3). It covers everything from environment setup and core modules to custom modules, npm, and async programming. Throughout the assessment, I explored different ways to handle asynchronous tasks: callbacks, promises, and async/await—and I explain why I prefer async/await at the end.
/////////////////////////////////////////////
Table of Contents:

Project Setup

Environment & Basic Node.js

Core Modules & File System

Custom Modules & Module Systems

NPM & Package Management

Event Loop & Async Concepts

Folder Structure

Setup Instructions

Assumptions & Notes

Challenges & Learnings
///////////////////////////////////
Project Setup
Project Folder: node-assessment

Node.js Version: Printed in welcome.js

Entry Point: index.js

Dependencies:

dotenv – to manage environment variables

chalk – to add colors to console outputs

nodemon – dev dependency for live-reloading
/////////////////////////////////////////////////////
Environment & Basic Node.js
Here, I started with a simple introduction to Node.js:

Prints a welcome message

Shows the Node.js version in use

Displays the current working directory

It’s a simple file, but a good way to make sure Node.js is set up properly.
/////////////////////////////////////////////////////////////////////////////////
Core Modules & File System
File: fileManager.js

This file explores the fs module for reading and writing files. I implemented:

createLogFile() – Creates activity.log with the current timestamp

appendLog(message) – Appends messages with timestamp

readLogs() – Reads all logs and prints them

createDirectory() – Creates a data folder if it doesn’t exist

listFiles() – Lists all files in the current directory

I used both synchronous and asynchronous methods and handled errors gracefully.

File: pathUtils.js

Utility functions using Node’s path module:

Get a file’s extension

Join multiple paths

Get the absolute path

Parse a file path into { directory, filename, extension }

These make working with file paths much easier.
/////////////////////////////////////////////////////////////
Custom Modules & Module Systems
ommonJS Modules:

calculator.js – Basic math operations and calculate() method

mathUtils.js – Utility functions like isEven, isOdd, square, and cube

main.js – Demonstrates usage of both modules and handles division by zero

ES Modules:

user.mjs – User class and createUser() default export

validator.mjs – Named exports: validateEmail, validateAge, validateName

app.mjs – Creates two users, validates their info, and prints results
////////////////////////////////////////////////////////////////////////////
NPM & Package Management
File: package.json includes:

Scripts: start, dev, test

Dependencies and devDependencies

File: config.js

Loads environment variables from .env

Provides default values if any variable is missing

File: styledOutput.js

Uses chalk to add color to console output:

Welcome messages in green

Errors in red

Warnings in yellow

Info in blue

displayMenu() shows a colorful menu

File: .env.example

Lists required environment variables without real values

.env is excluded from version control
////////////////////////////////////////////////////////////\
Event Loop & Async Concepts
File: eventLoopDemo.js

Demonstrates the order of execution between synchronous code, setTimeout, and Promises

Comments include predicted output and reasoning in EVENT_LOOP_EXPLANATION.md

File: asyncFileHandler.js

Three ways to handle async file operations:

Callbacks – processFileCallback()

Promises – processFilePromise()

Async/Await – processFileAsync()
//////////////////////////////////////////////////////////////////
Setup Instructions

Clone or download the repository

Run npm install to install dependencies

Copy .env.example into .env and add your actual values


Run scripts:

npm run start      # Run index.js
npm run dev        # Run with nodemon
npm run test       # Test script

Execute any JS files individually for testing, e.g.:

node welcome.js
node fileManager.js
////////////////////////////////////////////////////////////
Assumptions & Notes
As we have chnanged the module the common.js one wont work you need to replace require with import.

Node.js version >= 18 is recommended

ES Modules require "type": "module" in package.json

All async functions include error handling

Both synchronous and asynchronous approaches are demonstrated
////////////////////////////////////////////////////////////////////
Challenges & Learnings

Understanding callback nesting vs Promises vs async/await

Managing module imports/exports for CommonJS and ES Modules together

Handling file operations asynchronously with proper error handling

Predicting the Node.js event loop behavior
//////////////////////////////////////////////////////////