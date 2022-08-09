// TODO: Include packages needed for this application
const fs = require('fs'); //library for reading and writing files
const inquirer = require('inquirer'); //inquirer package
const generateMarkdown = require('./utils/generateMarkdown'); //link to generateMarkdown.js file

// TODO: Create an array of questions for user input
const questions = [
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
        message: 
        'Please write a brief description of your project.\n Use the following questions as a guide: \n - What was your motivation?\n - Why did you build this project?\n - What problem does it solve?\n - What did you learn?\n',
    },
    //INSTALLATION SECTION
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    //USAGE SECTION 
    {
        type: 'input',
        name: 'usage',
        message: 'What information should the user know for using the repo?',
    },
    //CONTRIBUTING SECTION
    {
        type: 'input',
        name: 'contributing',
        message: 'What guidelines should the user follow to contribute to the repo?',
    },
    //TESTS SECTION
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide command examples on how to run tests.',
    },
    //LICENSE SECTION (add badge, add a notice to the section explaining which license the app is covered under)
    {
        type: 'list',
        name: 'license',
        message: 'Which license is needed for your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    //QUESTIONS SECTION
    {
        type: 'input', 
        name: 'username',
        message: 'What is your GitHub username?',
    },
    //QUESTIONS SECTION
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
         err ? console.error(err) : console.log('Success! New README.md file generated.')
    );
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const rmData = generateMarkdown(data);
        writeToFile('README.md', rmData);
    })
};

// Function call to initialize app
init();