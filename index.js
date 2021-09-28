const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = 
['What is your project name?',
'What was the goal of this project?',
'What did you learn in this project?',
'What problems did you run into in this project?',
'How does the user install this project?',
'What do you want to name the file? please use all caps and do not include the file type.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: questions[0],
        },{
            type: 'input',
            name: 'goal',
            message: questions[1],
        },{
            type: 'input',
            name: 'lessons',
            message: questions[2],
        },{
            type: 'input',
            name: 'challenges',
            message: questions[3],
        },{
            type: 'input',
            name: 'install',
            message: questions[4],
        },{
            type: 'input',
            name: 'fileName',
            message: questions[5],
        }
        ]).then((data) => {
            const template = `
                # ${data.name}\n
                ## Project Goal\n
                ${data.goal}\n
                ## Lessons Learned\n
                ${data.lessons}\n
                ## Project Challenges\n
                ${data.challenges}\n
                ## Installation\n
                ${data.install}
                ---\n`
            writeToFile(`${data.fileName}.md`,template);
        });
    
}

// Function call to initialize app
init();
