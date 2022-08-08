// TODO: Include packages needed for this application
const fs = require('fs'); //library for reading and writing files
const inquirer = require('inquirer'); //inquirer package
const generateMarkdown = require('./utils/generateMarkdown'); //link to generateMarkdown.js file

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        //TITLE SECTION
        {
            type: 'input',
            name: 'title',
            message: "What is the name of your project?",
        },
        //DESCRIPTION SECTION
        {
            type: 'input',
            name: 'description',
            message: 'Please write a brief description of your project...',
        },

        //TABLE OF CONTENTS SECTION

        //INSTALLATION SECTION (installation instructions)
        {
            type: 'input',
            name: 'install',
            message: 'Which command needs to be used to install dependencies?',
        },
        //USAGE SECTION (usage information)
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need know about using the repo?',
        },
        //LICENSE SECTION (list, add badge near top, add a notice to the section explaining which license the app is covered under)
        {
            type: 'input',
            name: 'license',
            message: 'Which kind of license is needed for your project?',
        },
        //CONTRIBUTING SECTION (contribution guidelines)
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
        },
        //TESTS SECTION (test instructions)
        {
            type: 'input',
            name: 'tests',
            message: 'Which command needs to be used to run tests?',
        },
        //QUESTIONS SECTION (github -- create github profile link)
        {
            type: 'input', 
            name: 'github',
            message: 'What is your GitHub username?',
        },
        //QUESTIONS SECTION (email)
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();