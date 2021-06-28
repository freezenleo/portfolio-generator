const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length); //const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const [name, github] = profileDataArgs;

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
//     console.log("=============");
//     //is the same as this
//     profileDataArr.forEach(profileItem =>
//         console.log(profileItem)
//     );
// }

// printProfileData(profileDataArgs);

// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());



fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});

