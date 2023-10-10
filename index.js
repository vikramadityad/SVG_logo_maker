import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Triangle, Circle, Square } from './lib/shapes.js';


async function main() {
    try {
        const inputUser = await inquirer.prompt([
            {
                name: 'text',
                message: 'Enter up to three characters to include in the shape:',
                type: 'input',
            },
            {
                name: 'textColor',
                message: 'Enter a color keyword (OR a hexadecimal number) for text:',
                type: 'input',
            },
            {
                name: 'shape',
                message: 'Choose a shape from Triangle, Circle, Square:',
                choices: ['Triangle', 'Circle', 'Square'],
                type: 'input',
            },
            {
                name: 'shapesColor',
                message: 'Enter a color keyword (OR a hexadecimal number) for shape background:',
                type: 'input',
            },
        ]);

        let shapeLogo;

        if (inputUser.shape === 'Triangle') {
            shapeLogo = new Triangle();
        } else if (inputUser.shape === 'Circle') {
            shapeLogo = new Circle();
        } else if (inputUser.shape === 'Square') {
            shapeLogo = new Square();
        }

        shapeLogo.setColor(inputUser.shapesColor);

        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> ${shapeLogo.render()}<text x="150" y="125" font-size="40" fill="${inputUser.textColor}" text-anchor="middle"> ${inputUser.text}</text></svg>`;

        const __filename = fileURLToPath(import.meta.url);

    const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, 'examples', 'logo.svg');
        fs.writeFileSync(filePath, svgString);
        console.log('GeneratedLogo.svg');


    } catch (error) {
        console.error('Error occurred:', error)
    }
}

main();