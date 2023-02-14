const creatSVG = require('../lib/createSVG')
const { CreateSVG, Circle, Square, Tringle } = require('../lib/createSVG') 

describe('creatSVG', () => {
    describe('testShapeCircle', () => {
        it('should produce a string of html code', () => {
            const circle = new CreateSVG('Con', 'blue', 'circle', 'red');
            const result = `<circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">Con</text>`;
            expect(circle.shapeChoice()).toMatch(result)
        });
    });
    describe('testShapeSquare', () => {
        it('should produce a string of html code', () => {
            const square = new CreateSVG('Con', 'blue', 'square', 'red');
            const result = `<rect width="200" height="200" x="50" y="0" fill="red"/><text x="155" y="120" font-size="60" text-anchor="middle" fill="blue">Con</text>`;
            expect(square.shapeChoice()).toMatch(result)
        });
    });
    describe('testShape', () => {
        it('should produce a string of html code', () => {
            const triangle = new CreateSVG('Con', 'blue', 'triangle', 'red');
            const result = `<polygon points="150, 0 275, 200 25, 200" fill="red" /><text x="150" y="140" font-size="60" text-anchor="middle" fill="blue">Con</text>`;
            expect(triangle.shapeChoice()).toMatch(result)
        });
    });
});