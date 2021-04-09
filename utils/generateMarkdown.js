// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None' ){
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  } 
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `* [License](##Licenses)`
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None'){
    return `## Licenses
    
    This project is license under ${license} license.
    `
  }
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)} 
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](##Installation)
  * [Using the program](##Usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](##Contributing)
  * [Test](##Testing)
  * [Questions](##Questions)

  ## Installation
  ${data.installation}
  
  ## Using the program
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribute to the program
  ${data.contributing}

  ## Testing
  ${data.testing}
  
  ## Questions and Contact
  Reach out to me via 	[github](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
