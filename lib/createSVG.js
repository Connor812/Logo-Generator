const { extend } = require("lodash")
const { basename } = require("path")
const fs = require('fs');

class CreateSVG {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name
    this.textColor = textColor
    this.shape = shape
    this.shapeColor = shapeColor
  }
  shapeChoice() {
    if (this.shape == 'circle') {
      let circle = new Circle(this.name, this.textColor, this.shape, this.shapeColor)
      return circle.render()
    } else if (this.shape == 'square') {
      let square = new Square(this.name, this.textColor, this.shape, this.shapeColor)
      return square.render()
    } else if (this.shape == 'triangle') {
      let tringle = new Triangle(this.name, this.textColor, this.shape, this.shapeColor)
      return tringle.render()
    }
  }
}

class Circle {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name
    this.textColor = textColor
    this.shape = shape
    this.shapeColor = shapeColor
  }
  render() {
    let logoSVG = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>`;
    return logoSVG;
  }
}

class Square {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name
    this.textColor = textColor
    this.shape = shape
    this.shapeColor = shapeColor
  }
  render() {
    let logoSVG = `<rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}"/><text x="155" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>`;
    return logoSVG;
  }
}

class Triangle {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name
    this.textColor = textColor
    this.shape = shape
    this.shapeColor = shapeColor
  }
  render() {
    let logoSVG = `<polygon points="150, 0 275, 200 25, 200" fill="${this.shapeColor}" /><text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>`;
    return logoSVG;
  }
}

class RenderLogo {
  constructor(renderSVG) {
    this.renderSVG = renderSVG
  }
  renderFile() {

    let SVGtemplate = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${this.renderSVG}
</svg>`

    let HTMLtemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Logo Generator</title>
</head>
<body>
    ${SVGtemplate}
</body>
</html>`

    fs.writeFile('./output/logo.svg', SVGtemplate, (err) =>
      err ? console.error(err) : console.log('Logo.svg logged!'))

    fs.writeFile('./output/logo.html', HTMLtemplate, (err) =>
      err ? console.error(err) : console.log('Logo.HTML logged!'))
  }
}

module.exports = { CreateSVG, Circle, Square, Triangle, RenderLogo }