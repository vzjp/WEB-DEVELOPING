/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

var questions = [
    {
        type: 'input',
        name: 'url',
        message: 'What url would you want to convert to qr-code?',
        default: 'Nothing',
      },
]
inquirer
    .prompt(questions)
    .then((answers) => {
        var qrsvg = qr.image(answers.url, {type: "svg"});
        qrsvg.pipe(fs.createWriteStream("qr-img.svg"));
        fs.writeFile("./URL.txt", answers.url, (err) => {
            console.log(err);
        });

        console.log(answers.url);
    });