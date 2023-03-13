
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');


const render = require('./src/page-template.js');


const teamMembers = [];


function createManager() {
  // inquirer questions
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the name of your manager?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the ID number of your manager?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the email address of your manager? (format: example@mail.com)",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the office number of your manager?",
    },
   
  ]).then(answers => {
 
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
  
    teamMembers.push(manager);
 
    addEmployeeTypes();
  });
}


function createEngineer() {

  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the name of your engineer?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the ID number of your engineer?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the email address of your engineer? (format: example@mail.com)",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the github username of your engineer?",
    },

  ]).then(answers => {
    // feeds user answers into new engineer
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
 
    teamMembers.push(engineer);

    addEmployeeTypes();
  });
}


function createIntern() {

  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the name of your intern?",
    },
    {
      type: "input",
      name: "internId",
      message: "What is the ID number of your intern?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the email address of your intern? (format: example@mail.com)",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the school name of your intern?",
    },

  ]).then(answers => {
 
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    // pushes new intern into empty array
    teamMembers.push(intern);
  
    addEmployeeTypes();
  });
}


function addEmployeeTypes() {

  inquirer.prompt([
    {
      type: "list",
      name: "addEmployeeTypes",
      message: "Which type of employee do you like to add to the team next?",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  // takes user choice
  ]).then(function (userChoice) {
    switch(userChoice.addEmployeeTypes) {
      
      case "Engineer":
        createEngineer();
        break;
   
      case "Intern":
        createIntern();
        break;
     
      case "Finish building team":
        writeFile();
        break;
    };
  });
} 


function writeFile() {

  console.log("Your team has been created!");

  fs.writeFile(distPath, render(teamMembers), "UTF-8", (err) => {
    if (err) throw err;
  })
}


createManager();