//Including packages 
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
//Creating an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of the project'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the your Github name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'describe your program',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Tell us how to install your program',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Tell us how to use your program',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How to contribute to your program?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What licences are used?( choose one )',
    choices: [
      'MIT', 
      'Apache', 
      'OpenBSD',
      'ISC' ,
      'None'
    ]
  }
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// // TODO: Create a function to initialize app
function init() {
// init's first line of operations is running Inquirer  
inquirer
    .prompt(questions)
    .then(responses => {
      
      //creating a new file with the responses
      writeToFile('newReadMe.md',generateMarkdown(responses))
    })
}

// // Function call to initialize app
init();
