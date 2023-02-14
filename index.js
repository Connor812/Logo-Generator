const { ADDRGETNETWORKPARAMS } = require('dns');
const CheckColor = require('./lib/CheckColor')
const { CreateSVG, Circle, Square, Triangle, RenderLogo } = require('./lib/createSVG')
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
            let colorChoice = new ColorChoice(response.name, response.textColor, response.shape, response.shapeColor)
            colorChoice.colorChoice()
        });
}

class ColorChoice {
    constructor(name, textColor, shape, shapeColor) {
        this.name = name
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
    }
    colorChoice() {
        let textColor = this.textColor.replace(/\s/g, '').toLowerCase()
        let shapeColor = this.shapeColor.replace(/\s/g, '').toLowerCase()
        console.log(textColor)
        console.log(shapeColor)
        let textCheck = new CheckColor(textColor)
        let shapeCheck = new CheckColor(shapeColor)
        let textResult = textCheck.checkColor()
        let shapeResult = shapeCheck.checkColor()
        if (textResult == undefined && shapeResult == undefined) {
            console.error('Error: Invalid text and shape color. Please try again.')
            return;
        } else if (textResult == undefined) {
            console.error('Error: Invalid text color. Please try again.')
            return;
        } else if (shapeResult == undefined) {
            console.error('Error: Invalid shape color. Please try again.')
            return;
        } else if (this.textColor == this.shapeColor) {
            console.error('Error: Text and Shape color cannot be the same. Please try again.')
            return;
        } else {
            console.log('All answers valid!');
            let createFile = new CreateSVG(this.name, textColor, this.shape, shapeColor)
            let logoSVG = createFile.shapeChoice()
            console.log(logoSVG)
            let render = new RenderLogo(logoSVG)
            render.renderFile()
        }
    }
}

ask();

module.exports = ColorChoice;