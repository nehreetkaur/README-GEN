const inquirer = require('inquirer');
const fs = require('fs');




let createIndexTemp = (title, discription, installation, contributor, licence, github, email) => {


    return `# Title
\`\`\`
${title}
\`\`\`

![Licence:${licence}](https://img.shields.io/badge/Licence-${licence}-green.svg)
 

# Discription 



${discription}


# Table of contents

\n* [Installation](#installation)

\n* [Licence](#licence)
\n* [Contributor](#contributor)
\n* [Github](#github)
\n* [Email](#email)
\n* [Questions](#questions)
\n*  [Programming-Language](#Programming-Language ) 
\n* [Resources](#resources)
\n* [DEMONSTRATION-VIDEO](#DEMONSTRATION-VIDEO)


## Installation

${installation}

## Contributor
**${contributor}**


## Licence
THE   **PROECT LICENCE**      is       **${licence}**


[Read-about-MIT](https://opensource.org/licenses/MIT)

[Read-about-GNUGPL](https://opensource.org/licenses/gpl-3.0)

[Read-about-Apache](https://opensource.org/licenses/Apache-2.0)







## Github 

${github}

## Email

${email}

## Programming-Language 
\`\`\`
  Java-Script
 \`\`\`

## Questions


FEEL FREE TO CONTACT ME IN CASE OF ANY QUESTIONS


 E-Mail:  ${email}


GITHUB-USERNAME:  ${github}




[My-GIT-hub](https://github.com/)


[MY-Github-Project-Repository](https://github.com/nehreetkaur/README-GEN)





## Resources

[FOR LICENCE]( https://shields.io/)


[ANOTHER-RESOURCE-REFERRED](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)


## DEMONSTRATION-VIDEO
[VIDEO-DEMO](https://drive.google.com/file/d/1g1MP9RLnj9X3DWB-tGdyxInY9PpQPBZf/view)


### GIF-DEMO
![GIF-DEMO](images/Demo.gif)


### SCREEN-SHOT

![Terminal-screenshot](images/terminalscreenshot.png)


![GENERATED README.md Screenshot](images/1.png)


`;
}
//console.log(createIndexTemp);


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
        choices: ["one", "Two", "NONE"]


    },
    {

        type: 'list',
        name: 'licence',


        message: "Licence name is MIT:",

        default: "MIT",
        choices: ["MIT", "GNUGPL", "Apache."]


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


];



inquirer
    .prompt(questions)


    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers);

        console.log("licence is" + answers.licence);




        const { title, discription, installation, contributor, licence, github, email } = answers;
        const template = createIndexTemp(title, discription, installation, contributor, licence, github, email);





        fs.writeFile('README.md', template, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });



    })
    .catch(error => {
        if (error.isTtyError)

            console.log('The file has been saved!');

    });



//   




