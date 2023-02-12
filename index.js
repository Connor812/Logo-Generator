const { ADDRGETNETWORKPARAMS } = require('dns');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { result } = require('lodash');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

let colorResult;

ask()

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
        textResult = checkTextcolor(response.textColor)
        shapeResult = checkShapecolor(response.shapeColor)
        if (textResult == undefined && shapeResult == undefined) {
            console.log('Error: Invalid text and shape color. Please try again.')
            return ask();
        } else if (textResult == undefined) {
            console.log('Error: Invalid text color. Please try again.')
            return ask()
        } else if (shapeResult == undefined) {
            console.log('Error: Invalid shape color. Please try again.')
            return ask()
        }  else if (response.textColor == response.shapeColor) {
            console.log('Error: Text and Shape color cannot be the same. Please try again.')
            return ask()
        } 

    });
}

function checkTextcolor(color) {
    ToFResult = isHexColor(color);
    if (ToFResult == true) {
        return true
    } else {
        for (let i = 0; i < CSS_COLOR_NAMES.length; i++) {
            // console.log(i);
            if (color.toLowerCase() == CSS_COLOR_NAMES[i].toLowerCase()) {
                return true
            }
        }
    }
}

function checkShapecolor(color) {
    ToFResult = isHexColor(color);
    if (ToFResult == true) {
        return true
    } else {
        for (let i = 0; i < CSS_COLOR_NAMES.length; i++) {
            // console.log(i);
            if (color.toLowerCase() == CSS_COLOR_NAMES[i].toLowerCase()) {
                return true
            }
        }
    }
}



const isHexColor = color => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];
