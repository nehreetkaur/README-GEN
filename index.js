const inquirer = require('inquirer');
const fs = require('fs');



let createIndexTemp = (title,discription,installation,contributor,licence,github,email) =>{


return  `# Title
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
\n* [My-Github-Link](#github)
\n* [Resources](#resources)



## Installation

**${installation}**

## Contributor
**${contributor}**


## Licence
THE **PROECT LICENCE**   is   **${licence}**


[Read-about-MIT](https://opensource.org/licenses/MIT)

[Read-about-GNUGPL](https://opensource.org/licenses/gpl-3.0)

[Read-about-Apache](https://opensource.org/licenses/Apache-2.0)







## Github 

**${github}**

## Email

**${email}** 

## Programming-Language 
\`\`\`
  Java-Script
 \`\`\`

## Questions

**FEEL FREE TO CONTACT ME IN CASE OF ANY QUESTIONS**

 **E-Mail**:  **${email}**

**GITHUB-USERNAME**:  **${github}**




**[MY-Github-Repository-Link](https://github.com/nehreetkaur/README-GEN)**



## Resources

[FOR LICENCE]( https://shields.io/)


[ANOTHER-RESOURCE-REFERRED](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)



`;
}
//console.log(createIndexTemp);
// https://shields.io/
//https://github.com/hyperium/hyper/issues/525
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

//[![license:mit](https://img.shields.io/badge/License-MIT-blue.svg)]


//MIT  [READ-MORE-ABOUT-LICENCES](https://opensource.org/licenses/MIT)

//(https://opensource.org/licenses/MIT)



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

         type: 'list',
         name: 'licence',
        
       
         message: "Licence name is MIT:",

         default:"MIT",
         choices:["MIT","GNUGPL","Apache."]
        
       
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





    //  if(answers.licence==='MIT'){
      //    licence=== '[![Licensse-MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      //}else if(answers.licence==='GNU GPL'){
        //  licence ==='[![Licensse-GNU GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)'
      //}else {
        //  answers.licence===Apache%202
          // licence=== '[![Licensse-GNU GPL](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)'
      //}