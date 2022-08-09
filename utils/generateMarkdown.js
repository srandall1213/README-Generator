// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License Badge
![GitHub license](url to that license) 

## Description
${data.description}

## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing] (#Contributing)
  - [Tests] (#Tests)
  - [License] (#License)
  - [Questions] (#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
The project is licensed under the ${data.license} license. 

## Questions
Please email me at ${data.email} if you have any questions about the repo. You can find more of my work at [${data.username}](https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;