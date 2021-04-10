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
    message: 'Describe your program',
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
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  }
];

// Creating a README using the name of the file and the data as placeholders parameters
function writeToFile(fileName, data) {
  //this function allows user to write a README in their own directory
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
  
}

// Creating a function to initialize app
function init() {
// init's first line of operations is running Inquirer  
inquirer
    // pulling from our questions object
    .prompt(questions)
    // collecting responses
    .then(responses => {
      
      // passing our file name and responses as parameters to the function above // FileName= newReadMe.md ; generateMarkdown(responses)=data
      writeToFile('newReadMe.md',generateMarkdown(responses)) 
    })
}

// Function call to initialize app
init();
