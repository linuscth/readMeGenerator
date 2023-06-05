// TODO: Create a function that returns a license badge based on which license is passed in

const { generate } = require("rxjs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return;
  }
  let combinedOneWord = license.replace(/ /g, '_')
  return `![Badge Image](https://img.shields.io/badge/License-${combinedOneWord}-lightblue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licensesUrl = {
    "MIT License": "https://opensource.org/licenses/MIT",
    "Apache License 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "GNU GPL v3": "https://www.gnu.org/licenses/gpl-3.0.en.html",
    "BSD_2--Clause": "https://opensource.org/licenses/BSD-2-Clause",
    "BSD_3--Clause": "https://opensource.org/licenses/BSD-3-Clause",
    "Mozilla Public License 2.0": "https://www.mozilla.org/en-US/MPL/2.0/",
    "Creative Commons Zerov1.0 Universal": "https://creativecommons.org/licenses/by/4.0/",
    "Eclipse Public License 2.0": "https://www.eclipse.org/legal/epl-2.0/",
    "ISC License": "https://opensource.org/licenses/ISC",
    "GNU Affero General Public License v3.0": "https://www.gnu.org/licenses/agpl-3.0.en.html",
    "GNU Lesser General Public License v2.1": "https://www.gnu.org/licenses/lgpl-3.0.en.html",
    "The Unlicense": "http://unlicense.org/",
    "Boost Software License 1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "GNU GPL v2": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  };
  if (license === 'none') {
    return '';
  }
  return 'the application is covered under ' + '[' + license + ']' + '(' + licensesUrl[license] + ')';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  return '## License\n\n' + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
const markdown = (data) => {
  return `# ${data.projectTitle}\n
  ${renderLicenseBadge(data.license)}\n\n

  ## Description\n
  
 ${data.description}\n\n
  
  ## Table of Contents (Optional)
  
  
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [License](#license)\n
  - [Badges](#Badges)\n
  - [Contribution](#Contribution)\n
  - [Tests](#Tests)\n
  - [Questions](#Questions)\n
  
  ## Installation\n

  ${data.installation}\n\n

  
  ## Usage\n
  
  ${data.usage}\n\n 
  


  ${renderLicenseSection(data.license)}\n\n  




  ## Contributing\n


  ${data.contributing}

  
  ## Tests\n
  ${data.tests}\n


  ## Questions\n

  If you have any questions, please feel free to contact me. my GitHub user name is [${data.gitHubUserName}](https://github.com/${data.gitHubUserName}) and my email address is ${data.contactInfo}

`;
}

module.exports = {
  markdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
