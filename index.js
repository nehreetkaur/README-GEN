const inquirer = require('inquirer');
const fs = require('fs');



let createIndexTemp = (title,discription,installation,contributor,licence,github,email) =>{


return  `# Title
${title}


[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 

# Discription 



${discription}


# Table of contents

\n* [Installation](#Installation)

\n* [Licence](#Licence)
\n* [Contributor](#Contributor)
\n* [github](#github)
\n* [email](#email)
\n* [Questions](#Questions)


## Installation

**${installation}**

## Contributor
**${contributor}**


## Licence
**${licence}**


MIT  [READ-MORE-ABOUT-LICENCES](https://opensource.org/licenses/MIT)





## github 
**${github}**

## email
**${email}** 

## Questions

**FEEL FREE TO CONTACT ME IN CASE OF ANY QUESTIONS**

### E-Mail:  **${email}**

### GITHUB-USERNAME:  **${github}**


[My-GITHUB_-inkk](https://github.com/)



`;
}
//console.log(createIndexTemp);
// https://shields.io/
//https://github.com/hyperium/hyper/issues/525
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

//[![license:mit](https://img.shields.io/badge/License-MIT-blue.svg)]







var questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the title of project?",
    },

    {
        type: 'input',
        name: 'discription',
        message: "Please enter some discription?",



    },



    {
        type: 'input',
        name: 'installation',
        message: "Please enter in breif requirement for installation?",
    },
    {
        type: 'list',
        name: 'contributor',
        message: "Please enter if there are any contributors",
        choices:["one","Two","NONE"]


    },
    {

        type: 'input',
        name: 'licence',
        
       
        message: "Licence name is:?",
        default:"MIT",
        
       
    },
    // {
    //     type: 'input',
    //     name: 'name',
    //     message: "What is your name",
    // },
    {
        type: 'input',
        name: 'github',
        message: "What's your github-username",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email",
    },  
    

    // {
    //     type: 'input',
    //     name: 'questions',
    //     message: "Any Questions",
    // }

];



inquirer
    .prompt(questions)


    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers);

        console.log("licence is" +answers.licence);

        const checking=(licence) =>{
            if(licence==='MIT'){
                return '[![Licensse-MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            }else if(licence==='GNU GPL'){
                return  '[![Licensse-GNU GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)'
            }else if(licence==='Apache 2.0'){
                return  '[![Licensse-GNU GPL](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)'
            }
        }

        const { title,discription,installation,contributor,licence,github,email } = answers;
        const template = createIndexTemp(title,discription,installation,contributor,licence,github,email);

        
           


        fs.writeFile('README.md', template, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });



    })
    .catch(error => {
        if (error.isTtyError)

            console.log('The file has been saved!');

    });










// fs.writeFile('readme.md', temp, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });