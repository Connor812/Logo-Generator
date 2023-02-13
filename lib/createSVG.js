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
      circle.render()
    } else if (this.shape == 'square') {
      let square = new Square(this.name, this.textColor, this.shape, this.shapeColor)
      square.render()
    } else if (this.shape == 'triangle') {
      let tringle = new Tringle(this.name, this.textColor, this.shape, this.shapeColor)
      tringle.render()
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
    let logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>
  </svg> `;

  let logoHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${this.name}</title>
  </head>
  <body>
      ${logoSVG}
  </body>
  </html>`

    let render = new RenderLogo(logoSVG, logoHTML)
    render.renderFile();
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
    let logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}"/>
  <text x="155" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>
</svg>`

let logoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.name}</title>
</head>
<body>
    ${logoSVG}
</body>
</html>`

  let render = new RenderLogo(logoSVG, logoHTML)
  render.renderFile();
  }
}

class Tringle {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name
    this.textColor = textColor
    this.shape = shape
    this.shapeColor = shapeColor
  }
  render() {
    let logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}"/>
    <text x="155" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>
  </svg>`

  let logoHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${this.name}</title>
  </head>
  <body>
      ${logoSVG}
  </body>
  </html>`

    let render = new RenderLogo(logoSVG, logoHTML)
    render.renderFile();
  }
}

class RenderLogo {
  constructor(renderSVG, renderHTML) {
    this.renderSVG = renderSVG
    this.renderHTML = renderHTML
  }
  renderFile() {
    fs.writeFile('logo.svg', this.renderSVG, (err) =>
      err ? console.error(err) : console.log('Logo.svg logged!'))

    fs.writeFile('logo.html', this.renderHTML, (err) =>
      err ? console.error(err) : console.log('Logo.HTML logged!'))
  }
}

module.exports = { CreateSVG, Circle, Square, Tringle }