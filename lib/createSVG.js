const { extend } = require("lodash")
const { basename } = require("path")

class CreateSVG {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name
    this.textColor = textColor
    this.shape = shape
    this.shapeColor = shapeColor
  }
  shapeChoice() {
    if (this.shape == 'circle') {
      let SVG = new Circle(this.name, this.textColor, this.shape, this.shapeColor)
      SVG.render()
    } else if (this.shape == 'square') {
      let SVG = new Square(this.name, this.textColor, this.shape, this.shapeColor)
      SVG.render()
    } else if (this.shape == 'tringle') {
      let SVG = new Tringle(this.name, this.textColor, this.shape, this.shapeColor)
      SVG.render()
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
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>
  </svg> `
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
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}"/>
  <text x="155" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>
</svg>`
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
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}"/>
    <text x="155" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>
  </svg>`
  }
}

module.exports = { CreateSVG, Circle, Square, Tringle }