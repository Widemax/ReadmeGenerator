// Function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  let badge = '';
  switch (license) {
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Apache 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'GPL v3':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'BSD 3-Clause':
      badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    default:
      badge = '';
  }
  return badge;
}

// Function to return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  let link = '';
  switch (license) {
    case 'MIT':
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      link = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL v3':
      link = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3-Clause':
      link = '(https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      link = '';
  }
  return link;
}

// Function to return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return 'This project is not licensed.';
  }
  return `This project is licensed under the ${license} license ${renderLicenseLink(license)}.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me with the information below:

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

export default generateMarkdown;
