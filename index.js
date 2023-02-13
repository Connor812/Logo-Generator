const { ADDRGETNETWORKPARAMS } = require('dns');
const CheckColor = require('./lib/CheckColor')
const { CreateSVG, Circle, Square, Tringle } = require('./lib/createSVG')
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { result } = require('lodash');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

function ask() {
        inquirer
            .prompt([{
                type: 'maxlength-input',
                message: 'Enter 3 letters for your logo:',
                name: 'name',
                maxLength: 3
            },
            {
                type: 'input',
                message: 'Enter the text color (color or hex key):',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'Choose a shape:',
                name: 'shape',
                choices: ['circle', 'square', 'triangle']
            },
            {
                type: 'input',
                message: 'Enter the shapes color (color or hex key):',
                name: 'shapeColor'
            }
            ])
            .then((response) => {
                console.log(response)
                let textCheck = new CheckColor(response.textColor)
                let shapeCheck = new CheckColor(response.shapeColor)
                let textResult = textCheck.checkColor()
                let shapeResult = shapeCheck.checkColor()
                if (textResult == undefined && shapeResult == undefined) {
                    console.error('Error: Invalid text and shape color. Please try again.')
                    return ask();
                } else if (textResult == undefined) {
                    console.error('Error: Invalid text color. Please try again.')
                    return ask()
                } else if (shapeResult == undefined) {
                    console.error('Error: Invalid shape color. Please try again.')
                    return ask()
                } else if (response.textColor == response.shapeColor) {
                    console.log('Error: Text and Shape color cannot be the same. Please try again.')
                    return ask()
                } else {
                    let object = Object.values(response)
                    let SVG = new CreateSVG(object[0], object[1], object[2], object[3])
                    SVG.shapeChoice()
                }
            });
    }
 

ask()
