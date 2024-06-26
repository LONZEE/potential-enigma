// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';    // return empty string if no license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`;
  }
  return '';   // return empty string if no license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return '';  // return empty string if no license
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 

  return `# ${data.title} 

  ## Description

${data.description} 

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}


${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}  
${renderLicenseLink(data.license)}  

## Contributing

${data.contribution}

## Tests

${data.test}

## GitHub
${data.github}

## Questions
If you have any questions, please contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
