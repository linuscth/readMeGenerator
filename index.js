// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //generate md files
    fs.writeFile(fileName, generateMarkdown.markdown(data), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    //do all prompts here
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'projectTitle',
                    message: 'what is your project title?'

                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Please provide a short description explaining the what, why, and how of your project.',
                },
                {
                    type: 'input',
                    name: 'installation',
                    message: ' What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
                },
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Please provide instructions and examples for use. The repsonse will be placed under the Usage tag.'

                },
                {
                    type: 'list',
                    name: 'license',
                    message: 'Please select the license that was used in the project.',
                    choices: ['none', 'Apache License 2.0', 'GNU GPL v3', 'MIT License', 'BSD_2--Clause', 'BSD_3--Clause', 'Boost Software License 1.0', 'Creative Commons Zerov1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
                },
                {
                    type: 'input',
                    name: 'contributing',
                    message: 'Please type out the message that you would like to place under the contributing tag. ',
                },
                {
                    type: 'input',
                    name: 'tests',
                    message: 'Please provide examples on how to run them here. The response will go under the test tag. ',
                },
                {
                    type: 'input',
                    name: 'gitHubUserName',
                    message: 'Please provide the technician gitHub Username that viewers will be reaching out. ',
                },
                {
                    type: 'input',
                    name: 'contactInfo',
                    message: 'Please provide the technician email address so that viewers can reaching out',
                }
            ]).then((response) => {
                writeToFile('generatedReadMe.md', response)
            })
}

// Function call to initialize app
init();

