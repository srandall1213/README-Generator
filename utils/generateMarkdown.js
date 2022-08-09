// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'GNUGPLv3':
      return '[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'APACHE2':
      return '[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'GPL3':
      return '[![License: GPL 3.0](https://img.shields.io.badge.License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'BSD3':
      return '[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'None':
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': 
      return '[MIT](https://choosealicense.com/licenses/mit/)'
    case 'GNUGPLv3':
      return '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
    case 'APACHE2':
      return '[APACHE 2.0](https://choosealicense.com/licenses/apache-2.0/)'
    case 'GPL3':
      return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    case 'BSD3':
      return '[BSD 3](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    case 'None':
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `The project is licensed under the ${renderLicenseLink(license)} license.`;
  }
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}


## Questions
Please email me at ${data.email} if you have any questions about the repo. You can find more of my work at [${data.username}](https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;