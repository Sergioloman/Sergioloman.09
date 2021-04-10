// Creating license badges based on which license is passed in.
function renderLicenseBadge(license) {
  if (license !== 'None' ){
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  } 
  // no license = empty string
  return ``
}

// Creating license link
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `* [License](#Licenses)`
  }
  // no license = empty string
  return ``
}

// Creating the license section of README
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## Licenses
    
    This project is license under ${license} license
    `
  }
  // no license= empty string
  return ``
}

// Creating the markdown for README. Data = responses from index.js
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)} 

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installing the program](#Installation)
  * [Using the program](#Usage)
  ${renderLicenseLink(data.license)}
  * [Contribute](#Contributing)
  * [Contact](#Contact)

  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Contact

  Please feel free to reach out to me via email at ${data.email} or trough [github](https://github.com/${data.github}) if you have any questions

`;
}

module.exports = generateMarkdown;
